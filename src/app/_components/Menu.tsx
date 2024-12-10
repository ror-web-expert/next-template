/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Menu = () => {
  const [currentWord, setCurrentWord] = useState("BUSINESS");
  const [index, setIndex] = useState(0);
  const words = [
    "BUSINESS",
    "PROJECTS",
    "WEB DESIGN",
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
    <div className="container py-5">
      {/* Flexbox Row */}
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6">
          <h3 className="text-muted ">WE CREATE IDEAS</h3>
          <h1 className="fw-bolder">
            HOW CAN WE HELP YOU IN{" "}
            <span className="text-warning">{currentWord}</span>
          </h1>
          <p className="text-muted">
            A unified platform that transcends auto and asset retail and
            finance, all powered by Artificial Intelligence.
          </p>
          <button className="btn btn-lg" style={{backgroundColor:"#6969E7", color:"#fff", border:"none", borderRadius:"32px", padding:"15px 25px"}}>LEARN MORE</button>
        </div>

        {/* Image Section */}
        <div className="col-md-6">
          <Image src="/images/meeting.jpg" alt="" width={450} height={0} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
