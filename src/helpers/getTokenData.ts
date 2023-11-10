import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getTokenData = (request: NextRequest) => {
    try {

        const encoded_token = request.cookies.get("token")?.value || '';

        const decoded_token:any = jwt.verify(encoded_token, process.env.TOKEN_SECRET!);

        return decoded_token.id;

    } catch (error: any) {
        throw new Error(error.message)
    }
}