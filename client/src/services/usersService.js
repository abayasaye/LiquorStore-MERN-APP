export const usersData = async ()=>{
    try {
    return await fetch("http://localhost:3000/users")
    .then((result)=>
        result.json())
    }
    catch (error)
        {
            console.log(error)
        }
}
