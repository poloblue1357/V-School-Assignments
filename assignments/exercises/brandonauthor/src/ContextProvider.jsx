import React, {useEffect, useState} from "react"

const BrandonAuthorContext = React.createContext()

function BrandonAuthorContextProvider(props) {

    const [isShowing, setIsShowing] = useState(false)


    const toggleSidebar = () => {
        console.log("toggle working!", isShowing)
        isShowing === true ? setIsShowing(false) : setIsShowing(true)
        console.log(isShowing)
    }



    return (
        <BrandonAuthorContext.Provider value={{
            toggleSidebar, isShowing, setIsShowing
        }}>
            {props.children}
        </BrandonAuthorContext.Provider>
    )
}

export {BrandonAuthorContext, BrandonAuthorContextProvider}