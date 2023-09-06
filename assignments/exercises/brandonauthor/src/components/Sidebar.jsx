import {useState} from "react"

function Sidebar() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        isOpen === true ? setIsOpen(false) : setIsOpen(true)
    }

    return (
        <div>
            <a className="w-[44px] text-sm"></a>
        </div>
    )
}

export default Sidebar