// In JavaScript, call(), apply(), and bind() are used to control the value of "this" inside a function.

let user = {
    name:'swarna'
}

function greet (from){
    console.log(`Hello ${this.name}, from ${from}`)

}


Function.prototype.myCall = function(context, ...args){
    if(typeof this !=='function'){
        console.error(`${this} is not callable`)
    }
    context.fn = this;
    return context.fn(...args)
}

greet.myCall(user, 'hyd');