import { useState, useContext, useEffect } from 'react'
import Header from "./components/Header1"
import About from "./components/About"
import Body from "./components/Body"
import Design from "./components/testDesign"
import Sidebar from "./components/Sidebar"
import Photo from "./components/Photo"
import { BAContext } from './ContextProvider'
import PageLarge from "./components/PageLarge"
import PageSmall from "./components/PageSmall"
import './App.css'

function App() {
  // h-[174px] 

  const context = useContext(BAContext)
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 1024

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  console.log(dimensions);
  const handleResize = () => {
      setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
      });
    }
  useEffect(() => {
    console.log(context.isShowing)
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <div className='w-fit'>
      {dimensions.width >= breakpoint ?
        <PageLarge />
        :
        <PageSmall />
      }
    </div>
  )
}

export default App
