import React, {useContext} from "react"
import {StockContext} from "./contexts/ContextProvider"
import CPI from "./CPI"

function CPImap() {
    const context = useContext(StockContext)
    const mapCPI = context.CPIarray.map(item => <CPI item={item} key={item.date+item.value}/>)
    return (
        <div>
            {mapCPI}
        </div>
    )
}

export default CPImap