
//Throtteling is a technique, it limits the excution of function, until specified time has passed

const btn = document.getElementById("myButton")

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
}, 1000)


btn.addEventListener("click", () => {
    throttelFun(Date.now());
});




