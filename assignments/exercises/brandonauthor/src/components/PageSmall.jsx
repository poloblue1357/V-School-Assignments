import { useContext } from 'react'
import Header from "./Header1"
import About from "./About"
import Body from "./Body"
import Design from "./Design"
import Sidebar from "./Sidebar"
import Photo from "./Photo"
import { BAContext } from '../ContextProvider'

function PageSmall() {

    const context = useContext(BAContext)
//     const [className, setClassName] = useState('initialClass');

    // const handleChangeClass = () => {
    //     setClassName('newClass'); 
    // };
    // look at clsx to help with conditional rendering

    return (
        <nav id="nav" className="grid grid-cols-7 transition duration-500 ease-in-out translate-x-full">
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
            <div className='col-start-8 w-[272px] md:w-[368px] sticky top-0 '>
                <Sidebar />
            </div>
        </nav>
    )
}

        {/* <div>
            {context.isShowing ?
                <div className="flex" style={{width: `${window.innerWidth + 368}px`}}>
                    <div className="grid grid-cols-7">
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
                        <nav className='w-[272px] md:w-[368px] fixed right-0 top-0 transition duration-500 ease-in-out translate-x-full h-screen'>
                            <Sidebar />
                        </nav>
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
                </div>
            }
        </div> */}
export default PageSmall
