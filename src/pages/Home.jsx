import React from 'react'

// DATA
import { urls } from '../webLinks';

// icon
import { GoArrowRight } from "react-icons/go";

export default function Home() {
  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * urls.length);
    const randomUrl = urls[randomIndex];
    return randomUrl.url;
  };

  return (
    <div className='h-screen flex items-center justify-center overflow-hidden'>
      <div>
        <h1 className="text-center font-ubuntu font-bold text-5xl">FaltuWeb</h1>
        <p className="text-center font-ubuntu font-medium text-xl py-5">TAKE ME TO A USELESS FALTU WEBSITE</p>

        {/* ✅ Use <a> instead of <Link> */}
        <a href={handleRandom()} target="_blank" rel="noopener noreferrer" className="click">
          <h5 className="flex items-center gap-2">
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
        </a>
      </div>
    </div>
  );
}
