import { useState } from 'react'
import Header from "./components/Header"
import About from "./components/About"
import Body from "./components/Body"
import './App.css'

function App() {

  return (
    <div className="bg-tBeige">
      <Header />
      {/* <About /> */}
      <Body />
      <div className="container px-2 columns-lg">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sequi dolor possimus vel illo voluptatibus earum at nemo dignissimos quos, sint et incidunt beatae. Blanditiis neque omnis id porro tenetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vel accusamus quaerat commodi id! Quod nihil eaque commodi. Porro facilis in beatae non ipsam ratione quo voluptatibus tempora iusto. Explicabo.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ea corporis quam? Aliquam, eaque! Temporibus cupiditate molestiae cum beatae. Tenetur ea dolores doloribus impedit, perferendis asperiores illo maxime quaerat ipsam?</p>
      </div> 
      <h1 className="pt-6 text-5xl font-bold underline text-tDark mb-4 mt-5">
        Hello world!
      </h1>
      <h1 className="text-tBlue bg-tDark p-4 border-8 border-tYellow text-xs sm:text-base md:text-lg lg:text-3xl hover:underline">
        Hello world!
      </h1>
    </div>
  )
}

export default App
