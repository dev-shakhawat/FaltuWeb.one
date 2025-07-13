import React from 'react'

export default function ToolTipsArea({title = "title", children , className}) {
  return (
    <div className={` ${className}  border border-gray-200  relative `}>
        <span className="absolute -top-3.5 left-2 bg-white px-1 font-ubuntu  ">{title}</span>

        {children}

        
    </div>
  )
}