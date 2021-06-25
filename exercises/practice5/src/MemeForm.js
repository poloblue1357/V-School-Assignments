// where the two inputs and submit button are, where state is managed,
// where the edit button is managed
// where the delete button is managed
// where the created memes are sent to a createdMemes array
import React from "react"
import RenderMeme from "./RenderMeme"
import FormInput from "./FormInput"
import InitialMeme from "./InitialMeme"

class MemeForm extends React.Component {
    
    state = {
        topText:  '',
        bottomText: '',
        createdMemes: [],
    }
    handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        this.setState({ 
            [ name ]: value, 
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            const newMeme = {
                topText: this.state.topText,
                bottomText: this.state.bottomText,
                url: this.props.meme.url
            }
            return {
                topText: '',
                bottomText: '',
                createdMemes: [...prevState.createdMemes, newMeme]
            }
        })
    }
    render() {
        const mapCreatedMemes = this.state.createdMemes.map((meme, index) => {
            return (
                <RenderMeme meme={meme} key={index} topText={meme.topText} bottomText={meme.bottomText} url={meme.url}/>
            )
        })
        return (
            <div>
                {/* <h1>{this.props.meme.name}</h1> */}
                <InitialMeme />
                <FormInput /> 
                <br />
                <br /> 
                <RenderMeme />
                {mapCreatedMemes}
            </div>
        )
    }
}

export default MemeForm