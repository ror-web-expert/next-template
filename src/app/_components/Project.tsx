// import Link from "next/link";
"use client";
import Projectbox from "./Projectbox";
import office1 from "../images/office1.webp";
import office2 from "../images/office2.webp";
import office3 from "../images/office3.webp";
import office4 from "../images/office4.jpg";
import office5 from "../images/office5.png";
import office7 from "../images/office7.webp";
import office8 from "../images/office8.webp";
import { SetStateAction, useState } from "react";

function Project() {

  const [activeTab, setActiveTab] = useState("All"); 

  const tabs = [
    "All",
    "Web Design",
    "Web Development",
    "Branding",
    "Mobile App",
    "SEO",
  ];

  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="service-heading">
        <h3>PROJECTS</h3>
        <h1>OUR PORTFOLIO</h1>
      </div>

      <div style={{ display: "flex", gap: "15px" , justifyContent:"center" }}>
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => handleTabClick(tab)}
            style={{
              padding: "10px 20px",
              borderRadius: "28px",
              cursor: "pointer",
              backgroundColor: activeTab === tab ? "#6a5acd" : "transparent",
              color: activeTab === tab ? "white" : "black", 
              fontWeight: activeTab === tab ? "bold" : "normal",
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="project-box">
        <Projectbox image={office1} />
        <Projectbox image={office2} />
        <Projectbox image={office3} />
        <Projectbox image={office4} />
        <Projectbox image={office5} />
        <Projectbox image={office8} />
        <Projectbox image={office7} />
        <Projectbox image={office2} />
      </div>
    </div>
  );
}

export default Project;
