import React from 'react'
import { NavLink } from 'react-router-dom'


const Meal = ({info}) => {

 


  
  return (
    <>
      <div className='flex flex-wrap gap-6 justify-center mt-10'>
        {!info ? "no deta found" :info.map((Item)=>{
          return(
            <div className='' key={Item.strMealThumb}>
              <img className='w-[200px] shadow-2xl rounded-3xl' src={Item.strMealThumb}/>
              <p className='text-center mt-4'>{Item.strMeal}</p>

             

                    
 <NavLink to={`/${Item.idMeal}`}>

 <button className='px-4 ml-[60px] mt-4 rounded-xl text-white py-2 bg-teal-600'>Recipe</button>


 </NavLink>


            
      

             </div>
          )
        })
        }

      </div>
    </>
  )
}

export default Meal