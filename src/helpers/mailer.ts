import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';

interface SendEmailProps {
    email: string;
    emailType: 'VERIFY' | 'RESET';
    userId: string;
    verificationLink?: string;
}

export const sendEmail = async ({ email, emailType, userId, verificationLink }: SendEmailProps) => {
    try {
        // Check if the required environment variables are set
        const mailHost = process.env.MAIL_HOST;
        const mailPort = process.env.MAIL_PORT;
        const mailUsername = process.env.MAIL_USERNAME;
        const mailPassword = process.env.MAIL_PASSWORD;
        const mailFromAddress = process.env.MAIL_FROM_ADDRESS;

        if (!mailHost || !mailPort || !mailUsername || !mailPassword || !mailFromAddress) {
            throw new Error('Mail environment variables are missing.');
        }

        const hashedToken = await bcryptjs.hash(userId.toString(), 10);
        const expiryTime = Date.now() + 3600000;

        // Update the user with the hashed token and expiry based on the email type
        if (emailType === 'VERIFY') {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: expiryTime,
            });
        } else if (emailType === 'RESET') {
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: expiryTime,
            });
        }

        // Check if verificationLink is provided (for 'VERIFY' or 'RESET' email type)
        if (!verificationLink) {
            throw new Error('Verification link is required.');
        }

        // Set up the email transport
        const transport = nodemailer.createTransport({
            host: mailHost,
            port: Number(mailPort), // Ensure port is a number
            auth: {
                user: mailUsername,
                pass: mailPassword,
            },
            secure: false, // Use true if using SSL/TLS (usually for port 465)
        });

        // Set up the mail options
        const mailOptions = {
            from: mailFromAddress,
            to: email,
            subject: emailType === 'VERIFY' ? 'Verify your email address' : 'Reset your password',
            html: `<p>Click <a href="${verificationLink}">here</a> to ${emailType === 'VERIFY' ? 'verify your email address' : 'reset your password'}.</p>`,
        };

        // Send the email
        const mailResponse = await transport.sendMail(mailOptions);

        return mailResponse;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.stack); // Log the error stack for debugging purposes
            throw new Error(`Failed to send email: ${error.message}`);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};
