import { useState } from "react"
import Meal from "./Meal";







export default function Pages() {

  const [data, setData] = useState();

  const [search, setSearch] = useState();

  const handleInput = (event) =>{
    setSearch(event.target.value)

  }
  const action = async () =>{

    
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    const jsonData = await get.json()
    setData(jsonData.meals)
      
   
   
 



  }

  
  return (

 
    <div>


      <div>
        <h1 className="text-center uppercase text-teal-600 text-[80px] mt-4 font-bold">food app</h1>
      </div>

        <div className=" flex flex-row justify-center  mt-20">

          <div className="searchBar">
            <input className="w-[350px] rounded-2xl border-2 border-slate-400 pl-8 bg-transparent h-14" type="text" placeholder="enter ..." onChange={handleInput} />

            <button onClick={action} className=" text-white h-14 ml-4 w-[100px] rounded-2xl bg-teal-500">search</button>
          </div>

       

        </div>
   

   <Meal info={data}/>

   
  

   
  
   

        
    </div>
  )
}
