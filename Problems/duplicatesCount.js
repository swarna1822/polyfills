
const arr = [1,3,4,5,6,7,4,5,2,4,6];


function duplicatesCount(nums){
    let map = {};
    for(let num of nums){
        if(map[num]){
            map[num] +=1
        }else{
             map[num] = 1
        }
    }

    for(let key of Object.keys(map)){
        if(map[key] === 1){
            delete map[key]
        }
    }

    return map
}

duplicatesCount(arr)