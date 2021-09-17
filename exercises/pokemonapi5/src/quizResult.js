import React from "react"
import {useLocation, withRouter} from "react-router-dom"

function QuizResult() {

    let location = useLocation()

    return (
        <div className="quiz">
            <h2>Here is the best starting Pokemon for you! </h2>
            <img src={location.state.image.imageSrc} alt={location.state.image.imageAlt} style={{height: "400px", width: "350px"}}/>
        </div>
    )
}

export default withRouter(QuizResult)