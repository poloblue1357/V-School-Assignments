import React, {useContext} from 'react'
import { Context } from './UglyThingsContext'
import UglyThing from './UglyThing'


function UglyThingsList() {
    const context = useContext(Context)
    // const [ editUglyThingId, setEditUglyThingId ] = useState(null)

    // const handleEditClick = (event, UglyThing) => {
    //     event.preventDefault()
    //     setEditUglyThingId(UglyThing.id)
    // }

    const list = context.uglyThingsList.map((item) =>

            <UglyThing
                key={item.index}
                id={item._id}
                title={item.title}
                img={item.imgUrl}
                description={item.description}
            />




    )

    return (
        <div>
            {list}
        </div>
    )
}

export default UglyThingsList


