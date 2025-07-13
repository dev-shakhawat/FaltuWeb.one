import React, { useState } from 'react'
import InputBox from '../components/common/InputBox'
import ToolTipsArea from '../components/common/ToolTipsArea'

export default function Add() {

    const [name , setName] = useState('')
    const [url , setUrl] = useState('')
    const [mail , setMail] = useState('')

    const handleRest = () => {
        setName('')
        setUrl('')
        setMail('')
    }

  return (
    <div className='max-w-1/2 mx-auto border border-gray-200 p-2 mt-2 rounded-[10px] h-[80vh] flex justify-between flex-col relative '>

        <div className="h-full flex flex-col items-center justify-center  ">

            <h2 className="text-2xl font-bold">Add a website</h2>


            <ToolTipsArea title='Webite Name' className={`mt-10 w-6/10 mx-auto rounded-lg py-2 `}>
            <  InputBox setValue={setName} onChange={(e)=>  setName(e.target.value)} value={name} />
            </ToolTipsArea>
            <ToolTipsArea title='Web URL' className={`mt-10 w-6/10 mx-auto rounded-lg  py-2  `}>
            <InputBox setValue={setUrl} onChange={(e)=>  setUrl(e.target.value)} value={url} />
              </ToolTipsArea>
            <ToolTipsArea title='Your Mail' className={`mt-10 w-6/10 mx-auto rounded-lg   py-2 `}>
               <InputBox setValue={setMail} onChange={(e)=>  setMail(e.target.value)} value={mail} />
            </ToolTipsArea>
        </div>


        <div className="flex justify-end absolute bottom-2 right-2   ">
            <button onClick={handleRest} type="reset" className='border border-gray-200 cursor-pointer py-2 rounded-md mr-5 px-10 '>Reset</button>
               <button type='button' className="flex items-center gap-2  py-2 px-10 rounded-md cursor-pointer select-none " style={{background: 'linear-gradient(97deg,#6b57ffb3,#3f62ffb3 50%,#00cae0b3)'}}>
                   <span className='text-white text-xl'>Submit</span>
               </button>
        </div>


    </div>
  )
}
