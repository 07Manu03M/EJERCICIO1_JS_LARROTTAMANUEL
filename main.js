var ordenado = "({[]})"

function expresion(word){
    for (let i = 0; i < word.length; i++) {
        if (word == ordenado){
            console.log("true")
        }else{
            console.log("false")
        }
    }
}

expresion("({[]})")