// авторизація запитів з ключами
//  * які бувають :
//  * -у query string
//  * - у хедерах
//  * для прикладу використовуємо https:pixabay.com/api/docs/



const API_KEY = "43173775-fc7269b10cca3a5d436001063";

const list = document.querySelector(".list");


const params = new URLSearchParams({
    key: API_KEY,
    q: "red rose"
})
fetch(`https://pixabay.com/api?key=${params}`)
.then(res => {
    if(!res.ok) {
        throw new Error(res.statusText);
    }
    return res.json();
})
.then(data => {
    console.log(data);
    list.insertAdjacentHTML("beforeend", createMarkup(data.hits))
} )
.catch(error => {
    console.log(error);
    
})


function createMarkup(arr) {
    return arr.map(({previewURL, tags}) => `
    <li>
    <img src="${previewURL}" alt="${tags}" width="300"/>
    </li>`).join("")
}

