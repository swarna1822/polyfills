// syntax for filter
// array.filter((num, i, array)=>{});

Array.prototype.myFilter = function(cb){
    let temp = [];
    for(let i=0; i<this.length; i++){
        if(cb(this[i], i, this)){
            temp.push(this[i])
        }
    }

    return temp
}

const result = [2,3,4,5,6].myFilter((num, i, arr)=>num > 4);
console.log(result);