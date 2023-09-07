import lastDesi from "./lastDesi.png"
import {useState} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import {library} from "@fortawesome/fontawesome-svg-core"

function Header() {

    // return (
    //     <div className="">
    //         <h1 className="hover:font-sans ml-2 text-tDark">Brandon Patterson - Author / Husband / Father</h1>
    //         <h1 className="hover:font-sans ml-2 text-tYellow">Brandon Patterson - Author / Husband / Father</h1>
    //         <h1 className="hover:font-sans ml-2 text-tBlue">Brandon Patterson - Author / Husband / Father</h1>
    //         <h1 className="hover:font-sans ml-2 text-tOlive">Brandon Patterson - Author / Husband / Father</h1>
    //         {/* <div className="flex"> */}
    //             <img src={lastDesi} length="400" width="200" className="
    //             grayscale 
    //             hover:grayscale-0 
    //             hue-rotate-60
    //             saturate-200 pb-6" />
    //             <a target="_blank" href="https://www.amazon.com/Client-Brett-Simons-Novel/dp/B0BJY9NLTC">
    //                 <button className="pl-4 transition ease-in-out duration:700 delay-150 bg-tBlue hover:-translate-y-1 hover:scale-110 hover:bg-tDark">
    //                     Buy Now
    //                 </button>
    //             </a>
    //         {/* </div> */}
    //     </div>
        
    // )

    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        isOpen === true ? setIsOpen(false) : setIsOpen(true)
    }
    return (
        <div>
            <nav className="block font-bold h-40 leading-[40px] w-screen">
                <div className="bg-[#222] pl-[1em]">Brandon Patterson - Author</div>
                <div>
                    <div onClick={toggleSidebar} className="text-white h-[50px]">
                        <i class="faBars" aria-hidden="true"></i>
                        <FontAwesomeIcon icon="faBars"/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header