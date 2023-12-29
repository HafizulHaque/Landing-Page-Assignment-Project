'use client'

import { useEffect, useState } from "react";
import Button from "../Button/Button"

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY > 0;
    setIsScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 h-100 w-full z-10 py-1 transition-all duration-300 ${isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'}`}>
      <div className="max-w-screen-lg mx-auto p-4 flex justify-between items-center">
        <ul className="flex space-x-8 list-none">
          <li><a href="#">Home</a></li>
          <li><a href="#" className="flex items-center space-x-1"><span>Model</span><img src={isScrolled ? `./expand_more_light.svg`:`./expand_more.svg`}/></a></li>
          <li><a href="#" className="flex items-center space-x-1"><span>Be a Partner</span><img src={isScrolled ? `./expand_more_light.svg`:`./expand_more.svg`}/></a></li>
          <li><a href="#" className="flex items-center space-x-1"><span>More</span><img src={isScrolled ? `./expand_more_light.svg`:`./expand_more.svg`}/></a></li>
        </ul>
        <div className="flex space-x-8 items-center">
          <a href="#">Login</a>
          <Button text="Join Our Discord" onClick={() => {}}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar