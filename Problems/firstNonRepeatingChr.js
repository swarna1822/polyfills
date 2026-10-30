

let _str = 'aabcbeb'

function findFirstNonRepeatingChar(str){
   let map = {};
   for(let i=0; i<str.length; i++){
        if(!map[str[i]]){
            map[str[i]] = 1
        }else{

            map[str[i]] += 1;
        }
   }

   for(let key of Object.keys(map)){
        if(map[key] === 1) return key
   }
}

console.log(findFirstNonRepeatingChar(_str))