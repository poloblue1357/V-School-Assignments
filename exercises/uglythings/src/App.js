import React from "react"
import Description from "./Description"
import { ThemeContextConsumer } from "./ThemeContext"
import Title from "./Title"
import Img from "./Img"
import UploadedInfo from "./UploadedInfo"

function App() {
    return (
        <div>
            <Title />
            <Description />
            <Img />
            <ThemeContextConsumer>
                {({handleChange, updateInfo}) => (
                    <button onClick={event => {
                        handleChange(event) 
                        updateInfo()
                    }}>Submit</button>
                )}
            </ThemeContextConsumer>
            <UploadedInfo />
        </div>
    )
}

export default App