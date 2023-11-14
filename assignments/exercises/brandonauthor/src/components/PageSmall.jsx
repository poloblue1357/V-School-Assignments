import { useContext } from 'react'
import Header from "./Header1"
import About from "./About"
import Body from "./Body"
import Design from "./Design"
import Sidebar from "./Sidebar"
import Photo from "./Photo"
import { BrandonAuthorContext } from '../ContextProvider'

function PageSmall() {

    const context = useContext(BrandonAuthorContext)

    return (
        <div>
            {context.isShowing ?
                <div className="grid grid-cols-7 transition duration-500 ease-in-out -translate-x-1/4">
                    <div className='col-start-1 col-end-8 row-start-1 row-end-2 fixed top-0 w-full'>
                        <Header />
                    </div>
                    <div style={{height: "40px"}}></div>
                    <div className='col-start-1 col-end-8 row-start-2 row-end-3'>
                        <Photo />
                    </div>
                    <div className='col-start-1 col-end-8 row-start-3 row-end-4'>
                        <About /> 
                    </div>
                    <div className='col-start-1 col-end-8 row-start-4 row-end-5'>
                        <About /> 
                    </div>
                    <div className='col-start-1 col-end-8 row-start-5 row-end-6'>
                        <About /> 
                    </div>
                    <div className='col-start-8 w-[272px] md:w-[368px] row-start-1 row-end-4 sticky'>
                        <Sidebar />
                    </div>
                </div>
        
            :
    
                <div className="grid grid-cols-7 transition duration-500 ease-in-out w-full">
                    <div className='col-start-1 col-end-8 row-start-1 row-end-2 fixed top-0 w-full'>
                        <Header />
                    </div>
                    <div style={{height: "40px"}}></div>
                    <div className='col-start-1 col-end-8 row-start-2 row-end-3'>
                        <Photo />
                    </div>
                    <div className='col-start-1 col-end-8 row-start-3 row-end-4'>
                        <About /> 
                    </div>
                    <div className='col-start-1 col-end-8 row-start-4 row-end-5'>
                        <About /> 
                    </div>
                    <div className='col-start-1 col-end-8 row-start-5 row-end-6'>
                        <About /> 
                    </div>
                    {/* <div className='w-[23em] row-start-1 row-end-6 col-start-6 col-end-8'>
                        <Sidebar />
                    </div> */}
                </div>
            }
        </div>
    )
}

export default PageSmall