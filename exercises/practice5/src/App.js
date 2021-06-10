import React from "react"
import BadgeOfficial from "./BadgeOfficial"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            birthPlace: '',
            phone: '',
            favFood: '',
            aboutSelf: '',
            badges: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (event) => {
        event.preventDefault()
            const {name, value} = event.target
            this.setState({ [name]: value})      
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
            badges: [this.state.firstName, this.state.lastName, this.state.email, this.state.birthPlace, this.state.phone, this.state.favFood, this.state.aboutSelf, ...prevState.badges]

            }
        })
    }
    render() {
        const listOfBadges = this.state.badges.map(badge => {
            return <BadgeOfficial badge={badge} />
        })
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="firstName" onChange={this.handleChange} value={this.state.firstName} placeholder="First Name" type="text" required minLength={3} />
                    <input name="lastName" onChange={this.handleChange} value={this.state.lastName} placeholder="Last Name" type="text" required minLength={3} />
                    <input name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" type="email" required minLength={3} />
                    <input name="birthPlace" onChange={this.handleChange} value={this.state.birthPlace} placeholder="Place of Birth" type="text" required minLength={3} />
                    <input name="phone" onChange={this.handleChange} value={this.state.phone} placeholder="Phone Number" type="tel"required minLength={3} />
                    <input name="favFood" onChange={this.handleChange} value={this.state.favFood} placeholder="Favorite Food" type="text" required minLength={3} />
                    <textarea name="aboutSelf" onChange={this.handleChange} value={this.state.aboutSelf} placeholder="Tell us about yourself" type="text" required minLength={3} />
                    <button>Submit</button>
                </form>
                <br />
                <br />
                {listOfBadges}
                {this.state.firstName}
            </div>
        )
    }
}

export default App