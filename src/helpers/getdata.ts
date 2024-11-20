import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

interface decodetoken {
    id: string;
    username: string;
    email: string;
}


export const getdata = (request: NextRequest): string | null => {


    try {
        const token = request.cookies.get("token")?.value || '';

        if (!token) {
            throw new Error("token is missing")
        }
        const decodetoken = jwt.verify(token, process.env.TOKEN_SECRET!) as decodetoken;
        return decodetoken.id;

    } catch (error: unknown) {
        console.error(error);
        throw new Error("TOken is invalid,  or expired or unknown error occured")
    }
}
