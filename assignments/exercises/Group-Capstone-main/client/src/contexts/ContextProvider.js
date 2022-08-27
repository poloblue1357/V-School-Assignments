import React, { useState, useEffect } from "react"
import axios from "axios"
const StockContext = React.createContext()

const StockContextProvider = props => {
    const [stockData, setStockData] = useState([])

    // const getData = () => {
    //     axios.get(`https:/`)
    // }

    const [CPIarray, setCPIArray] = useState({})
    useEffect(() => {
        axios.get("https://www.alphavantage.co/query?function=CPI&interval=monthly&apikey=HOEHM6SOJN8NYJWX" )
            .then(response => {
                console.log(response.data)
                setCPIArray(response.data.data)
            })
    }, [])
    return (
        <StockContext.Provider value={{
            stockData,
            CPIarray,

        }}>
            {props.children}
        </StockContext.Provider>
    )
}

export { StockContext, StockContextProvider }