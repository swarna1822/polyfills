// reduce polyfill

// array.reduce((acc, cur, i, array)=>{}, intialvalue)



Array.prototype.myReduce = function(cb, intialvalue){
    let accumulator = intialvalue;
    for(let i=0; i<this.length; i++){
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
    }

    return accumulator
}

const result = [1,2,3,4].myReduce((acc, cur, i, arr)=>{
    return acc+cur
}, 0)

console.log(result)
