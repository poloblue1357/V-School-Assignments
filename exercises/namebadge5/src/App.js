import React from "react"
import OfficialBadge from "./OfficialBadge"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: '',
            email: '',
            birthPlace: '',
            phone: '',
            favFood: '',
            aboutSelf: '',
            badges: [],   
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange =  (event) => {
        event.preventDefault()
        const {name, value} = event.target
        this.setState({ [name]: value })


    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState(prevState => {
            return {
                firstName: '',
                lastName: '',
                email: '',
                birthPlace: '',
                phone: '',
                favFood: '',
                aboutSelf: '',
                badges: [ this.state.firstName, this.state.lastName, this.state.email, this.state.birthPlace, this.state.phone, this.state.favFood, this.state.aboutSelf, ...prevState.badges]
            }
        })
    }
    render() {
        const mapArray = this.state.badges.map(badge => {
            return <OfficialBadge badge={badge} />
        })
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="First Name" minLength={3} required name="firstName" type="text" onChange={this.handleChange} value={this.state.firstName} />
                    <br />
                    <br />
                    <input placeholder="Last Name" minLength={3} required name="lastName" type="text" onChange={this.handleChange} value={this.state.lastName} />
                    <br />
                    <br />
                    <input placeholder="Email" minLength={3} required name="email" type="email" onChange={this.handleChange} value={this.state.email} />
                    <br />
                    <br />
                    <input placeholder="Place of Birth" minLength={3} required name="birthPlace" type="text" onChange={this.handleChange} value={this.state.birthPlace} />
                    <br />
                    <br />
                    <input placeholder="Phone Number" minLength={3} required name="phone" type="number" onChange={this.handleChange} value={this.state.phone} />
                    <br />
                    <br />
                    <input placeholder="Favorite Food" minLength={3} required name="favFood" type="text" onChange={this.handleChange} value={this.state.favFood} />
                    <br />
                    <br />
                    <textarea placeholder="Tell us about yourself" minLength={3} required name="aboutSelf" type="text" onChange={this.handleChange} value={this.state.aboutSelf} />
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
                <br />
                <br />
                {mapArray}
                <br />
                <br />
            </div>
        )
    }
}

export default App