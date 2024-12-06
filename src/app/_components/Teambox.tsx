"use client";
import Image from "next/image";
import { useState } from "react";

type TeamMember = {
  image: string; // Use this for imported images
  heading: string;
  title: string;
};

function Teambox({ teamData }: { teamData: TeamMember[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3; 

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamData.length - 1 : prevIndex - 1
    );
  };

  const visibleImages = [
    ...teamData.slice(currentIndex, currentIndex + visibleCount),
    ...teamData.slice(
      0,
      Math.max(0, currentIndex + visibleCount - teamData.length)
    ),
  ];

  return (
    <div className="carousel-container">
      <button onClick={handlePrev} className="carousel-button left">
        ←
      </button>
      <div className="carousel-images">
        {visibleImages.map((item, index) => (
          <div key={index} className="team-box">
            <Image
              src={item.image}
              alt={item.heading}
              width={200}
              height={0}
            />
            <h3>{item.heading}</h3>
            <h6>{item.title}</h6>
          </div>
        ))}
      </div>
      <button onClick={handleNext} className="carousel-button right">
        →
      </button>
    </div>
  );
}

export default Teambox;
