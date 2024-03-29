import { useState } from "react"
import { createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        onAuthStateChanged
        } from "firebase/auth"
import { auth } from "./firebase-config"

function App() {

    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })
    console.log(registerEmail, registerPassword)
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

            <button>Sign Out</button>
        </div>
    )
}

export default App