// syntax for map
// array.map((num, i, array)=>{});

Array.prototype.myMap = function(cb){
    let temp = [];
    for(let i=0; i<this.length; i++){
        temp.push(cb(this[i], i, this))
    }

    return temp
}

const result = [2,3,4,5,6].myMap((num, i, arr)=>num*2);
console.log(result);

module.exports = myMap