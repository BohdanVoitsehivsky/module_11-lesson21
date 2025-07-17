// const options = {
// 	method: "GET"
// };

// fetch("https://jsonplaceholder.typicode.com/users", options)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });


// ******* Основи запиту, -FetchAPI, - URL запиту, - Вкладка Network, - Обробка відповіді response (404 з fetch)
// ***** https://jsonplaceholder.typicode.com/todos



const list = document.querySelector(".todo-list");


// const params = new URLSearchParams({
//     _limit: 5,
//     _page: 3
// })

// fetch(`https://jsonplaceholder.typicode.com/todos?${params}`) 
// .then((res) => {

//    if(!res.ok) {
//     throw new Error("OOOps");
//    }
    

// return res.json();

// })
// .then(data => {
//     console.log(data);
//     list.insertAdjacentHTML("beforeend", createMarkup(data))
    
// })
// .catch(error => {
//     console.log("pomylka", error);
    
// })




function createMarkup(todos) {
return todos.map(({id, title, completed}) => `
<li data-id="${id}" class="list-item">
<input type="checkbox" ${completed && "checked"}/>
<p>${title}</p>
</li>`).join("")
}



// **** всмередині функції запит , зовні обробка


function foo(url) {
    return fetch(url)
    .then(result => {
        if(!result.ok) {
            throw new Error(result.status);
        }
        return result.json();
    })
}


foo('https://jsonplaceholder.typicode.com/todos')
.then(data => {
    list.insertAdjacentHTML("beforeend", createMarkup(data))
})
.catch(error => {
    console.log(error);
    
})


foo('https://jsonplaceholder.typicode.com/users')
.then(data => {
   console.log(data);
   
})
.catch(error => {
    console.log(error);
    
})