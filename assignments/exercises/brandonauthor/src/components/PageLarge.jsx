import Header from "./Header1"
import About from "./About"
import Body from "./Body"
import Design from "./Design"
import Sidebar from "./Sidebar"
import Photo from "./Photo"

function PageLarge() {

    return (
        <div className="grid grid-cols-6 transition duration-500 ease-in-out">
            <div className='col-start-1 col-end-7 row-start-1 row-end-2'>
                <Header />
            </div>
            <div className='col-start-1 col-end-7 row-start-2 row-end-3'>
                <Photo />
            </div>
            <div className='col-start-1 col-end-7 row-start-3 row-end-4'>
                <About /> 
            </div>
            <div className='col-start-1 col-end-7 row-start-4 row-end-5'>
                <About /> 
            </div>
            <div className='col-start-1 col-end-7 row-start-5 row-end-6'>
                <About /> 
            </div>
            <div className='row-start-1 row-end-6 h-full w-[293px]'>
                <Sidebar />
            </div>
        </div>
    )
}

export default PageLarge