import React from 'react'

// icon
import { GoArrowRight } from "react-icons/go";

export default function Home() {
  return (
    <div className='h-screen flex items-center justify-center overflow-hidden  '>
        <div className="">
          <h1 className=" text-center font-ubuntu font-bold text-5xl  ">FaltuWeb</h1>
          <p className="  text-center font-ubuntu font-medium text-xl py-5  ">TAKE ME TO A USELESS FALTU WEBSITE</p>

          {/* button */}
        <div className="click">
      <h5>
      <GoArrowRight />
        <button className='pleaseBtn' id="button" alt="PLEASE">
          <i>p</i>
          <i>l</i>
          <i>e</i>
          <i>a</i>
          <i>s</i>
          <i>e</i>
        </button>
        <GoArrowRight className='rotate-180' />
      </h5>
    </div>

        </div>
    </div>
  )
}
