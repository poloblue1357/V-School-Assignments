import React, {useState} from "react"
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {

    const initState = { 
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || '', 
        issues: [],
        allIssues: [],
        disable: false,
        disableDownVote: false,
        voteCount: 0,
        addend: 0
    }

    const [userState, setUserState] = useState(initState)
    const [disable, setDisable] = useState()
    const [disableDownVote, setDisableDownVote] = useState()
    const [voteCount, setVoteCount] = useState(0)
    const [addend, setAddend] = useState(0)

    function signup(credentials) {
        axios.post("/auth/signup", credentials) 
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user, 
                token
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function login(credentials) {
        axios.post("/auth/login", credentials) 
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getUserIssues()
            getAllIssues()
            setUserState(prevUserState => ({
                ...prevUserState,
                user, 
                token
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: '',
            issues: [],
            allIssues: []
        })
    }

    function getAllIssues() {
        userAxios.get("/api/issue")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    allIssues: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function getUserIssues() {
        userAxios.get("/api/issue/user/allIssues")
            .then(res => {
                // console.log(res.data)
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addIssue(newIssue) {
        userAxios.post("/api/issue", newIssue)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                issues: [...prevState.issues, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function upVote(voteCount) {
        userAxios.post("/api/vote", voteCount)
            .then(res => {
                console.log(res)
                setUserState(prevState => ({
                    ...prevState,
                    setVoteCount: res.data,
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function downVote(voteCount) {
        userAxios.post("/api/vote", voteCount)
            .then(res => {
                console.log(res)
                
                setUserState(prevState => ({
                    ...prevState,
                    setVoteCount: res.data - 1
                })) 
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function changeUpVotes() {
        return (
            setAddend(prevCount => 
                prevCount === 1 ? 0 : 1
            ),
            upVote(),
            setDisable(true),
            setDisableDownVote(false)
            
            
        )
    }
    function changeDownVotes() {
        return (
            setAddend(prevCount => prevCount === -1 ? 0 : -1),
            downVote(),
            setDisableDownVote(true),
            setDisable(false)
            
        )
    }

    return (
        <UserContext.Provider value={{
            ...userState,
            signup,
            login,
            logout,
            addIssue,
            upVote,
            disable, setDisable,
            disableDownVote, setDisableDownVote,
            voteCount, setVoteCount,
            addend, setAddend,
            changeUpVotes, changeDownVotes
        }}>
            {props.children}
        </UserContext.Provider>
    )
}