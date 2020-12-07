import React from "react"

const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends React.Component {
    state = {
        title: '',
        description: '',
        img: '',
        todos: []
    }
    handlechange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    updateInfo = () => {
        this.setState(prevState => {
            const newTodo = {
                img: prevState.img,
                description: prevState.description,
                title: prevState.title,
                _id: Math.floor(Math.random() * 1000)
            } 
            return {
                img: '',
                description: '',
                title: '',
                todos: [newTodo, ...prevState.todos]
            }
        })
    }
    deleteInfo = () => {
        
    }
    render() {
        return (
            <Provider value={{handlechange: this.handlechange, updateInfo: this.updateInfo, ...this.state}}>
                {this.props.children}
            </Provider>
        )
    }
}
export {ThemeContextProvider, Consumer as ThemeContextConsumer}