/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
  const [currentWord, setCurrentWord] = useState("BUSINESS");
  const [index, setIndex] = useState(0);
  const words = [
    "BUSINESS",
    "WEB DESIGN",
    "PROJECTS",
    "WEB DEVELOPMENT",
    "INNOVATION",
    "APP DEVELOPMENT",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(words[index]);
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div>
      <div className="container flex justify-around items items-center mt-14 py-2 px-10 gap-10">
        <div className="header" style={{ width: 600 }}>
          <h3>WE CREATE IDEAS</h3>
          <h1>
            HOW CAN WE HELP YOU IN{" "}
            <span className="dynamic-word">{currentWord}</span>
          </h1>
          <p>
            A unified platform that transcends auto and asset retail and
            finance, all powered by Artificial Intelligence.
          </p>
          <button className="btn-head">LEARN MORE </button>
        </div>
        <div className="header-image">
          <Image src="/images/meeting.jpg" alt="" width={450} height={0}/>
        </div>
      </div>
    </div>
  );
};
export default Header;
