export const departmentsData = async ()=>{
    try {
    return await fetch("http://localhost:3000/departments")
    .then((result)=>
        result.json())
    }
    catch (error)
        {
            console.log(error)
        }
}
