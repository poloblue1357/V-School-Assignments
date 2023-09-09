import bSmile from "./bSmile.jpeg"

function Sidebar() {

    return (
        <div className="bg-tBlue grid grid-cols-3">
            <div className="col-start-1 col-end-3 bg-tDark"></div>
            <div className="col-start-3 col-end-4 flex flex-col justify-center items-center">
                <img src={bSmile} className="" height="200px" width="100px"/>
                <h3 className="font-bold">Brandon Patterson</h3>
                <h4 className="font-bold">Based in Utah</h4>
                <ul className="italic">
                    <li><a>Book</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar