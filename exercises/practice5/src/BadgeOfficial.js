import React from "react"

function BadgeOfficial(props) {
    return (
        <div>
            <h2> {props.firstName} {props.lastName}</h2>
            <h3> {props.email}</h3>
            <h3> {props.birthPlace}</h3>
            <h3> {props.phone}</h3>
            <h3> {props.favFood}</h3>
            <p> {props.aboutSelf}</p>
            <hr />
        </div>
    )
}

export default BadgeOfficial