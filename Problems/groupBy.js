const users = [
  { name: "A", department: "IT" },
  { name: "B", department: "HR" },
  { name: "C", department: "IT" }
];


function groupBy (list, key){
    let result = {};
    for(let item of list){
        if(!result[item[key]]){
            result[item[key]] = []
        }
        result[item[key]].push(item)
    }

    console.log(result)
}

console.log(groupBy(users, 'department'))

