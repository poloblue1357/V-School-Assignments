import { useContext } from 'react'
import Header from "./Header"
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
            {context.isOpen ?
                <div className="grid grid-cols-7 transition duration-500 ease-in-out">
                    <div className='col-start-1 col-end-8 row-start-1 row-end-2'>
                        <Header />
                    </div>
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
                    {/* <div>col-start-4 col-end-5 w-full row-start-1 row-end-5 h-screen sticky top-0</div> */}
                    {/* <div className='col-start-6 col-end-8 row-start-1 row-end-4'>
                        <Sidebar />
                    </div> */}
                </div>
        
            :
    
                <div className="grid grid-cols-8 transition -translate-x-1/4  duration-500 ease-in-out">
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
                    <div className='w-[23em] row-start-1 row-end-6 col-start-7 col-end-9'>
                        <Sidebar />
                    </div>
                </div>
            }
        </div>
    )
}

export default PageSmall