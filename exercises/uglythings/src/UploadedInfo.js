import React from "react"
import { ThemeContextConsumer } from "./ThemeContext"

class UploadedInfo extends React.Component {
    render() {
        return (
            <div>
                <h1>Uploaded Information:</h1>
                <ThemeContextConsumer>
                    {({handleChange, updateInfo}) => {
                        <button onClick={event => {
                            handleChange(event)
                            updateInfo()
                        }}>Delete</button>
                    }}
                </ThemeContextConsumer>
            </div>
        )
    }
}

export default UploadedInfo