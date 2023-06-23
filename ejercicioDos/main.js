async function peticionLibros(){
    let request = await fetch("http://openlibrary.org/search.json?q=i+robot)")
    let response = await request.json()
    let data = response.docs
    for(let i=0; i < data.length; i++){
        
        console.log(i)
            console.log("El nombre del libro es: "+ data[i].title + " y su autor es: " +  `${data[i].author_name ? data[i].author_name[0] : 'NO DATA'}`)
        
    }
}

peticionLibros()