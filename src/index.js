
console.log(data[0])

const pokemon = document.querySelector(".cards")
pokemon.className = "cards"

//All pokemon
for(let i = 0; i<data.length; i++){

const listObject = document.createElement("li")
listObject.className = "card"

const stats = document.createElement("ul")
stats.className ="card--text"
    
const pokemonName = document.createElement("h2")
pokemonName.classList = "card-title"


const pokemonImage = document.createElement("img")
pokemonImage.classList = "card--img"
pokemonImage.setAttribute("width",256)


const HP = document.createElement("li")
const ATTACK = document.createElement("li")
const SPECIAL_ATTACK = document.createElement("li")
const SPECIAL_DEFENSE = document.createElement("li")
const SPEED = document.createElement("li")
    
//IMAGE
pokemonImage.setAttribute("src",data[i].sprites.front_default)
    
pokemonName.textContent = data[i].name

HP.innerHTML = "ATTACK:  " + data[i].stats[0].base_stat
ATTACK.innerHTML = "ATTACK:  " + data[i].stats[1].base_stat
SPECIAL_ATTACK.innerHTML = "SPECIAL-ATTACK:  " + data[i].stats[2].base_stat
SPECIAL_DEFENSE.innerHTML = "SPECIAL-DEFENSE:  " + data[i].stats[3].base_stat
SPEED.innerHTML = "SPEED:  " + data[i].stats[4].base_stat

listObject.append(pokemonName)
listObject.append(pokemonImage)
stats.append(HP)
stats.append(ATTACK)
stats.append(SPECIAL_ATTACK)
stats.append(SPECIAL_DEFENSE)
stats.append(SPEED)
listObject.append(stats)
    
listObject.addEventListener("click",()=>{

    if(pokemonImage.src===data[i].sprites.front_default){
        pokemonImage.setAttribute("src",data[i].sprites.back_default)
        return
    }
    if(pokemonImage.src===data[i].sprites.back_default)
        pokemonImage.setAttribute("src",data[i].sprites.front_default)
})

pokemon.append(listObject)
}




