

// const todoForm = document.todoForm
// todoForm.addEventListener("submit", function(event) {
//     event.preventDefault()


//     const newTodo = {
//         title: todoForm.title.value,
//         description: todoForm.description.value,
//         price: todoForm.price.value,
//         imgUrl: todoForm.imgUrl.value
//     }
//     axios.post("https://api.vschool.io/dan/todo/", newTodo)
//         .then(response => console.log(response.data))
//         .catch(error => console.log(error))
// })

// axios.get("https://api.vschool.io/dan/todo/")
//     .then(response => {
//         for(let i = 0; i < response.data.length; i++) {

//             const h3 = document.createElement("h1")
//             h3.textContent = response.data[i].title 
//             document.body.appendChild(h3)

//             const p = document.createElement("p")
//             p.textContent = response.data[i].description 
//             document.body.appendChild(p)

//             const h5 = document.createElement("h3")
//             h5.textContent = "$" + response.data[i].price 
//             document.body.appendChild(h5)

//             const checkbox = document.createElement("input")
//             checkbox.type = "checkbox"
//             checkbox.name = "checkbox"
//             document.body.appendChild(checkbox)

//             const img = document.createElement("img")
//             img.width = "400"
//             img.height = "300"
//             img.src = response.data[i].imgUrl 
//             document.body.appendChild(img)

//             const deleteB = document.createElement("button")
//             deleteB.textContent = "Delete"
//             document.body.appendChild(deleteB)
//             deleteB.addEventListener("click", function(event) {
//                 event.preventDefault()

//                 axios.delete("https://api.vschool.io/dan/todo/")
//                     .then(response => console.log(response))
//                     .catch(error => console.log(error))

            
//             })
//         }   
//     })
//     .catch(error => console.log(error))

// axios.get("https://api.vschool.io/dan/todo/")
//     .then(response => {

//         for(let i = 0; i < response.data.length; i++) {
//             if(response.data.completed == true) {
//                 response[i].data.title.style.textDecoration = "line-through"
//             }
//         }
//     })
//     .catch(error => console.log(error))

// // const checkbox = {
// //     completed: true
// // }

// // axios.put("https://api.vschool.io/dan/todo/", checkbox)
// //     .then(response => console.log(response.data))
// //     .catch(error => console.log(error))

const todoForm = document.todoForm 
const div = document.getElementById("div")

axios.get("https://api.vschool.io/dan/todo/")
    .then(response => {
        let todoItem = response.data
        for(let i = 0; i < todoItem.length; i++) {
            createToDo(todoItem[i])
        }
    })
    .catch(error => console.log(error))

todoForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value,
    }
    axios.post("https://api.vschool.io/dan/todo/", newTodo)
        .then(response => console.log(response))
        .catch(error => console.log(error))
})
const isChecked = {
    completed: true
}
const notChecked = {
    completed: false
}
let editTodo = function(singleObject) {
    axios.put("https://api.vschool.io/dan/todo/" + singleObject._id)
    .then(response => {
        
    })
    .catch(error => console.log(error))
}

    .then( response => {
        for(let i = 0; i < response.data.length; i++) {
            if(checkbox.checked === true) {
                isChecked
            } else {
                notChecked
            }
        }
    })
    .catch(error => console.log(error))

let deleteTodo = function(singleTodoObject) {
    axios.delete("https://api.vschool.io/dan/todo/" + singleTodoObject._id)
        .then(function(response)  {
            alert('Your todo was deleted!')
        })
        .catch(error => console.log(error))
}
div.addEventListener("click", deleteTodo)

function createToDo(todoItem) {
    const container = document.createElement("div")
    const h3 = document.createElement("h3")
    const p = document.createElement("p")
    const h4 = document.createElement("h4")
    const img = document.createElement("img")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    const deleteB = document.createElement("button")
    deleteB.textContent = "Delete"

    if(todoItem.completed === true) {
        h3.style.textDecoration = "line-through"
    }

    h3.textContent = todoItem.title 
    p.textContent = todoItem.description 
    h4.textContent = "$" + todoItem.price 
    img.src = todoItem.imgUrl
    img.width = "400"
    img.height = "300"

    container.appendChild(h3)
    container.appendChild(p)
    container.appendChild(h4)
    container.appendChild(img)
    container.appendChild(checkbox)
    container.appendChild(deleteB)
    div.appendChild(container)

}

