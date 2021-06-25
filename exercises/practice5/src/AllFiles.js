// index.js
import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))

// app.js
import React from "react"
import Form from "./Form"

class App extends React.Component {

    state = {
        memeList: [],
        rNumber: Math.floor(Math.random() * 99),
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => response.data.memes) 
        .then(data => {
            this.setState({
                memeList: data
            })
        })
    }
    handleClick = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            const test1 = Math.floor(Math.random() *99)
            return {
                rNumber: test1 
            }
        })
    }
    render() {
        return (
            <div>
                
                <br />
                <button onClick={this.handleClick}>Next Meme!</button>
                <Form meme={this.state.memeList[this.state.rNumber]} />
                
            </div>
        )
    }
}

export default App

// form.js
import React from "react"
import Meme from "./Meme"

class Form extends React.Component {
    
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
                <Meme meme={meme} key={index} topText={meme.topText} bottomText={meme.bottomText} url={meme.url}/>
            )
        })
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>{this.props.meme?.name}</h1>
                    <input type="text" placeholder="Top Text" name="topText" value={this.state.topText} onChange={this.handleChange}/>
                    <input type="text" placeholder="Bottom Text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                    <br />
                    <br />
                    <h1>{this.state.topText}</h1>
                    <img src={this.props.meme?.url} name="url" value={this.state.url} onChange={this.handleChange} alt=''></img>
                    <h1>{this.state.bottomText}</h1>
                     
                </form>
                
                {mapCreatedMemes}
            </div>
        )
    }
}

export default Form

// meme.js

import React from "react"

import Form from "./Form"

 class Meme extends React.Component {

    state = {
        isEdit: false
    }
    toggleEdit = () => {
        this.setState(prevState => {
            return {
                isEdit: !prevState.isEdit
            }
        })
    }
    deleteMeme = () => {
        this.setState(prevState => {
            return (
                <div></div>
            )
        })
    }
    render() {
        return (
            <div>
            <h1>Previous Meme: </h1> 
                {this.state.isEdit ?
                    <div> 
                        <Form topText={this.props.topText} bottomText={this.props.bottomText}/>
                        <button  onClick={this.toggleEdit}>Cancel Edit</button>
                    </div>
                    :
                    <div>
                        <h1>{this.props.topText}</h1>
                        <img src={this.props.url} alt=''></img>
                        <h1>{this.props.bottomText}</h1>
                        <button onClick={this.toggleEdit}>Edit Meme!</button>
                        <button onClick={this.deleteMeme}>Delete</button> 
                    </div> 
                }
            </div>
        )
    }  
}

export default Meme



import React from "react"

class RenderMeme extends React.Component {

    state = {

    }
    deleteMeme = () => {

    }
    editMeme = () => {
        
    }
    render() {
        return (
            <div>
                <h1>Created Meme: </h1>
                <h3>{this.props.topText}</h3>
                <img src={this.props.url} name="url" value={this.props.url} onChange={this.props.handleChange} alt=''></img>
                <h3>{this.props.bottomText}</h3>
                <button onclick={()=> this.props.deleteMeme(this.props.id)}>Delete</button>
                <button onClick={() => this.props.editMeme(this.props.id)}>Edit</button>
            </div>
        )
    } 
}

export default RenderMeme