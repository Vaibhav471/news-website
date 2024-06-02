import React from 'react'

function News({title,description,url,imageSrc}) {
  return (
    <a href={url}>
        <div className='mt-12 p-6 flex bg-red-800 rounded-lg'>
        <div>
            <img src={imageSrc} className='w-44 h-32 rounded-lg'/>
        </div>
        <div className='ml-6'>
        <h1 className='text-white-300 text-3xl'>{title}</h1>
        <p>{description}</p>
        </div>
        
    </div>
    </a>
  )
}

export default News