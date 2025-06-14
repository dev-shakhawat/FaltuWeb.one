import React from 'react'

// components
import Nav from './Nav'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div>
    <Nav/>

    <div className="flex">



        {/*  body  */}
        <div className="w-full">
            <Outlet/>
        </div>


    </div>

</div>
  )
}
