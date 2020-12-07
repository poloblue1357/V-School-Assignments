import React from "react"
import { ThemeContextConsumer } from "./ThemeContext"

function Description() {
    return (
        <ThemeContextConsumer>
            {({description, handleChange}) => (
                <input
                    name="description"
                    placeholder="Description"
                    type="text"
                    value={description}
                    onChange={handleChange}
                />
            )}
        </ThemeContextConsumer>
    )
}

export default Description