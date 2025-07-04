import React from 'react'
import { Link, useLocation } from 'react-router';

export default function PopupMenu({className , allbtns = []}) {

    const location = useLocation();
  return (
    <div className={`${className}`}>
        <div className="flex flex-col items-start    ">
            {allbtns.length <= 0 ? "No Data" : 
            allbtns.map((btn , index) => {
                return  <Link to={btn.url} key={index} className='py-1 bg-transparent w-full text-start text-xl pl-2 cursor-pointer hover:bg-gray-200 rounded-md flex items-center gap-2  '>
                  {btn.icon}
                  <span>{btn.name}</span>
                </Link>
            })
        }
        </div>
    </div>
  )
}
