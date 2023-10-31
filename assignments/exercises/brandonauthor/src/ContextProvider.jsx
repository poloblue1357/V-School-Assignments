import React, {useState} from "react"

const BrandonAuthorContext = React.createContext()

function BrandonAuthorContextProvider(props) {

    const [isOpen, setIsOpen] = useState(true)
    const [width, setWidth] = useState(window.innerWidth)

    const toggleSidebar = () => {
        console.log("toggle working!", isOpen)
        isOpen === true ? setIsOpen(false) : setIsOpen(true)
    }

    return (
        <BrandonAuthorContext.Provider value={{
            toggleSidebar, isOpen, setIsOpen
        }}>
            {props.children}
        </BrandonAuthorContext.Provider>
    )
}

export {BrandonAuthorContext, BrandonAuthorContextProvider}