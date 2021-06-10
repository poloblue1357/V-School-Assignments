import React from "react"

function OfficialBadge() {
    return (
        <div>
            <h3>{this.state.firstName} {this.state.lastName}</h3>
            <h3>{this.state.phone}</h3>
            <h3>{this.state.birthPlace}</h3>
            <h3>{this.state.favFood}</h3>
            <h3>{this.state.email}</h3>
            <p>{this.state.aboutSelf}</p>
        </div>
    )
}

export default OfficialBadge