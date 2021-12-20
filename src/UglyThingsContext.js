import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Context = React.createContext()

 function ContextProvider(props) {
    const init = {
        id: "",
        title: "",
        description: "",
        imgUrl: ""
    }

    const [ uglyThingsList, setUglyThingsList ] = useState([])
    const [ uglyThing, setUglyThing ] = useState(init)



    useEffect(() => {
        getData()
    },[])



    const handleChange = (e) => {
        const {value, name} = e.target
        setUglyThing(prevUglyThing => ({
            ...prevUglyThing,[name]: value
        }
        ))
    }



    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("https://api.vschool.io/victor-navarro/thing/", uglyThing)
        .then(() => getData())
        .catch(error => console.log(error) )
        setUglyThingsList(prevList => ([...prevList, uglyThing]))
        setUglyThing(init)

    }



    const getData = () => {
        axios.get("https://api.vschool.io/victor-navarro/thing/")
        .then(res => {
        console.log(res.data)
        setUglyThingsList(res.data)
        })
        .catch(error => console.log(error) )
    }


    const deleteUglyThing = id => {
        console.log(id)
        axios.delete("https://api.vschool.io/victor-navarro/thing/" + id)
        .catch(error => console.log(error))
    }





    return (
        <Context.Provider value={{
            id: uglyThing.id,
            title: uglyThing.title,
            description: uglyThing.description,
            imgUrl: uglyThing.imgUrl,
            uglyThingsList,
            handleChange,
            handleSubmit,
            deleteUglyThing
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
