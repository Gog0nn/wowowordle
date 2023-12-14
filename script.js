let diccionario = [[
    "APLEE",
    "HOUSE",
    "MOUSE",
    "YOUTH",
    "FIFTH",
    "DANCE",
]]
let intentos = 6;
let palabra = getWord()
const button = document.getElementById("guessButton") 
const grid = document.getElementById("grid")



function getWord(){
    
    let min = 0;
    let max = diccionario.length;
    let i= Math.floor(Math.random() * (max-min)) + min;
    return diccionario [i]        
}

button.addEventListener("click", ()=>{
    
    const intento = leerIntento()
    console.clear();

    const row = document.createElement("div");
    row.className = "row";

    for (const i in palabra) {
        const span =document.createElement("span");
        span.className = "letter";
        span.innerHTML = intento[i];

        if(palabra[i] == intento[i]){
            span.style.backgroundColor = "#79b851";
            
        }
        else if(palabra.includes(intento[i])){
            span.style.backgroundColor = "#f3c237";
        }
        else{
            span.style.backgroundColor = "#a4aec4";
        }
       
        row.appendChild(span)
        
    }

    grid.appendChild(row)

    intentos--
    
    if(palabra == intento){
        terminar("u win​​")
        return;
    }
    
    if(!intentos){
        terminar("u lus​💀​")
        return
    }
});

function terminar(mensaje){
    const resultado = document.getElementById("guesses");
    resultado.innerHTML = `<h1>${mensaje}</h1>`;
    boton.disabled = true
}


function leerIntento(){
    const INPUT = document.getElementById("guessInput")
    return INPUT.value.toUpperCase()
}

console.log(palabra)


