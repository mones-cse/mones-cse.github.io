"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#project", text: "Project" },
    { href: "#skill", text: "Skill" },
    { href: "#experience", text: "Experience" },
    { href: "#education", text: "Education" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full ">
      <div className="container mx-auto ">
        {/* full screen */}
        <div className="max-w-7xl mx-auto h-16 hidden md:flex justify-between items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gray-600"
            >
              {link.text}
            </Link>
          ))}
        </div>
        {/* mobile screen */}
        <div className="max-w-7xl mx-auto h-16  md:hidden flex justify-between items-center">
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
                <Link
                  key={link.href}
                  href={link.href}
                  className="block hover:bg-gray-100  py-2 rounded"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
{
  /* <div className="container mx-auto">
<div className="max-w-7xl mx-auto px-4">
  <div className="flex justify-between h-16">
    <div className="flex items-center md:hidden">
      <Link href="#home" className="text-xl font-bold">
        Logo
      </Link>
    </div>

    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden p-2"
    >
      {isOpen ? (
        <AiOutlineClose className="h-6 w-6" />
      ) : (
        <AiOutlineMenu className="h-6 w-6" />
      )}
    </button>

    <div className="hidden md:flex items-center space-x-4">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:text-gray-600"
        >
          {link.text}
        </Link>
      ))}
    </div>
  </div>
</div>
{isOpen && (
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="block hover:bg-gray-100 px-3 py-2 rounded"
        >
          {link.text}
        </Link>
      ))}
    </div>
  </div>
)}
</div> */
}
