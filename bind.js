// bind method can controls the this value in a function, it takes the arguments with specified this value and returns a function


const user = {
    name:'swarna'
}

function greet(from, state){
    console.log(`Hey, ${this.name} from, ${from}, ${state}`)
}

Function.prototype.myBind = function(context, ...args){
    context = context ?? globalThis;
    const fn = Symbol("fn");
    context[fn] = this;
    return function(...newArgs){
        
        return context[fn](...args, ...newArgs)
    }
}

const newFunction = greet.myBind(user, "Hyd", 'TG')
console.log(newFunction());