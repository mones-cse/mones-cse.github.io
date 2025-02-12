"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('one');

  const navLinks = [
    { id:'one', href: "#home", text: "Home" },
    { id:'two', href: "#about", text: "About" },
    { id:'three', href: "#experience", text: "Experience" },
    { id:'four', href: "#project", text: "Project" },
    { id:'five', href: "#awards", text: "Awards" },
    { id:'six', href: "#education", text: "Education" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string,id:string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navbarHeight = 64; // Reduced from 64 to 48 for better positioning
      const elementPosition = (targetElement as HTMLElement).offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setSelected(id)
    setIsOpen(false);
  };

    const getPositionFromId = (id:string) => {
    const index = navLinks.findIndex(nav => nav.id === id);
    return `${index * 100}%`;
  };

  return (
    <nav className="bg-primary_bg/80 border-white border-opacity-10 border-b  fixed w-full z-10 text-white backdrop-blur-md">
      <div className="container mx-auto ">
        <motion.div
        className="absolute bg-white rounded-md h-[2px] bottom-0 hidden md:block"
        style={{
          width: `calc(100% / ${navLinks.length})`,
           WebkitMask: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"
        }}
        animate={{
          x: getPositionFromId(selected),
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
        />
        {/* full screen */}
        <div className="max-w-7xl mx-auto h-16 hidden md:flex justify-around items-center gap-4">
          {navLinks.map((link) => (
            <div key={link.href} className="w-full text-center">
              <a href={link.href} onClick={(e) => handleLinkClick(e, link.href,link.id)}>
                  {link.text}
              </a>
            </div>
          ))}
        </div>
        {/* mobile screen */}
        <div className="max-w-7xl mx-auto h-16  md:hidden flex justify-between items-center  ">
          <Link href="#home" className="text-xl font-bold">
            Logo
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? (
              <AiOutlineClose className="h-6 w-6" />
            ) : (
              <AiOutlineMenu className="h-6 w-6" />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden max-w-7xl text-center ">
            <div className="mx-auto pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href,link.id)}
                  className={`block hover:bg-white/20 py-2 rounded ${selected === link.id ? 'bg-white/20' : ''}`}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}