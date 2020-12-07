import React from "react"
import { ThemeContextConsumer } from "./ThemeContext"

function Img() {
    return (
        <ThemeContextConsumer>
            {({img, handleChange}) => (
                <input
                    type="text"
                    name="img"
                    placeholder="Image Url"
                    value={img}
                    onChange={handleChange} 
                />
            )}
        </ThemeContextConsumer>
    )
}

export default Img