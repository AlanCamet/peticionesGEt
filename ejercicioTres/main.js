let libreria = []
let autorButton = document.querySelector("#autor")

async function getApi(){
    let request = await fetch("http://openlibrary.org/search.json?author=asimov")
    let response = await request.json()
    let data = response.docs
    
    for(let i=0; i<data.length; i++){
        let autor = {
            autor: data[i].author_name[0],
            libro : data[i].title
        }
        
        libreria.push(autor)
    }
    autorButton.textContent = libreria[0].autor
    
    autorButton.addEventListener('click',getLibros)
}
getApi()

function getLibros() {
    console.log("soy el boton")
    let ul = document.createElement("ul")
    let div = document.querySelector("div")
    div.appendChild(ul)
    for(let i=0; i<libreria.length; i++){
        if(libreria[i].autor == libreria[0].autor){
            let il = document.createElement("li")
            il.textContent = libreria[i].libro
            ul.appendChild(il)
        }
    }
}