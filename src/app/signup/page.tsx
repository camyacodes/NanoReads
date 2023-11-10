"use client";
import Link from "next/link";
import React, { useEffect } from "react"
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";



export default function SignupPage() {
    const router = useRouter();
    const [loading, setLoading] = React.useState(false)
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user)
            console.log("signup success", response.data)
            router.push("/login")
        } catch (error:any) {
            console.log("Signup failed", error.message)

            
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.username.length > 0 && user.password.length > 0)
        {setButtonDisabled(false) } else {
            setButtonDisabled(true)
        }
    }, [user]);

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">{loading ? "Creating Account..." : "Sign up"}</h1>
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
                        onClick={onSignup}
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-500 text-black hover:bg-green-600 focus:outline-none my-1"
                    >{buttonDisabled ? "Cannot Signup" : "Create Account"} </button>

                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account?&nbsp; 
                    <Link className="no-underline border-b border-blue-500 text-blue-500" href="/login">
                    Log in
                    </Link>.
                </div>
            </div>
        </div>
    )
}