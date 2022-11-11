import React from 'react'

const Cards = ({mealData}) => {
  return (
    <div className='border border-orange-300 rounded-2xl w-64 shadow-lg' key={mealData.id}>
      <img src={mealData.image} alt="" className='rounded-2xl'/>
      <div className='flex items-start justify-between my-3 px-3'>
        <h1 className='font-bold text-xl'>{mealData.name}</h1>
        <div>
          <p className='font-bold '>Rs. {mealData.price}</p>
          <p>Price</p>
        </div>
      </div>
      <div className='flex items-center justify-between px-3'>
        <p className='mb-2'>{mealData.description}</p>
        <button className='bg-orange-500 border border-orange-500 text-white font-semibold px-3 py-1 rounded-lg hover:bg-white hover:text-black'>{mealData.category}</button>
      </div>
    </div>
  )
}

export default Cards;
