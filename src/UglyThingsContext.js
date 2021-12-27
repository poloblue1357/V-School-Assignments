import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Context = React.createContext()

 function ContextProvider(props) {
    const init = {
        isEditing: false,
        title: "",
        description: "",
        imgUrl: ""
    }

    const [ uglyThingsList, setUglyThingsList ] = useState([])
    const [ uglyThing, setUglyThing ] = useState(init)



    useEffect(() => {
        getData()
    },[])


    function getData(id)  {
        axios.get("https://api.vschool.io/victor-navarro/thing/")
        .then(res => {setUglyThingsList(res.data)})
        .catch(error => console.log(error) )
    }


    function handleChange(e)  {
        const {value, name} = e.target
        setUglyThing(prevUglyThing => ({
            ...prevUglyThing,[name]: value
        }
        ))
    }



    function addNewUglyThing(e) {
        e.preventDefault()

        axios.post("https://api.vschool.io/victor-navarro/thing/", uglyThing)
        .then(() => getData())
        .catch(error => console.log(error) )
        // setUglyThingsList(prevList => ([...prevList, uglyThing]))
        setUglyThing(init)

    }


    function editedThing(id, updatedThing) {
        axios.put(`https://api.vschool.io/victor-navarro/thing/${id}`, updatedThing)
        .then((res) => {
            setUglyThingsList(data => data.map(thing => thing._id === id ? res.data : thing))
        })
        uglyThing.isEditing(false)
        .catch(error => console.log(error))
    }




    function deleteUglyThing (id) {
        console.log(id)
        axios.delete(`https://api.vschool.io/victor-navarro/thing/${id}`)
        .then(() => setUglyThingsList(prevThing => {
            return prevThing.filter(thing => thing._id !== id)
        }))
        .catch(error => console.log(error))
    }

    function toggleEdit() {
        setUglyThing(prevState => ({isEditing: !prevState.isEditing}))
        console.log(uglyThing.isEditing)
    }


    const [ updatedThing, setUpdatedthing ] = useState({
        title: props.title,
        imgUrl: props.imgUrl,
        description: props.description
    })

    function handleChangeEdit(e) {
        e.preventDefault()
        const {name, value} = e.target
        setUpdatedthing(input => ({...input, [name]: value}))
    }










    return (
        <Context.Provider value={{
            uglyThing,
            uglyThingsList,
            setUglyThingsList,
            handleChange,
            addNewUglyThing,
            editedThing,
            toggleEdit,
            handleChangeEdit,
            updatedThing,
            deleteUglyThing
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
