import { auth, googleProvider } from "../config/firebase"
import {    createUserWithEmailAndPassword, 
            signInWithPopup, 
            signOut, 
            signInWithEmailAndPassword, 
            onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"

function Auth() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [registerEmail, setRegisterEmail] = useState("")
    const [user, setUser] = useState({})
    
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })
    // const signIn = async () => {
    //     try {
    //         await signInWithEmailAndPassword(auth, email, password)
    //     }
    //     catch(err) {
    //         console.error(err)
    //     }
    // }
    // const signInWithGoogle = async () => {
    //     try {
    //         await signInWithPopup(auth, googleProvider)
    //     }
    //     catch(err) {
    //         console.error(err)
    //     }
    // }
    const logout= async () => {
        try {
            await signOut(auth)
        }
        catch(err) {
            console.error(err)
        }
    }


    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth, 
                registerEmail, 
                registerPassword
            )
            console.log(user)
        }
        catch(error) {
            console.log(error.message)
        }
    }
    function emailInput(e) {
        setRegisterEmail(e.target.value)
        console.log(registerEmail)
    }
    function passwordInput(e) {
        setRegisterPassword(e.target.value)
        console.log(registerPassword)
    }

    return (
        <div>
            <h1>User Logged In: {user?.email}</h1>
            <br />
            <br />
            <br />
            <br />
            <div>
                <h2>Register User</h2>
                <input 
                    type="text"
                    placeholder="Email"
                    onChange={(e )=> setRegisterEmail(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Password"
                    onChange={(e) => setRegisterPassword(e.target.value)}
                />
                <button onClick={register}>Create User</button>
            </div>
            {/* <div>
                <h2>Login</h2>
                <input 
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    placeholder="Password"
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={signIn}>Sign In</button>
            </div>
            <br />
            <br />
            <button onClick={signInWithGoogle}>Sign In With Google</button> */}
            <br />
            <br />
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Auth

