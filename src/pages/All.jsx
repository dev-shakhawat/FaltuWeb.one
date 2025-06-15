import React, { useState } from 'react';
import { Link } from 'react-router'; // ✅ 'react-router' থেকে 'react-router-dom'
import { GoIssueClosed } from "react-icons/go";
import { BsCopy, BsBookmark } from "react-icons/bs";
import { urls } from '../webLinks';

export default function All() {

  const [copiedIndex, setCopiedIndex] = useState(null);
  const [bookmarkedIndex, setBookmarkedIndex] = useState(null);

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


  const handleBookmark = (index) => {
    setBookmarkedIndex(index);
    setTimeout(() => setBookmarkedIndex(null), 1500); // reset after 1 sec
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
              <button type="button" className='text-2xl cursor-pointer'>
                {bookmarkedIndex === index ? <GoIssueClosed /> : <BsBookmark />}
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
