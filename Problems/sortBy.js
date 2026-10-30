
const employees = [
  { name: "A", salary: 50000 },
  { name: "B", salary: 30000 },
  { name: "C", salary: 70000 },
  { name: "D", salary: 40000 }
];

function sortBySalary(list){
    if(!list.length || list.length ===1) return []
    let result = list.sort((a,b)=> a.salary - b.salary);
    console.log(result);
}

sortBySalary(employees)