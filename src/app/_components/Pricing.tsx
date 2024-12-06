"use client"
import { SetStateAction, useState } from "react";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("standard");

  const handlePlanClick = (plan: SetStateAction<string>) => {
    setSelectedPlan(plan);
  };

  return (
    <div id="plans">
        <div className="price-heading">
        <h3>PRICING</h3>
        <h1>CHOOSE PLAN</h1>
      </div>
    <div className="pricing-container">
      <div
        className={`pricing-card ${selectedPlan === "basic" ? "active" : ""}`}
        onClick={() => handlePlanClick("basic")}
      >
        <h2>Basic Plan</h2>
        <h4>
            <span>$49</span>/Month
          </h4>
          <p>In Basic plan we provide these features.</p>
          <hr />
          <ul>
          <li>Graphic Design</li>
          <li>Web Design</li>
          <li>UI/UX</li>
          <li>HTML/CSS</li>
          <li>SEO Marketing</li>
          <li>Business Analysis</li>
        </ul>
        <button>Start Now</button>
      </div>

      <div
        className={`pricing-card ${selectedPlan === "standard" ? "active" : ""}`}
        onClick={() => handlePlanClick("standard")}
      >
        <h2>Standard Plan</h2>
        <h4>
            <span>$199</span>/Month
          </h4>
          <p>In Standard plan we provide these features.</p>
          <hr />
        <ul>
          <li>Graphic Design</li>
          <li>Web Design</li>
          <li>UI/UX</li>
          <li>HTML/CSS</li>
          <li>SEO Marketing</li>
          <li>Business Analysis</li>
        </ul>
        <button>Start Now</button>
      </div>

      <div
        className={`pricing-card ${selectedPlan === "premium" ? "active" : ""}`}
        onClick={() => handlePlanClick("premium")}
      >
        <h2>Premium Plan</h2>
        <h4>
            <span>$149</span>/Month
          </h4>
          <p>In Premium plan we provide these features.</p>
          <hr />
        <ul>
          <li>Graphic Design</li>
          <li>Web Design</li>
          <li>UI/UX</li>
          <li>HTML/CSS</li>
          <li>SEO Marketing</li>
          <li>Business Analysis</li>
        </ul>
        <button>Start Now</button>
      </div>
    </div>
    </div>
  );
};

export default Pricing;
