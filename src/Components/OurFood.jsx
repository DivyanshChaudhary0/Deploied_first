import React from 'react'
import { mealData } from '../Data';

const OurFood = ({handleAdd}) => {
  return (
    <div className='w-[100%] mt-[60px] px-10 py-10'>
        <h1 className=' text-center text-4xl font-semibold text-[#fbc531] '> Our Foods </h1>
        <div className=' small:w-full px-20 pt-16 flex flex-wrap items-center justify-between gap-6'>
            {
                mealData.map(function(value,idx){
                    return (
                        <div key={idx} className="card vsmall:w-[250px] h-[300px] shadow-xl overflow-hidden rounded-md cursor-pointer">
                        <img src={value.image} alt="" 
                        className=' w-full h-[55%] object-cover object-center mb-3 transition ease-in delay-150 hover:scale-105'/>
                       <div className="dets flex gap-2 flex-col items-center justify-center">
                        <p className=' uppercase'>{value.name}</p>
                        <p>{value.price}</p>
                        <button className=" bg-black text-white rounded px-4 py-2 text-sm" onClick={handleAdd}>Add Now</button>
                       </div>
                    </div>
                    )
                })
            }       
        </div>
    </div>
  )
}

export default OurFood;