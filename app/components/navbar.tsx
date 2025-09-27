"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhone, FiUser, FiSearch } from "react-icons/fi";
import MegaMenuIndia from "./indiamenu";
import WorldMenu from "./worldmenu";
import SpecialityTours from "./specialitytours";
import CustomizedHolidays from "./customizedholidays";
import Inbound from "./inbound";
import Forex from "./forex";
export default function Navbar() {
  const [open, setOpen] = useState(false);
 const [indiaOpen, setIndiaOpen] = useState(false);
 const [worldOpen, setWorldOpen]= useState(false);
 const [specialityOpen, setSpecialityOpen]=useState(false);
 const [customizedOpen, setCustomizedOpen]=useState(false);
 const [inboundOpen, setInboundOpen]=useState(false);
 const [forexOpen, setForexOpen]=useState(false);
  const menu = [
   { name: "India", mega: true },
    { name: "World", mega:true },
    { name: "Speciality Tours", mega:true },
    { name: "Customized Holidays", mega:true },
    { name: "Corporate Travel" },
    { name: "Inbound", mega:true },
    { name: "Forex", mega:true },
    { name: "Gift Cards" },
    { name: "Contact Us" },
  ];

  return (
    <header className="w-full md:w-full relative">
      {/* ---------- Top Row ---------- */}
      <div className="bg-[#0c1b2a] text-white flex items-center justify-between 
                      px-4 sm:px-6 lg:px-26 h-16">
        {/* Logo + Search (desktop/tablet inline) */}
        <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/veena-world-logo.svg"
              alt="Veena World logo"
              width={140}
              height={40}
              priority
            />
          </Link>

          {/* Search hides on small screens */}
          <div className="hidden md:flex items-center w-[260px] lg:w-[320px] bg-white rounded-full px-4 py-1">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder='Search "Cherry Blossom"'
              className="w-full bg-transparent outline-none text-black placeholder-gray-400 text-sm"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4 sm:space-x-6 text-sm">
          <Link href="#" className="text-yellow-400 hover:underline hidden md:inline xs:inline">
            Travel Planner 2025
          </Link>

          <div className="hidden sm:flex items-center bg-blue-700 hover:bg-blue-800 rounded-full px-3 sm:px-4 py-1 cursor-pointer">
            <FiPhone className="mr-1" />
            <span className="font-semibold whitespace-nowrap">
              1800&nbsp;313&nbsp;5555
            </span>
          </div>

          <Link href="#" className="hidden sm:flex items-center hover:text-yellow-400">
            <FiUser className="mr-1" />
            Sign In
          </Link>

          {/* Mobile hamburger */}
        <button
  className="md:hidden flex flex-col justify-center space-y-1 relative z-50"
  onClick={() => setOpen(!open)}
  aria-label="Toggle menu"
>
  <span
    className={`w-6 h-0.5 bg-white transition-all duration-300 ${
      open ? "rotate-45 translate-y-1.5" : ""
    }`}
  />
  <span
    className={`w-6 h-0.5 bg-white transition-all duration-300 ${
      open ? "opacity-0" : ""
    }`}
  />
  <span
    className={`w-6 h-0.5 bg-white transition-all duration-300 ${
      open ? "-rotate-45 -translate-y-1.5" : ""
    }`}
  />
</button>

        </div>
      </div>

      {/* Mobile search below top row */}
      <div className="md:hidden bg-[#0c1b2a] px-4 pb-2">
        <div className="flex items-center bg-white rounded-full px-4 py-1">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder='Search "Cherry Blossom"'
            className="w-full bg-transparent outline-none text-black placeholder-gray-400 text-sm"
          />
        </div>
      </div>

      {/* ---------- Bottom Menu ---------- */}
      <nav
        className={`bg-[#10263e] text-white font-medium text-sm transition-all
          ${open ? "block" : "hidden"} md:block`}   onMouseLeave={() => setIndiaOpen(false)}
      >
        <ul className="hidden md:flex flex-col md:flex-row md:justify-center md:space-x-8 px-4 md:px-0 py-2 md:py-1">
        {menu.map((m) => (
  <li key={m.name} className="relative">
  {m.name === "India" ? (
    // --- INDIA MENU ---
    <>
      <div
        onMouseEnter={() => setIndiaOpen(true)}
        onMouseLeave={() => setIndiaOpen(false)}
      
      >
        <button
          className={`flex items-center gap-1 px-2 transition-colors 
           ${indiaOpen ? "bg-white text-black" : "hover:text-yellow-400"} `}
          aria-expanded={indiaOpen}
        >
          {m.name} 
  <span className="text-base">▾</span>


        </button>

        {indiaOpen && (
          <div className="absolute left-0 top-full w-full bg-white shadow-lg z-50">
            <MegaMenuIndia />
          </div>
        )}
      </div>
    </>
  ) : m.name === "World" ? (
    // --- WORLD MENU ---
    <>
      <div
        onMouseEnter={() => setWorldOpen(true)}
        onMouseLeave={() => setWorldOpen(false)}
      >
        <button
          className={`flex items-center gap-1 px-2 transition-colors 
            ${worldOpen ? "bg-white text-black" : "hover:text-yellow-400"}`}
          aria-expanded={worldOpen}
        >
          {m.name} <span className="text-base">▾</span>
        </button>

        {worldOpen && (
          <div className="absolute left-0 top-full w-full bg-white shadow-lg z-50">
            <WorldMenu />
          </div>
        )}
      </div>
    </>
  ) : m.name === "Speciality Tours" ? (
    // --- SPECIALITY TOURS MENU ---
    <>
      <div
        onMouseEnter={() => setSpecialityOpen(true)}
        onMouseLeave={() => setSpecialityOpen(false)}
      >
        <button
          className={`flex items-center gap-1 px-2  transition-colors 
            ${specialityOpen ? "bg-white text-black" : "hover:text-yellow-400"}`}
          aria-expanded={specialityOpen}
        >
          {m.name} <span className="text-base">▾</span>
        </button>

        {specialityOpen && (
          <div className="absolute left-0 top-full w-full bg-white shadow-lg z-50 ">
            <SpecialityTours />
          </div>
        )}
      </div>
    </>
  ) : m.name === "Customized Holidays" ? (
    // --- SPECIALITY TOURS MENU ---
    <>
      <div
        onMouseEnter={() => setCustomizedOpen(true)}
        onMouseLeave={() => setCustomizedOpen(false)}
      >
        <button
          className={`flex items-center gap-1 px-2  transition-colors 
            ${customizedOpen ? "bg-white text-black" : "hover:text-yellow-400"}`}
          aria-expanded={customizedOpen}
        >
          {m.name} <span className="text-base">▾</span>
        </button>

        {customizedOpen && (
          <div className="absolute left-0 top-full w-full bg-white shadow-lg z-50 ">
            <CustomizedHolidays />
          </div>
        )}
      </div>
    </>
  ) : m.name === "Inbound" ? (
    // --- SPECIALITY TOURS MENU ---
    <>
      <div
        onMouseEnter={() => setInboundOpen(true)}
        onMouseLeave={() => setInboundOpen(false)}
      >
        <button
          className={`flex items-center gap-1 px-2 transition-colors 
            ${inboundOpen ? "bg-white text-black" : "hover:text-yellow-400"}`}
          aria-expanded={inboundOpen}
        >
          {m.name} <span className="text-base">▾</span>
        </button>

        {inboundOpen && (
          <div className="absolute right-80 top-full w-full bg-white shadow-lg z-50 ">
            <Inbound />
          </div>
        )}
      </div>
    </>
  ) : m.name === "Forex" ? (

    <>
      <div
        onMouseEnter={() => setForexOpen(true)}
        onMouseLeave={() => setForexOpen(false)}
      >
        <button
          className={`flex items-center gap-1 px-2 transition-colors 
            ${forexOpen ? "bg-white text-black" : "hover:text-yellow-400"}`}
          aria-expanded={forexOpen}
        >
          {m.name} <span className="text-base">▾</span>
        </button>

        {forexOpen && (
          <div className="absolute right-100 top-full w-full bg-white shadow-lg z-50 ">
            <Forex/>
          </div>
        )}
      </div>
    </>
  ) 
  : (
    // --- NORMAL LINK ---
    <Link href="#" className="hover:text-yellow-400 px-2 ">
      {m.name}
    </Link>
  )}
</li>

  ))}
        </ul>

      <div className={`${open ? "block" : "hidden"} md:hidden border-t border-gray-800`}>
  <ul className="flex flex-col px-4 py-3 space-y-2">
    {menu.map((m) => (
      <li key={m.name}>
        {/* If menu item has mega dropdown */}
        {m.name === "India" ? (
          <>
            <button
              className="w-full text-left px-2 py-2 rounded flex justify-between items-center hover:text-yellow-400"
              onClick={() => {
                setIndiaOpen(!indiaOpen);
                setWorldOpen(false);
                setSpecialityOpen(false);
              }}
              aria-expanded={indiaOpen}
            >
              {m.name} <span className="text-2xl">{indiaOpen ? "▴" : "▾"}</span>
            </button>

            {indiaOpen && (
              <div className="pl-4 mt-2 border-l border-gray-300">
                <MegaMenuIndia />
              </div>
            )}
          </>
        ) : m.name === "World" ? (
          <>
            <button
              className="w-full text-left px-2 py-2 rounded flex justify-between items-center hover:text-yellow-400"
              onClick={() => {
                setWorldOpen(!worldOpen);
                setIndiaOpen(false);
                setSpecialityOpen(false);
              }}
              aria-expanded={worldOpen}
            >
              {m.name} <span className="text-2xl">{worldOpen ? "▴" : "▾"}</span>
            </button>

            {worldOpen && (
              <div className="pl-4 mt-2 border-l border-gray-300">
                <WorldMenu />
              </div>
            )}
          </>
        ) : m.name === "Speciality Tours" ? (
          <>
            <button
              className="w-full text-left px-2 py-2 rounded flex justify-between items-center hover:text-yellow-400"
              onClick={() => {
                setSpecialityOpen(!specialityOpen);
                setIndiaOpen(false);
                setWorldOpen(false);
              }}
              aria-expanded={specialityOpen}
            >
              {m.name}{" "}
              <span className="text-2xl">{specialityOpen ? "▴" : "▾"}</span>
            </button>

            {specialityOpen && (
              <div className="pl-4 mt-2 border-l border-gray-300">
                <SpecialityTours />
              </div>
            )}
          </>
        ): m.name === "Customized Holidays" ? (
          <>
            <button
              className="w-full text-left px-2 py-2 rounded flex justify-between items-center hover:text-yellow-400"
              onClick={() => {
                setCustomizedOpen(!customizedOpen);
                setIndiaOpen(false);
                setWorldOpen(false);
                setSpecialityOpen(false)
              }}
              aria-expanded={customizedOpen}
            >
              {m.name}{" "}
              <span className="text-2xl">{customizedOpen ? "▴" : "▾"}</span>
            </button>

            {customizedOpen && (
              <div className="pl-4 mt-2 border-l border-gray-300">
                <CustomizedHolidays />
              </div>
            )}
          </>
        ) : m.name === "Inbound" ? (
          <>
            <button
              className="w-full text-left px-2 py-2 rounded flex justify-between items-center hover:text-yellow-400"
              onClick={() => {
                setInboundOpen(!inboundOpen);
                setIndiaOpen(false);
                setWorldOpen(false)
                setSpecialityOpen(false);
                setCustomizedOpen(false);
              }}
              aria-expanded={inboundOpen}
            >
              {m.name} <span className="text-2xl">{inboundOpen ? "▴" : "▾"}</span>
            </button>

            {inboundOpen && (
              <div className="pl-4 mt-2 border-l border-gray-300">
                <Inbound />
              </div>
            )}
          </>
        ) : m.name === "Forex" ? (
          <>
            <button
              className="w-full text-left px-2 py-2 rounded flex justify-between items-center hover:text-yellow-400"
              onClick={() => {
                setForexOpen(!forexOpen);
                setIndiaOpen(false);
                setWorldOpen(false)
                setSpecialityOpen(false);
                setCustomizedOpen(false);
                setInboundOpen(false);
              }}
              aria-expanded={forexOpen}
            >
              {m.name} <span className="text-2xl">{forexOpen ? "▴" : "▾"}</span>
            </button>

            {forexOpen && (
              <div className="pl-4 mt-2 border-l border-gray-300">
                <Forex/>
              </div>
            )}
          </>
        ) 

         : (
          <Link
            href="#"
            className="block px-2 py-2 rounded hover:text-yellow-400"
          >
            {m.name}
          </Link>
        )}
      </li>
    ))}
  </ul>
</div>

      </nav>
    </header>
  );
}
