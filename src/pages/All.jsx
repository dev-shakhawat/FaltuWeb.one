import React, { useRef } from 'react'
import { Link } from 'react-router'

// icons
import { BsCopy } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { urls } from '../webLinks';

export default function All() {

    const textRef = useRef(null);

    const handleCopy= (e) => {
         console.log(e.target);
         
    }

    
    
  return (
    <div className=' w-[50%] mx-auto bg-gray-300 my-3 h-[88vh] p-2 rounded-md '>
        
        {/* web items */}
        <div className="grid grid-cols-1 h-full overflow-y-scroll gap-2 relative customScrollbar">
            {urls.map((url , index) => (
                <Link key={index} to={url.url} target='_blank' className="flex justify-between w-full bg-white p-3 rounded-md   ">
                <div className="">
                  <h3 className="text-xl ">{url.title}</h3>
                  <p ref={textRef} className="text- base">{url.url}</p>
                </div>
              
                {/* buttons */}
                <div className="flex gap-3  ">
                  <button onClick={()=> handleCopy(e)} type="button" className='text-2xl' ><BsCopy /></button>
                  <button type="button" className='text-2xl' ><BsBookmark /></button>
                </div>
                </Link>
            ))}
        </div>

    </div>
  )
}
