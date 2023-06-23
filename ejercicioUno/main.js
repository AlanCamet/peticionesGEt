let pokemonesARray = []

async function getApi(){
     let request = await fetch("https://pokeapi.co/api/v2/pokemon/")
     let response = await request.json()
     let data = response.results
    for (let i = 0; i< data.length; i++){

        let request = await fetch (data[i].url)
        let response = await request.json()
        let dataDos = response.types[0]
        console.log("El nombre del pokemon es " + data[i].name + " y su tipo es " + dataDos.type.name)
        
    }
    
}

function consolePokemon(request){
    console.log(request.types.type)
}

getApi()