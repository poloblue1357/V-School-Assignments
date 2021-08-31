import React, {useState} from "react"

const {Provider, Consumer} = React.createContext()
const axios = require("axios")

function MarioKartContextProvider(props) {
    const [drives, setDrivers] = useState([])

    function axiosGet(event) {
        event.preventDefault()
        axios.get("api/v1/drivers")
            .then(response => {
                console.log(response.data)
                setDrivers(response.data)
            })
    }

    return (
        <Provider value="YEP">
            {this.props.children}
        </Provider>
    )
}

export {MarioKartContextProvider, Consumer as maiorKartContextConsumer}