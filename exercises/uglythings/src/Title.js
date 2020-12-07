import React from "react"
import { ThemeContextConsumer } from "./ThemeContext"

function Title() {
    return (
        <ThemeContextConsumer>
            {({title, handleChange}) => (
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={handleChange} 
                />
            )}
        </ThemeContextConsumer>
    )
}

export default Title