import React, { useState } from 'react';
import { Link } from 'react-router';
import { GoIssueClosed } from "react-icons/go";
import { BsCopy, BsBookmark } from "react-icons/bs";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { urls } from '../webLinks';

export default function All() {

  const [copiedIndex, setCopiedIndex] = useState(null);
  const [bookmarkedIndex, setBookmarkedIndex] = useState(null);
  const [isBooked , setIsBooked] = useState(false)
  

  const handleCopy = (url, index) => {
    navigator.clipboard.writeText(url)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1500); // reset after 1 sec
      })
      .catch((err) => {
        console.error("Copy failed:", err);
      });
  };


  const handleBookmark = (url , index) => {
    let FaltuBookmarks = localStorage.getItem('FaltuBookMarks')
    if(FaltuBookmarks){
      FaltuBookmarks = JSON.parse(FaltuBookmarks)
      let BookMarkedAlready = FaltuBookmarks.filter((booked) => booked.url === url.url)
 
      if(BookMarkedAlready.length > 0){
        setIsBooked(true)
        setTimeout(() => {
          setIsBooked(false)
        }, 1000);
      }
      else{
        FaltuBookmarks.push(url)
        localStorage.setItem('FaltuBookMarks' , JSON.stringify(FaltuBookmarks))
        setBookmarkedIndex(index);
        setTimeout(() => setBookmarkedIndex(null), 1000);
      }
    }
    else{
      localStorage.setItem('FaltuBookMarks' , JSON.stringify([url]))
      setBookmarkedIndex(index);
      setTimeout(() => setBookmarkedIndex(null), 1000);
    }
  };

  return (
    <div className='w-[50%] mx-auto bg-gray-300 my-3 h-[88vh] p-2 rounded-md'>
        
      {/* web items */}
      <div className="grid grid-cols-1 h-full overflow-y-scroll gap-2 relative customScrollbar">
        {urls.map((url, index) => (
          <div key={index} className="flex justify-between w-full bg-white p-3 rounded-md">
            
            <Link to={url.url} target="_blank" className="w-full">
              <h3 className="text-xl">{url.title}</h3>
              <p className="text-base">{url.url}</p>
            </Link>

            {/* buttons */}
            <div className="flex gap-3">
              <button 
                onClick={() => handleCopy(url.url, index)} 
                type="button" 
                className='text-2xl cursor-pointer'>
                {copiedIndex === index ? <GoIssueClosed /> : <BsCopy />}
              </button>
              <button onClick={()=> handleBookmark(url , index)} type="button" className='text-2xl cursor-pointer'>
                {bookmarkedIndex === index ? <GoIssueClosed /> : localStorage.getItem('FaltuBookMarks') && JSON.parse(localStorage.getItem('FaltuBookMarks')).filter((booked) => booked.url === url.url).length > 0 && <BsBookmarkCheckFill /> || <BsBookmark />}
                
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
