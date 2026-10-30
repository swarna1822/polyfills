
async function fetchData(){
   
    let res = await fetch('https://fakestoreapi.com/productsl');
    if(!res.ok) {
        throw Error('Unable fetch the details')
    }

    return await res.json()
  
        
}


// async function retryApicall(apiCall,limit){
//     for(let attempt=1; attempt<=limit;attempt++){
//         try {
//             const result = await apiCall();
//             return result; // Success: stop retrying
//         } catch (error) {
//             if (attempt === limit) {
//                 throw error; // All attempts failed
//             }

//             console.log(`Attempt ${attempt} failed. Retrying...`);
//         }
// }
// }

// retryApicall(fetchData, 5).then((msg)=>{
//     console.log(msg)
// }).catch(error=>{
//     console.log(error)
// })



async function retry(attempts){
    try{
        let data= await fetchData()
        console.log('Api success')
        return data
    }catch(error){
        if(attempts === 0){
            console.log("Your attempts are completed");
            throw Error('Maximum attempts reached')
            return 
        }

        console.log(`${attempts} this many times api you retried`)

        return retry(attempts-1)

    }
}

retry(5).then((data)=>{
    console.log(data)
}).catch((error)=>console.log(error))

