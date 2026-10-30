

const arr1 = [1,2,3,4];
const arr2 = [2,3,5,6];

let seen = new Set(arr1);

let result = []

for(let num of arr2){
    if(seen.has(num)){
        result.push(num)
    }
}

console.log(result)


