/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className={`nav-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container flex justify-around items items-center">
        <div>
          <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-1">
            <img
              style={{ width: 150 }}
              src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_1280.png"
              alt="logo"
            />
            <span className="nav-name">NexonDev</span>
          </a>
        </div>
        <div className="nav-ul">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Pages</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">Post Layout</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
        </ul>
        </div>
        <div className="btn">
        <button>GET A QUOTE </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
