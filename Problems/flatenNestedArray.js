

let arr = [1,2,[3, [4,5, [6,7]], 8]];


function flatternArray(nums){
    let result = [];
    for(let num of nums){
        if(Array.isArray(num)){
            result.push(... flatternArray(num))
        }else{
            result.push(num);
        }
    }
    return result;
}

console.log(flatternArray(arr))
