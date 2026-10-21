

// Debounce is a technique, it delays the function excution until spcified time has passed


function debounce(cb, delay){
    let timerId;

    return function(...args){
        clearInterval(timerId);
       timerId =  setTimeout(()=>{
            cb.apply(this, args)
        }, delay)
    }
}

const debounceSearch = debounce((value)=>{
    console.log("Search called", value)
}, 500)

debounceSearch('React')
debounceSearch('React js')
debounceSearch('React js and javascript')