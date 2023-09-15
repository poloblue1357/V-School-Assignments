import bSmile from "./bSmile.jpeg"

function Sidebar() {

    return (
        <div className="col-span-4 col-start-9 ">
            <div className="bg-tBeige sticky top-1 h-screen overflow-y-auto">
                <div className="flex flex-col justify-center items-center space-y-5 h-full">
                    <img src={bSmile} className="rounded-full" height="100px" width="150px"/>
                    <div className="justify-center items-center flex flex-col space-y-2">
                        <h3 className="font-bold">Brandon Patterson</h3>
                        <h4 className="font-bold">Based in Utah, USA</h4>
                    </div>
                    <ul className="italic space-y-3">
                        <li><a>Book</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar