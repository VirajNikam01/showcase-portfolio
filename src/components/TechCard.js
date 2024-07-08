import React from 'react'

const TechCard = ({tech}) => {
    const{name, image, description} = tech
  return (
    <div className='border border-stone-800 rounded-2xl py-2 w-full sm:w-60 h-72 flex justify-between  flex-col my-4  '>
      <img 
      className='w-36  mx-auto'
      src={image} alt={name} />
      <div className='flex justify-between items-center flex-wrap py-4 px-5'>
        <h1 className='semibold'>{name}</h1>
        <h1 className='border rounded-xl px-4 py-1 faint inter'>{description}</h1>
      </div>
    </div>
  )
}

export default TechCard
