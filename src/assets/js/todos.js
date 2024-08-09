// const listAllTodos = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//         .then((response) => response.json())
//         .then((data) => console.log(data))
// }

// 1- Exibir um objeto com qtd e data

// const listAllTodos = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//         .then((response) => response.json())
//         .then((data) => console.log({
//             qtd: data.length,
//             data: data
//         }))
// }
// listAllTodos();

// 2- Exibir um objeto com qtd e data somente de um usuario especifico

// const listAllTodosByIdUser = (id) => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//         .then((response) => response.json())
//         .then(data => {
//             const dataFiltered = data.filter(i =>i.userId === id)

//             console.log({
//                  qtd: dataFiltered.length,
//                  data: dataFiltered
//             })
//         })
// }

// listAllTodosByIdUser();

// 3 - Exibir um obj com qtd e data somente de um id especifico
// const listAllTodosById = id => {
//     fetch(`https://jsonplaceholder.typicode.com/todos${id}`)
//         .then((response) => response.json())
//         .then((data) => console.log(data))
// }

// listAllTodosById(1);

// 4 - Criar um recurso utilizando o REST API do jsonPLaceholder

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers:{
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         userId: 2,
//         title: 'Teste',
//         body: 'Teste tudo tudo'
//     })
// }) 
// .then(response => response.json())
// .then(json => console.log(JSON.stringify(json, null, 4)))

// 5 - Atualizar o post com id 54

// fetch('https://jsonplaceholder.typicode.com/posts/54', {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         userId: 10,
//         title: 'Teste atualizando',
//         body: 'Teste tudo tudo atualizadoooooo'
//     })
// })
//     .then(response => response.json())
//     .then(json => console.log(JSON.stringify(json, null, 4) ))

// 6 - Atualizar parcialmente o post com id 54

// fetch('https://jsonplaceholder.typicode.com/posts/54', {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({       
//         title: 'Teste atualizando'        
//     })
// })
//     .then(response => response.json())
//     .then(json => console.log(JSON.stringify(json, null, 4) ))

// 7 - Deletar o post com id 22

// fetch('https://jsonplaceholder.typicode.com/posts/22', {
//     method: 'DELETE',
    
// })
//     .then(response => response.json())
//     .then(json => console.log(JSON.stringify(json, null, 4) ))

