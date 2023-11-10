import { getTokenData } from "@/helpers/getTokenData";

import { NextRequest, NextResponse } from "next/server";

import User from "@/models/usermodel";
import { connect } from "@/dbconfig/dbconfig";

connect()

export async function GET(request: NextRequest) {
    try {
        const userID = await getTokenData(request);
        const user = await User.findOne({_id: userID}).select("-password")
        return NextResponse.json({
            message: "User found",
            data: user
        })

    } catch (error:any) {
        NextResponse.json({error: error.message}, {status: 400})
    }
}