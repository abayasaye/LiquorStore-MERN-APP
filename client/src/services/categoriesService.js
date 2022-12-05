export const categoriesData = async ()=>{
        try {
        return await fetch("http://localhost:3000/categories")
        .then((result)=>
            result.json())
        }
        catch (error)
            {
                console.log(error)
            }
    }
