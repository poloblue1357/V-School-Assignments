"use client";

import {useState} from "react"
import { DownArrow } from "./DownArrow";

function Design() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectValue, setSelectValue] = useState("Choose Option")

    const updateValue = (value, string) => {
        setSelectValue(value)
        setIsOpen(false)
    }
    return (
        <div className="pt-6">
            <h1>This is a title</h1>
            <h2>This is a subtitle</h2>
            <p>This is a paragraph</p>
            <a target="_blank" href="https://www.danpattersonportfolio.com">This is an anchor</a>
            <div className="my-4">
                <button className="btn btn-primary">This is a primary button</button>
            </div>
            <div className="my-4">
                <button className="btn btn-secondary">This is a secondary button</button>
            </div>
            <div className="my-4">
                <button disabled className="btn btn-primary">This is a disabled button</button>
            </div>
            <div>
                <input className="outline-none" type="text" placeholder="E-mail"/>
            </div>
            <div>
                <input disabled className="outline-none" type="text" placeholder="E-mail"/>
            </div>
            <div>
                <input type="date" />
            </div>
            <div className="flex items-start my-4">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit totam illo tempora magnam, pariatur fuga voluptate accusamus harum sapiente sequi exercitationem suscipit velit eius odit fugiat deleniti praesentium repellat ab!</label>
            </div>
            <div>
                <select>
                    <option>Option 1</option>
                    <option>Option 2</option>
                </select>
            </div>
            <div className="Select">
                <div className="child flex items-center justify-between" onClick={() => setIsOpen(!isOpen)}>
                    <span>{selectValue}</span>
                    <div className={isOpen ? "rotate-180 transition" : "rotate-0 transition"}>
                        <DownArrow />
                    </div>
                </div>
                {isOpen && (                
                <div>
                    <ul className="flex flex-col divide-y border-t">
                        <li className="child" onClick={() => updateValue("Option 1")}>Option 1</li>
                        <li className="child" onClick={() => updateValue("Option 2")}>Option 2</li>
                        <li className="child" onClick={() => updateValue("Option 3")}>Option 3</li>
                    </ul>
                </div>
                )}
            </div>
            {/* <h1>This is a another title</h1>
            <h2>This is a another subtitle</h2>
            <h1>THIRD SUBTITLE yep testing</h1> */}
        </div>
    )
}

export default Design