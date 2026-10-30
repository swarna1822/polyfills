

// Debounce is a technique, it delays the function excution until spcified time has passed


const inputRef = document.getElementById("inputRef")

console.log(inputRef);

function debounce(cb, delay){
    let timerId;

    return function(...args){
        clearTimeout(timerId);
       timerId =  setTimeout(()=>{
            cb.apply(this, args)
        }, delay)
    }
}

const debounceSearch = debounce((value)=>{
    console.log("Search called", value)
}, 500)

inputRef.addEventListener("input", (e) => {
  debounceSearch(e.target.value);
});