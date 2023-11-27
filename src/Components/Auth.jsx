
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
    const signIn = async () => {
        try {
        await createUserWithEmailAndPassword(auth, email, password)
    }
 catch (error) {
    console.log(error)
}
}

const signInWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth, provider)
    } catch (error) {
        console.log(error)
    }
}

const logout = async () => {
    try {
        await signOut(auth)
    } catch (error) {
        console.log(error)
    }
}

    return (
        <div className="auth">
            <input 
            placeholder="Email..." 
            onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
            placeholder="Password..." 
            onChange={(e) => setPassword(e.target.value)} 
            />
            <button className="sign-in" onClick={signIn}>Sign In</button>

            <button className="google" onClick={signInWithGoogle}>Sign In With Google</button>

            <button className="logout" onClick={logout}>Logout</button>
        </div>
    )
    }