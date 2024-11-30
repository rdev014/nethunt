import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';  // Importing jwt for token signing


// Connect to the database
connect();


export async function POST(request: NextRequest) {
  try {
    // Parse the incoming JSON request body
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // Validate the presence of email and password
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required.' },
        { status: 400 }
      );
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: 'User not found.' },
        { status: 400 }
      );
    }

    // Validate password with bcryptjs
    const validPass = await bcryptjs.compare(password, user.password);
    if (!validPass) {
      return NextResponse.json(
        { error: 'Invalid password.' },
        { status: 400 }
      );
    }

    console.log('Logged in successfully');

    // Create token payload
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email
    };

    // Sign JWT token with a secret (ensure TOKEN_SECRET is set in .env)
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn  : '1d' });

    // Prepare the response with token in cookies
    const response = NextResponse.json({
      message: 'Login successful',
      success: true
    });

    // Set the JWT token in the response cookies (httpOnly for security)
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Only secure cookies in production
      sameSite: 'strict', // Security to prevent CSRF attacks
      path: '/' // Make sure the token is accessible across the site
    });

    return response;
  } catch (error: unknown) {
    // Handle errors with a generic message
    if (error instanceof Error) {
        // Log the error message for debugging
        console.error('Login error:', error.message);

        // Respond with a 500 error and a message
        return NextResponse.json(
          { error: 'Something went wrong. Please try again later.' },
          { status: 500 }
        );
    } else {
        // Handle unexpected error types
        console.error('Unexpected error:', error);

        // Respond with a 500 error and a fallback message
        return NextResponse.json(
          { error: 'An unknown error occurred. Please try again later.' },
          { status: 500 }
        );
    }
}

}
