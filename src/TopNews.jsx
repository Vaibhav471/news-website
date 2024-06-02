import React, { useEffect, useState } from 'react'

function TopNews({title,imageSrc,description,url}) {
    if(!imageSrc){
        imageSrc="https://www.google.com/maps/vt/data=ZyLgLHgXN0JIdzoJswrLRTxJlXK99Ap33vlkgNF5wvRJsARn444enmdDAMT5SHr1AIbMq2SCWX023QXJOPHdUXEgRbc_Qp5ns1RjH1R_Bz-w4OydWnnQohR9uGHXpJ6KsJ0CvZy9UtMSVk7ljdJHDVV9u1_xOPuEt2WMYahWrSc12JwMhYaYhcncKh6zZ6B7CGpde9j7cn6BX4Le_DK4IO9H1vQ1cW22EfnsPG-4QVHFtIKsVDy9uyVkgp_WpFkpy3oFAh9_VFrWI9-PH0o2e6L5MqkuSHIb_CWlKcem4CNTtv-S9xllS3x1w9vkVCCWNfC_r3DpohSOagijqUFWde7hlZJ9RF302VI6KQmR_KtlxXV6tw"
    }

    const [color,setColor]=useState("'yellow font-black'")

    

    
  return (
         <div className=' bg-red-800 p-3 rounded-lg'>
            <a href={url}>
            <div>
            <h1 className='font-black text-white'>{title}</h1>
        <img className='rounded-lg mx-auto h-32 w-42' src={imageSrc} alt="" srcset="" />
        <p>{description}</p>
            </div>
            </a>
    </div>

   
  )
}

export default TopNews