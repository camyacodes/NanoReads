"use client";
import Link from "next/link";
import React from "react"
import { useRouter } from "next/navigation";
// import {axios} from "axios";



export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    const onLogin = async () => {

    }

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Login</h1>
                    <input 
                        id="email"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        type="text"
                        value={user.email}
                        name="email"
                        onChange={(e) => setUser({...user, email: e.target.value})}
                        placeholder="Email" />

                    <input
                        id="password" 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                        placeholder="Password" />

                    <button
                        onClick={onLogin}
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-500 text-black hover:bg-green-600 focus:outline-none my-1"
                    >Login</button>

                </div>

                <div className="text-grey-dark mt-6">
                    Don't have an account?&nbsp; 
                    <Link className="no-underline border-b border-blue-500 text-blue-500" href="/signup">
                    Sign up
                    </Link>.
                </div>
            </div>
        </div>
    )
}