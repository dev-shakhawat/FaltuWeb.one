import React, { useState } from "react";

import { IoClose } from "react-icons/io5";

export default function InputBox({ className , cross = true , value , setValue , onChange}) {

    const [isCross , setIsCross] = useState(cross);

  return (
      <div className={`${className} w-full relative `}>
        <input onChange={onChange} value={value} className="font-ubuntu w-full bg-transparent placeholder:text-transparent text-slate-700 text-sm  rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300  " />
        {value && <IoClose className="absolute right-2 top-2 text-xl cursor-pointer" onClick={() => setValue('')}/>}
      </div>
  );
}