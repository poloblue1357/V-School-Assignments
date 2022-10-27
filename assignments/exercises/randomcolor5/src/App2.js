import React, {useState, useEffect} from "react"
import axios from "axios"

function App2() {

    const [color, setColor] = useState({hex: ''})

    useEffect(() => {
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(response => response.data)
            .then(data => setColor(data.colors))
        console.log('useEffect running')
    }, []) 

    const changeColor = () => {
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(response => response.data)
        .then(data => setColor(data.colors))
        console.log("function running",color)
    }

    return (
        <div style={{backgroundColor: `#${color[0]?.hex}`, height: "100px", width: "100px", display: "block"}}>
            <button onClick={changeColor}>change color</button>
        </div>
    )
}

export default App2

