
//Throtteling is a technique, it limits the excution of function, until specified time has passed

function throttel(cb, delay){
    let shouldWait = false;
    return function(...args){
        if(shouldWait) return;
        cb.apply(this, args);
        shouldWait = true;
        setTimeout(()=>{
            shouldWait = false;
        }, delay)
    }

}

const throttelFun = throttel((value)=>{
    console.log("Throttel function is called", value)
}, 300)

throttelFun("React js");
setTimeout(()=>{
    throttelFun("Testing librab")

}, 400)