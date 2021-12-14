import React, { useState } from 'react'
// import axios from 'axios'
const Context = React.createContext()

 function ContextProvider(props) {
    const init = {
        title: "",
        desc: "",
        imgURL: ""
    }

    const [ uglyThingsList, setUglyThingsList ] = useState([])
    const [ uglyThing, setUglyThing ] = useState(init)



    const handleChange = (e) => {
        const {value, name} = e.target
        setUglyThing(prevUglyThing => ({
            ...prevUglyThing,[name]: value
        }

        ))

    }


    const handleSubmit = (e) => {
        e.preventDefault()
        // axios.post("https://api.vschool.io/victor-navarro/thing", uglyThing)
        // .then(res => {
        //     console.log(res.data)
        //     setUglyThingsList(prevList => ([...prevList, res.data]))
        // })
        // .catch(error => console.log(error) )

        setUglyThingsList(prevList => ([...prevList, uglyThing]))
        setUglyThing(init)
    }

    return (
        <Context.Provider value={{
            title: uglyThing.title,
            desc: uglyThing.desc,
            imgURL: uglyThing.imgURL,
            uglyThingsList,
            handleChange,
            handleSubmit
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
