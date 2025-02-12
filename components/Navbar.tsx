"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#experience", text: "Experience" },
    { href: "#project", text: "Project" },
    { href: "#awards", text: "Awards" },
    { href: "#education", text: "Education" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    setIsOpen(false);
  };

  return (
    <nav className="bg-primary_bg border-white border-opacity-10 border-b  fixed w-full z-10 text-white">
      <div className="container mx-auto backdrop-blur-md">
        {/* full screen */}
        <div className="max-w-7xl mx-auto h-16 hidden md:flex justify-between items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.text}
            </a>
          ))}
        </div>
        {/* mobile screen */}
        <div className="max-w-7xl mx-auto h-16  md:hidden flex justify-between items-center ">
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
          <div className="md:hidden max-w-7xl text-center">
            <div className="mx-auto pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block hover:bg-white/20 py-2 rounded"
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
