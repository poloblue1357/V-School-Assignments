import bSmile from "./bSmile.jpeg"
import {FaLinkedin} from "react-icons/fa"
import { BrandonAuthorContext } from "../ContextProvider"
import {useContext, useState} from "react"


        {/* <div className="col-span-4 col-start-9 transition">
            <div className="bg-tBeige sticky top-1 h-screen overflow-y-auto">
                <div className="flex flex-col justify-center items-center space-y-5 h-full">
                    <img src={bSmile} className="rounded-full" height="100px" width="150px"/>
                    <div className="justify-center items-center flex flex-col space-y-2">
                        <h3 className="font-bold">Brandon Patterson</h3>
                        <h4 className="font-bold">Based in Utah, USA</h4>
                    </div>
                    <ul className=" italic space-y-2 w-full space-evenly items-center flex flex-col">
                        <li className=""><a className=" hover:underline decoration-3 hover:text-bold">Home</a></li>
                        <li className=""><a className="">Book</a></li>
                        <li className=""><a className="">About</a></li>
                        <li className=""><a className="">Contact</a></li>
                    </ul>
                    <div className="text-2xl w-full bg-tBeige justify-center flex items-center bottom-0">
                        <a target="_blank" href="https://www.linkedin.com/in/brandon-patterson-author/">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div> */}
function Sidebar() {

    const context = useContext(BrandonAuthorContext)

    return (
        <div className="invisible lg:visible bg-tBeige flex flex-col justify-center items-center space-y-5 h-full">
            <img src={bSmile} className="rounded-full h-[100px] w-[150px]"/>
            <div className="justify-center items-center flex flex-col space-y-2">
                <h3 className="font-bold">Brandon Patterson</h3>
                <h4 className="font-bold">Based in Utah, USA</h4>
            </div>
            <ul className=" italic space-y-2 w-full space-evenly items-center flex flex-col">
                <li className=""><a className=" hover:underline decoration-3 hover:text-bold">Home</a></li>
                <li className=""><a className="">Book</a></li>
                <li className=""><a className="">About</a></li>
                <li className=""><a className="">Contact</a></li>
            </ul>
            <div className="text-2xl w-full bg-tBeige justify-center flex items-center bottom-0">
                <a target="_blank" href="https://www.linkedin.com/in/brandon-patterson-author/">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    )
}

export default Sidebar