"use client";
import Link from "next/link";
import React from "react"
import { useRouter } from "next/navigation";
// import {axios} from "axios";



export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const onSignup = async () => {

    }

    return (
        // <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-grey-lighter">
        //     <h1 >Signup</h1>
        //     <hr />
        //     <label htmlFor="username">username</label>
        //     <input 
        //         id="username"
        //         type="text"
        //         value={user.username}
        //         onChange={(e) => setUser({...user, username: e.target.value})}
        //         placeholder="username" 
        //     ></input>
        //     <label htmlFor="email">email</label>
        //     <input 
        //         id="email"
        //         type="text"
        //         value={user.email}
        //         onChange={(e) => setUser({...user, email: e.target.value})}
        //         placeholder="email" 
        //     ></input>
        //     <label htmlFor="password">password</label>
        //     <input 
        //         id="password"
        //         type="text"
        //         value={user.password}
        //         onChange={(e) => setUser({...user, password: e.target.value})}
        //         placeholder="password" 
        //     ></input>
        // </div>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        id="username"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        type="text"
                        value={user.username}
                        onChange={(e) => setUser({...user, username: e.target.value})}
                        placeholder="Username" />

                    <input 
                        id="email"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        type="text"
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                        placeholder="Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-500 text-black hover:bg-green-600 focus:outline-none my-1"
                    >Create Account</button>

                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account?&nbsp; 
                    <a className="no-underline border-b border-blue-500 text-blue-500" href="../login/">
                    Log in
                    </a>.
                </div>
            </div>
        </div>
    )
}