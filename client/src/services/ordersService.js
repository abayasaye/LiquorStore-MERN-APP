export const ordersData = async ()=>{
    try {
    return await fetch("http://localhost:3000/orders")
    .then((result)=>
        result.json())
    }
    catch (error)
        {
            console.log(error)
        }
}
