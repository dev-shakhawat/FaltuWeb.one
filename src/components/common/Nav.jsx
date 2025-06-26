import React, { useEffect, useRef, useState } from 'react';


// icons
import { TbMenu2 } from "react-icons/tb";
import { BsBookmarks } from "react-icons/bs";
import { useLocation, useNavigate } from 'react-router';
import { FaBookmark } from "react-icons/fa6";



// book marks
import PopupMenu from './PopupMenu';




function Nav() {
    const PopupRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const [isPopupMenu, setIsPopupMenu] = useState(true);
    const allPopupLinks = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "All Webs",
            url: "/all",
        },
        {
            name: "Add A Web",
            url: "/add",
        },
        {
            name: "About",
            url: "/about",
        },
        {
            name: "Privacy",
            url: "/privacy",
        },
    ]

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (PopupRef.current && !PopupRef.current.contains(event.target)) {
            setIsPopupMenu(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [PopupRef]);
    

    useEffect(() => {
        setIsPopupMenu(false);
    }, [location])


    return (
        <div className={`flex justify-between items-center px-5 py-3 border-b border-gray-200 relative  `}>
            
            {/* logo */}
            <div   ref={PopupRef}  className="flex items-center gap-2 cursor-pointer select-none relative ">

               <TbMenu2 onClick={() => setIsPopupMenu(prev => !prev)} className='text-2xl' />
               <span onClick={() => navigate('/')} className='text-2xl font-semibold  '>FaltuWeb</span>

               {/* isPopupMenu */}
               <div className="">
                 {isPopupMenu && 
                  <PopupMenu allbtns={allPopupLinks} className={`${isPopupMenu ? " " : "  "} animate-photoPYlogoDropdown z-10  w-[200px] absolute top-[35px] left-0 bg-white border border-gray-300 rounded-md p-2 `} />
                 }
               </div>
            </div>


            {/* account */}
            <div className=" flex items-center gap-5">

               <div onClick={() => navigate('/bookmarks')} className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer select-none " style={{background: 'linear-gradient(97deg,#6b57ffb3,#3f62ffb3 50%,#00cae0b3)'}}>
                   {location.pathname == "/bookmarks" ? <FaBookmark  className='text-white text-2xl'/> : <  BsBookmarks  className='text-white text-2xl'/>}
                   
                   <span className='text-white text-xl'>BookMarks</span>
               </div>
            </div>

        </div>
    );
}

export default Nav;
