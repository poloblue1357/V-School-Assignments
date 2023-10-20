import mountains3 from "./mountains3.jpeg"

function Photo() {
    return (
        <div className="">
            <img src={mountains3} className="h-[192px] bg-auto sm:bg-cover md:bg-contain lg:bg-auto xl:bg-cover"/>
        </div>
    )
}

export default Photo