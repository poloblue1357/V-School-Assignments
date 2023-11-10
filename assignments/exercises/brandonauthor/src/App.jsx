import { useState, useContext, useEffect } from 'react'
import Header from "./components/Header1"
import About from "./components/About"
import Body from "./components/Body"
import Design from "./components/Design"
import Sidebar from "./components/Sidebar"
import Photo from "./components/Photo"
import { BrandonAuthorContext } from './ContextProvider'
import PageLarge from "./components/PageLarge"
import PageSmall from "./components/PageSmall"
import './App.css'

function App() {
  // h-[174px] 

  const context = useContext(BrandonAuthorContext)
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
    <div>
      {dimensions.width >= breakpoint ?
        <PageLarge />
        :
        <PageSmall />
      }
    </div>
  )
}

export default App

{/* <Body /> */}
{/* <div className="container px-2 columns-lg">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sequi dolor possimus vel illo voluptatibus earum at nemo dignissimos quos, sint et incidunt beatae. Blanditiis neque omnis id porro tenetur.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vel accusamus quaerat commodi id! Quod nihil eaque commodi. Porro facilis in beatae non ipsam ratione quo voluptatibus tempora iusto. Explicabo.</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ea corporis quam? Aliquam, eaque! Temporibus cupiditate molestiae cum beatae. Tenetur ea dolores doloribus impedit, perferendis asperiores illo maxime quaerat ipsam?</p>
</div> 
<h1 className="pt-6 text-5xl font-bold underline text-tDark mb-4 mt-5">
  Hello world!
</h1>
<h1 className="text-tBlue bg-tDark p-4 border-8 border-tYellow text-xs sm:text-base md:text-lg lg:text-3xl hover:underline">
  Hello world!
</h1> */}
{/* <Design /> */}