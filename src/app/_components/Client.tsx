"use client";
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import reviews from "../data/client.json";

function Client() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="client-container">
      <div className="client">
        <div className="client-head">
          <h3>TESTMONIAL</h3>
          <h1>WHAT OUR CLIENTS SAY'S</h1>
          <p>
            Discover how our solutions have helped our clients achieve success
            and exceed their goals.
          </p>
        </div>

        <div
          style={{
            textAlign: "center",
            position: "relative",
            maxWidth: "550px",
            margin: "100px 0",
          }}
        >
          {/* Review Box */}
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 style={{ fontWeight: 700 }}>{reviews[currentIndex].name}</h2>
            <h4 style={{ color: "purple", margin: "5px 0" }}>
              {reviews[currentIndex].title}
            </h4>
            <p>{reviews[currentIndex].content}</p>
          </div>

          {/* Arrows */}
          <button
            onClick={handlePrev}
            style={{
              position: "absolute",
              top: "50%",
              left: "-50px",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "40px",
            }}
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            style={{
              position: "absolute",
              top: "50%",
              right: "-50px",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "40px",
            }}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Client;
