

function once(fn){
    let is_called = false;
    
    return function (...args){
        if(is_called) return;
        is_called = true
        return fn.apply(this,args)
    }

}

let on=once(()=>console.log('Once function is called'))
on("second is called")
on()
on()
on()