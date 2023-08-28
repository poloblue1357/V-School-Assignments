

function Body() {
    return(
        <div className="pb-6">
            <div>Header</div>
            <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-2 pb-4">
                <div className="bg-sky-500 p-6 rounded-lg">1</div>
                <div className=" bg-red-500 p-6 rounded-lg">2</div>
                <div className=" bg-red-500 p-6 rounded-lg">3</div>
                <div className=" bg-red-500 p-6 rounded-lg">4</div>              
            </div>
            <div className="inline-block p-4 text-black bg-white border rounded-lg
             shadow-xl hover:shadow-tBlue">
                <h1 className="text-2xl">Hello</h1>
                <p className="mb-4">This is my div</p>
                <button className="px-3 py-2 rounded-lg cursor-pointer bg-cyan-500 opacity-50">Say Hello</button>
            </div>
        </div>
    )
}

export default Body