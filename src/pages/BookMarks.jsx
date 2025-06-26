import React, { useEffect, useState } from 'react';
import { Link } from 'react-router'; // ✅ 'react-router' থেকে 'react-router-dom'
import { GoIssueClosed } from "react-icons/go";
import { BsCopy } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa6";

export default function BookMark() {

  const [copiedIndex, setCopiedIndex] = useState(null);

  const [urls , setUrls] = useState([])

  const handleCopy = (url, index) => {
    navigator.clipboard.writeText(url)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1500);
      })
      .catch((err) => {
        console.error("Copy failed:", err);
      });
  };


  useEffect(() => {
    const FaltuBookmarks = JSON.parse(localStorage.getItem('FaltuBookMarks')) || [];
    setUrls(FaltuBookmarks);
  }, []);
  


  const handleRemoveBookMark = (url)=>{
    let FaltuBookmarks = JSON.parse(localStorage.getItem('FaltuBookMarks'))
    FaltuBookmarks = FaltuBookmarks.filter((booked) => booked.url !== url)
    localStorage.setItem('FaltuBookMarks' , JSON.stringify(FaltuBookmarks))
    setUrls(FaltuBookmarks)
  }
  




  return (
    <div className='lg:w-[50%] mx-auto md:border border-gray-300 my-3 h-[88vh] p-2 rounded-md'>
        
      {/* web items */}
      <div className=" h-full overflow-y-scroll gap-2 relative customScrollbar">
        {
          urls?.length <= 0 ? 
          <div className='w-full h-full flex items-center justify-center'>
            <h1 className='text-5xl font-bold text-black text-center  '>No Bookmarks found.</h1>
          </div>
           : 
        urls.map((url, index) => (
          <div key={index} className="border border-gray-300 mb-2  flex justify-between w-full bg-gray-300 p-3 rounded-md">
            
            <Link to={url.url} target="_blank" className="w-full   ">
              <h3 className="text-xl line-clamp-1 text-ellipsis break-words overflow-hidden w-[90%] lg:w-full">{url.title}</h3>
              <p className="text-base line-clamp-1 text-ellipsis break-words overflow-hidden w-[90%] lg:w-full    ">{url.url}</p>
            </Link>

            {/* buttons */}
            <div className="flex gap-3">
              <button 
                onClick={() => handleCopy(url.url, index)} 
                type="button" 
                className='text-2xl cursor-pointer'>
                {copiedIndex === index ? <GoIssueClosed /> : <BsCopy />}
              </button>
              <button onClick={()=> handleRemoveBookMark(url.url)} type="button" className='text-[26px] cursor-pointer'>
                <FaBookmark />
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
