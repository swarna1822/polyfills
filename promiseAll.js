

const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(1),100)
})
const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(2),200)
})

const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>reject(3),300)
})


function myPromiseAll(promises){
    return new Promise((resolve, reject)=>{
        const results = [];
        let completed = 0;
        if(promises.length ===0){
            return resolve([])
        }
        promises.forEach((promise, index)=>{
            Promise.resolve(promise).then((value)=>{
                results[index] = value;
                completed++
                if(completed === promises.length){
                    resolve(results)
                }
            }).catch(reject)
        })
    })
}

myPromiseAll([p1,p2,p3]).then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log("promise is rejected",error)
})