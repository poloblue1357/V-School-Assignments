import mountains3 from "./mountains3.jpeg"
import {useContext} from "react"
import { BrandonAuthorContext } from "../ContextProvider"

function Photo() {

    const context = useContext(BrandonAuthorContext)

    return (
        <div className="col-start-1 col-end-5 row-start-2 row-end-3">
            <div className="h-[192px] md:h-[320px] lg:h-[293px] xl:h-[347px] transition w-full">
                <img src={mountains3} className="w-full h-full object-cover"/>
            </div>
        </div>
    )
}
// h-[192px] w-full

export default Photo