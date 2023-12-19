import React, {useEffect, useState} from "react"

const BAContext = React.createContext()

function BrandonAuthorContextProvider(props) {

    const nav = document.getElementById("nav")

    const [isShowing, setIsShowing] = useState(false)
    const [isTrue, setIsTrue] = useState(false)


    const toggleSidebar = () => {
        console.log("toggle working!", isShowing)
        isShowing === true ? setIsShowing(false) : setIsShowing(true)
        console.log(isShowing)
    }

    function onOff() {
        if(isTrue) {
            nav.className.replace("translate-x-full", "translate-x-0")
            setIsTrue(false)
            console.log("set to false")
        }
        else {
            nav.className.replace("translate-x-0", "translate-x-full")
            setIsTrue(true)
            console.log("set to true")
        }
    }

    return (
        <BAContext.Provider value={{
            toggleSidebar, isShowing, setIsShowing, onOff, isTrue, setIsTrue
        }}>
            {props.children}
        </BAContext.Provider>
    )
}

export {BAContext, BrandonAuthorContextProvider}