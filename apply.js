// “Call, apply, and bind are used to control the this value of a function. 
// Call passes arguments individually and executes immediately. 
// Apply passes arguments as an array and executes immediately. 
// Bind returns a new function that executes later.”

let user = {
    name:'swarna'
}

function greet (from){
    console.log(`Hello ${this.name}, from ${from}`)

}


Function.prototype.myApply = function(context, args = []){
    if(typeof this !=='function'){
        console.error(`${this} is not callable`)
    }
    if(!Array.isArray(args)) return console.log("Pass array of arguments")
    context.fn = this;
    return context.fn(...args)
}

greet.myApply(user, ['hyd']);