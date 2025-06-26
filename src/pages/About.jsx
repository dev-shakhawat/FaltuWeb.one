import React, { useState } from "react";

import { BsCopy } from "react-icons/bs";
import { GoIssueClosed } from "react-icons/go";
export default function About() {

  const [copied, setCopied] = useState(false);
  
  const handleCopy = ( ) => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);  
      })
      .catch((err) => {
        console.error("Copy failed:", err);
      });
  };
  
  return (
    <div className="lg:w-[50%] md:w-[80%]  mx-auto md:bg-gray-300 my-3 h-[88vh] p-2 rounded-md ">
      <div className="flex items-center justify-between pb-4 ">
        <h1 className="text-2xl font-semibold  mx-2 ">About</h1>
        <button onClick={handleCopy} type="button" className="text-2xl mr-3 cursor-pointer ">
             {copied ? <GoIssueClosed /> : <BsCopy />}  
        </button>

      </div>


      <p className="text-xl mx-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis
        nihil voluptatibus culpa at optio accusantium incidunt tenetur quia
        inventore, cum excepturi aliquam necessitatibus corporis tempora ab
        saepe corrupti voluptatem nemo illo. Placeat explicabo odio praesentium
        suscipit, doloribus, quibusdam molestias fugiat, voluptatim pariatur
        itaque reprehenderit ut officiis corrupti enim! Atque eveniet veritatis,
        consequatur quis cumque inventore adipisci in delectus iste possimus sit
        nobis. Maxime sint exercitationem nulla, veritatis asperiores
        reprehenderit consequatur quam culpa iusto odio itaque! Cupiditate autem
        iusto odit laboriosam soluta debitis, corporis hic voluptates eos ad
        placeat quam maxime unde, facere, magnam rem. Molestias ipsa labore
        ullam optio quo rem tempora cum cumque aliquid maiores obcaecati
        dignissimos animi rerum nam magni veniam, nemo, necessitatibus aperiam
        reprehenderit nobis facere magnam voluptatum dolore. Culpa, iste placeat
        reiciendis numquam assumenda harum odio doloremque laborum?
      </p>
    </div>
  );
}
