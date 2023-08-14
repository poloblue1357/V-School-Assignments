import { useState } from 'react'
import Header from "./components/Header"
import About from "./components/About"
import './App.css'

function App() {

  return (
    <div className="bg-tBeige">
      <Header />
      {/* <About /> */}
      <h1 className="text-5xl font-bold underline text-tDark mb-4 mt-5">
        Hello world!
      </h1>
      <h1 className="text-tBlue bg-tDark p-4 border-8 border-tYellow text-xs sm:text-base md:text-lg lg:text-3xl hover:underline">
        Hello world!
      </h1>
    </div>
  )
}

export default App
