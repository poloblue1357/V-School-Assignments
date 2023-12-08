import React, {useEffect, useState} from "react"

const BAContext = React.createContext()

function BrandonAuthorContextProvider(props) {

    const [isShowing, setIsShowing] = useState(false)


    const toggleSidebar = () => {
        console.log("toggle working!", isShowing)
        isShowing === true ? setIsShowing(false) : setIsShowing(true)
        console.log(isShowing)
    }



    return (
        <BAContext.Provider value={{
            toggleSidebar, isShowing, setIsShowing
        }}>
            {props.children}
        </BAContext.Provider>
    )
}

export {BAContext, BrandonAuthorContextProvider}