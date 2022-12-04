export const productsData = async ()=>{
    try {
    return await fetch("http://localhost:3000/products")
    .then((result)=>
        result.json())
    }
    catch (error)
        {
            console.log(error)
        }
}
