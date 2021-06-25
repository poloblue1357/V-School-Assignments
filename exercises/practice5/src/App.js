// where every component comes to render
import React from "react"
import InitialMeme from "./InitialMeme"
import MemeForm from "./MemeForm"
import FormInput from "./FormInput"
import RenderMeme from "./RenderMeme"

class App extends React.Component {

    
    render() {
        return (
            <div>
                <InitialMeme /> 
                <MemeForm />
                <RenderMeme /> 
                <FormInput />       
            </div>
        )
    }
}

export default App
