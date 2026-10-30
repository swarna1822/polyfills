
let _name = "Swarna";


function revereseString(Str){
    let result = "";
    for(let i=Str.length-1; i>=0; i--){
        result += Str[i];
    }

    return result;
}

console.log(revereseString(_name))