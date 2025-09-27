"use client";

import React, { useState } from "react";
import Link from "next/link";

const TABS = [
  "Africa",
  "America",
  "Asia",
  "Australia & New Zealand",
  "Europe",
  "Middle East",
  "Antarctica",
];

export default function WorldMenu() {
  const [activeTab, setActiveTab] = useState<string>(TABS[0]);
const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const CONTENT: Record<string, React.JSX.Element> = {
    Africa: (
      <>
        {/* Column 1 */}
        <div>
          <Link href="#" className="text-xs md:text-sm font-semibold text-blue-600 hover:underline">
            All of Africa &nbsp;›
          </Link>

          <h4 className="text-sm font-semibold mt-3">Egypt</h4>
          <div className="w-12 h-[1px] bg-gray-200 my-2" />
          <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1">
            {["Alexandria", "Aswan", "Cairo", "Hurghada", "Luxor", "Nile Cruise"].map((city) => (
              <li key={city}>
                <Link href="#" className="hover:text-blue-600 text-sm">{city}</Link>
              </li>
            ))}
          </ul>

          <h4 className="text-sm font-semibold mt-4">Kenya</h4>
          <div className="w-12 h-[1px] bg-gray-200 my-2" />
          <ul className=" flex flex-wrap gap-x-4 gap-y-2 ml-1">
            <li><Link href="#" className="hover:text-blue-600 text-sm">Masai Mara</Link></li>
          </ul>

          <h4 className="text-sm font-semibold mt-4">Mauritius</h4>
          <div className="w-12 h-[1px] bg-gray-200 my-2" />
          <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1">
            <li><Link href="#" className="hover:text-blue-600 text-sm">Port Louis</Link></li>
          </ul>

          <h4 className="text-sm font-semibold mt-4">Seychelles</h4>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-xs md:text-sm font-semibold">South Africa</h4>
          <div className="w-12 h-[1px] bg-gray-200 my-2" />
          <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 md:ml-1 text-[12px] md:text-sm">
            {[
              "Cape Town",
              "George",
              "Johannesburg",
              "Knysna",
              "Mossel Bay",
              "Oudtshoorn",
              "Pilanesberg National Park",
              "Port Elizabeth (Gqeberha)",
              "Stellenbosch",
              "Sun City",
            ].map((place) => (
              <li key={place}>
                <Link href="#" className="hover:text-blue-600 text-sm">{place}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-xs md:text-sm font-semibold">Tanzania</h4>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-xs md:text-sm font-semibold">Zimbabwe</h4>
          <div className="w-12 h-[1px] bg-gray-200 my-2" />
          <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 text-[12px] md:text-sm">
            <li><Link href="#" className="hover:text-blue-600 text-sm">Victoria Falls</Link></li>
          </ul>
        </div>
      </>
    ),

    America: (
      <div className="col-span-4">
        <p className="text-gray-600 text-sm">America destinations coming soon...</p>
      </div>
    ),

    Asia: (
      <div className="col-span-4">
        <p className="text-gray-600 text-sm">Asia destinations coming soon...</p>
      </div>
    ),

    "Australia & New Zealand": (
      <div className="col-span-4">
        <p className="text-gray-600 text-sm">Australia &amp; New Zealand destinations coming soon...</p>
      </div>
    ),

    Europe: (
      <div className="col-span-4">
        <p className="text-gray-600 text-sm">Europe destinations coming soon...</p>
      </div>
    ),

    "Middle East": (
      <div className="col-span-4">
        <p className="text-gray-600 text-sm">Middle East destinations coming soon...</p>
      </div>
    ),

    Antarctica: (
      <div className="col-span-4">
        <p className="text-gray-600 text-sm">Antarctica destinations coming soon...</p>
      </div>
    ),
  };

  return (
    <div
      className=" left-0 w-full md:w-[800] bg-white text-black shadow-lg border-t border-gray-200 z-50"
      role="region"
      aria-label="World mega menu"
    >
      <div className="max-w-7xl mx-auto px-8 py-4 ">
        {/* Tabs (Left Column) */}
        <div className="hidden md:grid grid-cols-5 gap-3 text-xs md:text-sm leading-6 ">
        <nav
          className="col-span-1 pr-4 border-r border-gray-200"
          role="tablist"
          aria-orientation="vertical"
        >
          <ul className="space-y-2">
            {TABS.map((tab) => {
              const active = tab === activeTab;
              return (
                <li key={tab}>
                  <button
                    role="tab"
                    aria-selected={active}
                    onMouseEnter={() => setActiveTab(tab)}
                    onFocus={() => setActiveTab(tab)}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full text-left px-3 py-2 flex items-center justify-between rounded transition-colors
                      ${active ? "bg-white text-black font-semibold shadow-sm" : "text-gray-600 hover:text-blue-600"}`}
                  >
                    <span className={`${active ? "text-blue-700" : ""}`}>{tab}</span>
                    <span className="text-gray-300">›</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
       

        {/* Content (Right Side) */}
        <div className="col-span-4 pl-4">
          <div className="grid grid-cols-4 gap-6 max-h-[420px] overflow-y-auto pr-2">
            {CONTENT[activeTab]}
          </div>
        </div>
</div>



    {/* --- Mobile: Accordion style --- */}
   <div className="block md:hidden">
  <div className="divide-y divide-gray-200">
    {TABS.map((tab) => {
      const isOpen = openAccordion === tab;
      return (
        <div key={tab} className="py-2">
          <button
            onClick={() => setOpenAccordion(isOpen ? null : tab)}
            className="w-full flex justify-between items-center px-3 py-2 text-left text-gray-700 font-medium hover:text-blue-600"
          >
            <span className={isOpen ? "text-blue-700 font-semibold" : ""}>
              {tab}
            </span>
            <span
              className={`transform transition-transform ${
                isOpen ? "rotate-90 text-blue-600" : "rotate-0 text-gray-400"
              }`}
            >
              ›
            </span>
          </button>

          {/* Accordion content */}
          {isOpen && (
            <div className="mt-2 grid grid-cols-1 gap-3 pl-3">
              {CONTENT[tab]}
            </div>
          )}
        </div>
      );
    })}
  </div>
</div>

      </div>
    </div>
  );
}
