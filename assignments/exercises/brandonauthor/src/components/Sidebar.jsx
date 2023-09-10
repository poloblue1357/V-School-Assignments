import bSmile from "./bSmile.jpeg"

function Sidebar() {

    return (
        <div className="bg-tBeige w-1/3 sticky top-0 right-0 h-screen ">
            <div className="flex flex-col justify-center items-center space-y-6">
                <img src={bSmile} className="rounded-full" height="100px" width="150px"/>
                <div className="justify-center items-center flex flex-col space-y-3">
                    <h3 className="font-bold">Brandon Patterson</h3>
                    <h4 className="font-bold">Based in Utah</h4>
                </div>
                <ul className="italic space-y-3">
                    <li><a>Book</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar