

const arr = [2,7,11,15];
let _target = 9;

function twoSum (nums, target){
    let map = {}
    for(let i=0; i<nums.length; i++){
        let complement = target - nums[i];
        if(map[complement] !=undefined){
            return [map[complement], i]
        }

        map[nums[i]] = i
    }

    
}

console.log(twoSum(arr, _target));