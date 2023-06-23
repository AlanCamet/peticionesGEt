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
}
getApi()

console.log(libreria[0])