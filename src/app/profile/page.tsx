"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, {useState, useEffect} from "react";
import Link from "next/link";


export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            console.log('Logout sucessful')
            router.push('/login')
        } catch (error: any) {
            console.log(error.message)
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data)
        setData(res.data.data._id)
    }
    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <h1>Profile</h1>
                <hr />
                <p>Profile Page</p>
                <h2>{data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
                <hr />
                <button
                onClick={getUserDetails}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                >Get user details</button>
                <hr />
                <button
                onClick={logout}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >Logout</button>
            </div>
        </div>
    )
}