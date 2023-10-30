import { useState, useContext } from 'react'
import Header from "./components/Header"
import About from "./components/About"
import Body from "./components/Body"
import Design from "./components/Design"
import Sidebar from "./components/Sidebar"
import Photo from "./components/Photo"
import { BrandonAuthorContext } from './ContextProvider'
import './App.css'

function App() {
  // h-[174px] 

  const context = useContext(BrandonAuthorContext)
 
  return (
    <div>
      {context.isOpen ?
        <div className="grid grid-cols-7 transition duration-500 ease-in-out">
          <div className='col-start-1 col-end-6 row-start-1 row-end-2'>
            <Header />
          </div>
          <div className='col-start-1 col-end-6 row-start-2 row-end-3'>
            <Photo />
          </div>
          <div className='col-start-1 col-end-6 row-start-3 row-end-4'>
            <About /> 
          </div>
          {/* <div>col-start-4 col-end-5 w-full row-start-1 row-end-5 h-screen sticky top-0</div> */}
          <div className='col-start-6 col-end-8 row-start-1 row-end-4'>
            <Sidebar />
          </div>
        </div>
      
      :
  
        <div className="grid grid-cols-7 transition -translate-x-1/4 duration-500 ease-in-out">
          <div className='col-start-1 col-end-6 row-start-1 row-end-2'>
            <Header />
          </div>
          <div className='col-start-1 col-end-6 row-start-2 row-end-3'>
            <Photo />
          </div>
          <div className='col-start-1 col-end-6 row-start-3 row-end-4'>
            <About /> 
          </div>
          {/* <div>col-start-4 col-end-5 w-full row-start-1 row-end-5 h-screen sticky top-0</div> */}
          <div className='col-start-6 col-end-8 row-start-1 row-end-4'>
            <Sidebar />
          </div>
        </div>
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