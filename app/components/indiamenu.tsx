"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";

const TABS = [
  "North India",
  "South India",
  "East & North East India",
  "Rajasthan, West & Central India",
];

export default function MegaMenuIndia() {
  const [activeTab, setActiveTab] = useState<string>(TABS[0]);
const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const renderList = (heading: string, items: string[]) => (
    <div>
      <h3 className="text-sm font-semibold text-gray-800">{heading}</h3>
      <div className="w-10 h-[1px] bg-gray-200 my-2" />
      <ul className="space-y-2 ml-1">
        {items.map((it) => (
          <li key={it}>
            <Link href="#" className="text-sm text-gray-700 hover:text-blue-600">
              {it}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const CONTENT: Record<string, React.ReactElement> = {
    "North India": (
      <>
        {/* Column 1 */}
        <div className="ml-0 md:ml-0">
          <Link href="#" className="text-xs md:text-sm  text-blue-600 hover:underline">
            All of North India 
          </Link>

          <div className="mt-3">
            <h4 className="text-xs md:text-sm font-semibold">Delhi</h4>

            <h4 className="text-xs md:text-sm font-semibold mt-4">Himachal Pradesh</h4>
            <div className="w-8 h-[1px] bg-gray-200 my-2" />
            <ul className="flex flex-wrap gap-x-4 gap-y-2 md:ml-1 text-[12px] md:text-sm">
              <li><Link href="#" className="text-[12px] md:text-sm hover:text-blue-600">Chandrataal</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Dalhousie</Link></li>
              <li><Link href="#" className="text-[12px] md:text-sm hover:text-blue-600">Dharamshala</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Kaza</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Manali</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Shimla</Link></li>
              <li><Link href="#" className="text-[12px] md:text-sm hover:text-blue-600">Spiti Valley</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 2 */}
        <div className="ml-0 md:ml-0">
          <h4 className="text-xs md:text-sm font-semibold">Kashmir</h4>
          <div className="w-8 h-[1px] bg-gray-200 my-2" />
          <ul className="flex flex-wrap gap-x-4 gap-y-2 md:ml-1 text-[12px] md:text-sm">
            <li><Link href="#" className="hover:text-blue-600">Gulmarg</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Pahalgam</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Sonmarg</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Srinagar</Link></li>
          </ul>

          <h4 className="text-xs md:text-sm font-semibold mt-4">Leh-Ladakh</h4>
          <div className="w-8 h-[1px] bg-gray-200 my-2 "/>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 md:ml-1 text-[12px] md:text-sm">
            <li><Link href="#" className="hover:text-blue-600">Kargil</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Leh</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Nubra Valley</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Pangong Tso</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Turtuk</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="ml-0 md:ml-0">
          <Link href="#" className="text-xs md:text-sm font-semibold hover:text-blue-600 block mb-2">Amritsar</Link>
          <Link href="#" className="text-xs md:text-sm font-semibold hover:text-blue-600 block mb-3">Chandigarh</Link>

          <h4 className="text-xs md:text-sm font-semibold">Punjab &amp; Haryana</h4>
          <div className="w-8 h-[1px] bg-gray-200 my-2" />
          <ul className="flex flex-wrap gap-x-4 gap-y-2 md:ml-1 text-[12px] md:text-sm">
            <li><Link href="#" className="hover:text-blue-600">Kurukshetra</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Panipat</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="ml-0 md:ml-0">
          <h4 className="text-xs md:text-sm font-semibold">Uttarakhand</h4>
          <div className="w-8 h-[1px] bg-gray-200 my-2" />
          <ul className="flex flex-wrap gap-x-4 gap-y-2 md:ml-1 text-[12px] md:text-sm">
            <li><Link href="#" className="hover:text-blue-600">Jim Corbett Park</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Haridwar</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Mussoorie</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Nainital</Link></li>
          </ul>

          <h4 className="text-xs md:text-sm font-semibold mt-4">Uttar Pradesh</h4>
          <div className="w-8 h-[1px] bg-gray-200 my-2" />
          <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 text-[12px] md:text-sm">
            <li><Link href="#" className="hover:text-blue-600">Agra</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Ayodhya</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Fatehpur Sikri</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Jhansi</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Lucknow</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Mathura</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Prayagraj</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Sarnath</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Varanasi</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Vrindavan</Link></li>
          </ul>
        </div>
      </>
    ),

    "South India": (
      <>
        <div className="ml-0 md:ml-0">
          <h4 className="text-sm font-semibold">Kerala</h4>
          <div className="w-8 h-[1px] bg-gray-200 my-2" />
          <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1">
            <li><Link href="#" className="hover:text-blue-600">Munnar</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Alleppey</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Kumarakom</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Thekkady</Link></li>
          </ul>
        </div>

        <div className="ml-0 md:ml-0">
          <h4 className="text-sm font-semibold">Tamil Nadu</h4>
          <div className="w-8 h-[1px] bg-gray-200 my-2" />
          <ul className="flex flex-wrap gap-x-4 gap-y-2 md:ml-1">
            <li><Link href="#" className="hover:text-blue-600">Chennai</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Ooty</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Kodaikanal</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Madurai</Link></li>
          </ul>
        </div>

        <div className="ml-0 md:ml-0">
          <h4 className="text-sm font-semibold">Karnataka</h4>
          <div className="w-8 h-[1px] bg-gray-200 my-2" />
          <ul className="flex flex-wrap gap-x-4 gap-y-2 md:ml-1">
            <li><Link href="#" className="hover:text-blue-600">Bengaluru</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Coorg</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Hampi</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Mysore</Link></li>
          </ul>
        </div>

        <div className="ml-0 md:ml-0">
          <h4 className="text-sm font-semibold">Goa</h4>
          <div className="w-8 h-[1px] bg-gray-200 my-2" />          <ul className="flex flex-wrap gap-x-4 gap-y-2 md:ml-1">
            <li><Link href="#" className="hover:text-blue-600">North Goa</Link></li>
            <li><Link href="#" className="hover:text-blue-600">South Goa</Link></li>
          </ul>
        </div>
      </>
    ),

    "East & North East India": (
      <>
        <div>
          <h4 className="text-xs md:text-sm font-semibold">Sikkim &amp; Darjeeling</h4>
          <div className="w-8 h-[1px] bg-gray-200 my-2" />
          <ul className="flex flex-wrap gap-x-4 gap-y-2 md:ml-1 text-[12px] md:text-sm">
            <li><Link href="#" className="hover:text-blue-600">Gangtok</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Pelling</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Darjeeling</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs md:text-sm font-semibold">Assam</h4>
          <div className="w-8 h-[1px] bg-gray-200 my-2" />
          <ul className="flex flex-wrap gap-x-4 gap-y-2 md:ml-1 text-[12px] md:text-sm">
            <li><Link href="#" className="hover:text-blue-600">Kaziranga</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Guwahati</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs md:text-sm font-semibold">Meghalaya</h4>
          <div className="w-8 h-[1px] bg-gray-200 my-2" />
          <ul className="flex flex-wrap gap-x-4 gap-y-2 md:ml-1 text-[12px] md:text-sm">
            <li><Link href="#" className="hover:text-blue-600">Shillong</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Cherrapunji</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs md:text-sm font-semibold">Arunachal / Nagaland</h4>
          <div className="w-8 h-[1px] bg-gray-200 my-2" />
          <ul className="flex flex-wrap gap-x-4 gap-y-2 md:ml-1">
            <li><Link href="#" className="hover:text-blue-600">Tawang</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Ziro</Link></li>
          </ul>
        </div>
      </>
    ),

    "Rajasthan, West & Central India": (
      <>
        <div>
          <h4 className="text-sm font-semibold">Rajasthan</h4>
          <div className="w-8 h-[1px] bg-gray-200 my-2" />
          <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 text-[12px] md:text-sm">
            <li><Link href="#" className="hover:text-blue-600">Jaipur</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Jodhpur</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Udaipur</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Jaisalmer</Link></li>
          </ul>
        </div>

        <div className="ml-0">
          <h4 className="text-sm font-semibold">Gujarat</h4>
          <div className="w-8 h-[1px] bg-gray-200 my-2" />
          <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 text-[12px] md:text-sm">
            <li><Link href="#" className="hover:text-blue-600">Ahmedabad</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Gir</Link></li>
          </ul>
        </div>

        <div className="ml-0">
          <h4 className="text-sm font-semibold">Madhya Pradesh</h4>
          <div className="w-8 h-[1px] bg-gray-200 my-2" />
          <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 text-[12px] md:text-sm">
            <li><Link href="#" className="hover:text-blue-600">Khajuraho</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Pachmarhi</Link></li>
          </ul>
        </div>

        <div className="ml-0">
          <h4 className="text-sm font-semibold">Maharashtra</h4>
          <div className="w-8 h-[1px] bg-gray-200 my-2" />
          <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 text-[12px] md:text-sm">
            <li><Link href="#" className="hover:text-blue-600">Mumbai</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Pune</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Aurangabad</Link></li>
          </ul>
        </div>
      </>
    ),
  };

  return (
  

    <div
  className="left-0 w-full md:w-[800] bg-white text-black shadow-lg border-t border-gray-200 z-50"
  role="region"
  aria-label="India mega menu"
>
  <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
    {/* --- Desktop: Option 1 (Vertical tabs + right content) --- */}
    <div className="hidden md:grid grid-cols-5 gap-3 text-xs md:text-sm leading-6">
      {/* Tabs vertical */}
      <nav
        className="col-span-1 pr-1 border-r border-gray-200"
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
                  <span className={`${active ? "text-blue-700 " : ""}`}>{tab}</span>
                  <span className="text-gray-300">›</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Content right side */}
      <div className="col-span-4 pl-2">
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
