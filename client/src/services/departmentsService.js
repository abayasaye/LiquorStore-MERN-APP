export const departmentsData = async ()=>{
    try {
        return await fetch("http://localhost:3000/department")
    .then((result)=>
        result.json())
    }
    catch (error)
        {
            console.log(error)
        }
}
