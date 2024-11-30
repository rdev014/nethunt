
import { connect } from '@/dbConfig/dbConfig'
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

connect();


export async function POST(resquest: NextRequest) {
    try {
        const reqBody = await resquest.json();
        const { token } = reqBody;
        

        if (!token) {
            return NextResponse.json({ error: "Token is missing" }, { status: 400 })
        }

        const decode = jwt.verify(token, process.env.TOKEN_SECRET!) as { userId: string }
        const userId = decode.userId;

        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ error: "user not found" }, { status: 404 })
        }
        
        if (user.isVerified) {
            return NextResponse.json({ message: "Email already verified" }, { status: 200 });
        }

        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save();


        return NextResponse.json({ message: "Email  verified", success: true });

       // Your main logic here
} catch (error: unknown) {
    console.error("Error while verifying email:", error);

    // Safely extract the error message
    const errorMessage = error instanceof Error 
        ? error.message 
        : "An unknown error occurred";

    return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
    );
}
}
