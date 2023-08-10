import { useState } from 'react'
import Header from "./components/Header"
import About from "./components/About"
import './App.css'

function App() {

  return (
    <div className="bg-tDark">
      <Header />
      {/* <About /> */}
      <h1 className="text-3xl font-bold underline text-tBlue mb-4">
        Hello world!
      </h1>
      <h1 className="text-tOlive border-8 border-blue-600 text-xs sm:text-base md:text-lg lg:text-3xl">
        Hello world!
      </h1>
    </div>
  )
}

export default App
