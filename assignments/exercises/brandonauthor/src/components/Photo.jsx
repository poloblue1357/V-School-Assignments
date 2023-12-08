import mountains3 from "./mountains3.jpeg"
import {useContext} from "react"
import { BAContext } from "../ContextProvider"

function Photo() {

    const context = useContext(BAContext)

    return (
        <div className="h-[232px] md:h-[320px] lg:h-[293px] xl:h-[347px] transition w-full">
            <img src={mountains3} className="w-full h-full object-cover"/>
        </div>
    )
}
// h-[192px] w-full

export default Photo