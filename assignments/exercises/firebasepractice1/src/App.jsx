import { useState, useEffect } from "react"
import { createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        onAuthStateChanged,
        signOut
        } from "firebase/auth"
import { auth } from "./firebase-config"

function App() {

    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const [user, setUser] = useState({})

    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser)
    // })
    useEffect(() => {
        auth.onAuthStateChanged(async (currentUser) => {
            if(currentUser) {
                setUser(currentUser); 
            }
        })
    }, [])
    const updateUser = async () => {
        await onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)    
        })
    }
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user)
        }
        catch(error) {
            console.log(error.message)
        }
    }
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user)
        }
        catch(error) {
            console.log(error.message)
        }
    }
    const logout = async () => {
        console.log("clicked signout")
        await signOut(auth)
        updateUser()
    }
    
    return (
        <div>
            <div>
                <h3>Register User</h3>
                <input 
                    placeholder="Email" 
                    onChange={(e) => setRegisterEmail(e.target.value)}
                />
                <input 
                    placeholder="Password" 
                    onChange={(e) => setRegisterPassword(e.target.value)}
                />
                <button onClick={register}>Create User</button>
            </div>

            <div>
                <h3>Login</h3>
                <input 
                    placeholder="Email"
                    onChange={(e) => setLoginEmail(e.target.value)}
                />
                <input 
                    placeholder="Password"
                    onChange={(e) => setLoginPassword(e.target.value)}
                />
                <button onClick={login}>Login</button>
            </div>

            <h4>user Logged In: {user?.email}</h4>

            <button onClick={logout}>Sign Out</button>
        </div>
    )
}

export default App