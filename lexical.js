
const name = "srija"

function lexical (){
    function inner(){
        console.log(name)
    }

    inner()
}

console.log(lexical())