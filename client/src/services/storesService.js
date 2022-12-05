export const storesData = async ()=>{
    try {
    return await fetch("http://localhost:3000/stores")
    .then((result)=>
        result.json())
    }
    catch (error)
        {
            console.log(error)
        }
}
