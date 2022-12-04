export const infoData = async ()=>{
    try {
    return await fetch("http://localhost:3000/info")
    .then((result)=>
        result.json())
    }
    catch (error)
        {
            console.log(error)
        }
}
