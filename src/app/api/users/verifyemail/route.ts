import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/usermodel";




connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {token} = reqBody
        console.log(token)
        const user = await User.findOne({verifyToken: token,
            verifyTokenExpiry: {$gt: Date.now()} 
        })

        if(!user) {
            return NextResponse.json({error: "User not found"}, {status: 400})
        }
        console.log(user)

        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save();

        return NextResponse.json({message: "email verified!",
        success: true,
    })

    } catch (error: any) {
        NextResponse.json({
            error: error.message
        }, {status: 500})
    }
}