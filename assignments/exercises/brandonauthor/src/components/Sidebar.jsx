import bSmile from "./bSmile.jpeg"
import {FaLinkedin} from "react-icons/fa"
import { BAContext } from "../ContextProvider"
import {useContext, useState} from "react"
import "./sidebar.css"


function Sidebar() {

    const context = useContext(BAContext)

    return (
        <div id="test1" className=" bg-tBeige flex flex-col justify-center items-center space-y-6 w-full h-screen">
            <div className="h-[40px] bg-tBeige"></div>
            <img src={bSmile} className="rounded-full h-[100px] w-[150px] overflow-auto"/>
            <div className="justify-center items-center flex flex-col space-y-2">
                <h3 className="font-bold">BP</h3>
                <h4 className="font-bold">Based in , USA</h4>
            </div>
            <ul className=" italic space-y-2 w-full space-evenly items-center flex flex-col">
                <li className=""><a className="decoration-3 hover:text-bold no-underline">Home</a></li>
                <li className=""><a className="no-underline" target="_blank" href="">Book</a></li>
                <li className=""><a className="no-underline">About</a></li>
                <li className=""><a className="no-underline">Contact</a></li>
            </ul>
            <div className="text-2xl w-full bg-tBeige justify-center flex items-center">
                <a target="_blank" href="" >
                    <FaLinkedin  className="text-tOlive bg-tDark"/>
                </a>
            </div>
        </div>
    )
}

export default Sidebar
       