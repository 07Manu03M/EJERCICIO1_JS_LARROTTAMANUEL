var inic = "({["
var fin = "]})"

function expresion(word){
    for (let i = 0; i < word.length; i++) {
        if (word == inic + fin) {
            console.log("true")
        }else{
            console.log("false")
        }
    }
}

expresion("({[]})")