/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import laptop from "../images/laptop.png"
import { useState , useEffect } from "react";

const Header = () => {
  
  const [currentWord, setCurrentWord] = useState('BUSINESS');
  const [index, setIndex] = useState(0);
  const words = ['BUSINESS', 'WEB DESIGN', 'PROJECTS', 'WEB DEVELOPMENT', 'INNOVATION' , 'APP DEVELOPMENT'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(words[index]);
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); 

    return () => clearInterval(interval); 
  }, [index]);

  return (
    <div>
      <div className='container flex justify-around items items-center mt-8 py-2 px-10'>
        <div className="header" style={{ width: 600 }}>
          <h6>WE CREATE IDEAS</h6>
          <h1>
            HOW CAN WE HELP YOUR <span className="dynamic-word">{currentWord}</span>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus esse reprehenderit doloribus.
          </p>
          <button className="btn-head">LEARN MORE </button>
        </div>
        <div className="header-image">
          <Image src={laptop} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Header;
