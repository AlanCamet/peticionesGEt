let libreria = []
let autorButton = document.querySelector("#autor")


async function getApi(){
    let request = await fetch("http://openlibrary.org/search.json?author=asimov")
    let response = await request.json()
    let data = response.docs
    
    for(let i=0; i<data.length; i++){
        getData(data[i])    }
}
getApi()

function getData(data){
    let autor = {
        autor: data.author_name[0],
        libro : data.title
    }

    libreria.push(autor)
}

console.log(libreria)