"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const TABS = [
  "Africa",
  "America",
  "Asia",
  "Australia & New Zealand",
  "Europe",
  "Middle East",
  "Antarctica",
];

interface Destination {
  id: string;
  name: string;
  imageUrl: string;
}

const destinations: Destination[] = [
  { id: '1', name: 'Europe', imageUrl: '/inbound-1.webp' },
  { id: '2', name: 'South East Asia', imageUrl: '/inbound-2.webp' },
  { id: '3', name: 'America', imageUrl: '/inbound-3.avif' },
  { id: '4', name: 'Africa', imageUrl: '/inbound-4.avif' },
  { id: '5', name: 'Australia New Zealand', imageUrl: '/inbound-5.webp' },
  { id: '6', name: 'Japan China Krea Taiwan', imageUrl: '/inbound-6.webp' },
 
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
          <ul className="flex flex-wrap lg:flex-col lg:space-y-1 gap-x-4 gap-y-1 ml-1 text-[10px] md:text-sm font-normal">
            {["Alexandria", "Aswan", "Cairo", "Hurghada", "Luxor", "Nile Cruise"].map((city) => (
              <li key={city}>
                <Link href="#" className="hover:text-blue-600 text-sm">{city}</Link>
              </li>
            ))}
          </ul>

          <h4 className="text-sm font-semibold mt-4">Kenya</h4>
          <div className="w-12 h-[1px] bg-gray-200 my-2" />
          <ul className=" flex flex-wrap gap-x-4 gap-y-2 ml-1 text-[10px] md:text-sm font-normal">
            <li><Link href="#" className="hover:text-blue-600 text-sm">Masai Mara</Link></li>
          </ul>

          <h4 className="text-sm font-semibold mt-4">Mauritius</h4>
          <div className="w-12 h-[1px] bg-gray-200 my-2" />
          <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 text-[10px] md:text-sm font-normal">
            <li><Link href="#" className="hover:text-blue-600 text-sm">Port Louis</Link></li>
          </ul>

          <h4 className="text-sm font-semibold mt-4">Seychelles</h4>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-xs md:text-sm font-semibold">South Africa</h4>
          <div className="w-12 h-[1px] bg-gray-200 my-2" />
          <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 md:ml-1 text-[10px] md:text-sm font-normal">
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
          <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 text-[10px] md:text-sm font-normal">
            <li><Link href="#" className="hover:text-blue-600 text-sm">Victoria Falls</Link></li>
          </ul>
        </div>
      </>
    ),

America: (
  <>
    
      {/* Column 1 */}
      <div>
        <Link href="#" className="text-xs md:text-sm font-semibold text-blue-600 hover:underline ">
          All of America &nbsp;›
        </Link>
<br/>
        <Link href="#" className="text-xs md:text-sm font-semibold text-blue-600 hover:underline">
          All of South America &nbsp;›
        </Link>
        <h4 className="text-sm font-semibold mt-3">Argentina</h4>
        <h4 className="text-sm font-semibold mt-3">Brazil</h4>
        <div className="w-12 h-[1px] bg-gray-200 my-2" />
        <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 text-[10px] md:text-sm font-normal">
          {["Rio De Janerio"].map((place) => (
            <li key={place}>
              <Link href="#" className="hover:text-blue-600 text-sm">{place}</Link>
            </li>
          ))}
        </ul>

        <h4 className="text-sm font-semibold mt-4">Canada</h4>
        <div className="w-12 h-[1px] bg-gray-200 my-2" />
        <ul className=" flex flex-wrap lg:flex-col lg:space-y-1 gap-x-4 gap-y-1 ml-1 text-[10px] md:text-sm font-normal">
          {[
            "Banff",
            "Calgary",
            "Jasper",
            "Mantreal",
            "Ottawa",
            "Toronto",
            "Vanciuver"
          ].map((city) => (
            <li key={city}>
              <Link href="#" className="hover:text-blue-600 text-sm">{city}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 2 */}
      <div>
        <h4 className="text-xs md:text-sm font-semibold">USA</h4>
        <div className="w-12 h-[1px] bg-gray-200 my-2" />
        <ul className="flex flex-wrap lg:flex-col lg:space-y-1 gap-x-4 gap-y-1 ml-1 md:ml-1 text-[10px] md:text-sm font-normal">
          {[
            "Chicago",
            "Las Vegas",
            "Los Angeles",
            "New Yark",
            "Niagara Falls",
            "Orlando",
            "Philadelphia",
            "San Francisco",
           "Washington",
          ].map((place) => (
            <li key={place}>
              <Link href="#" className="hover:text-blue-600 text-sm">{place}</Link>
            </li>
          ))}
        </ul>
      </div>

     
    
  </>
),

    Asia: (
     <>
  {/* Column 1 */}
  <div>
    <Link href="#" className="text-xs md:text-sm font-semibold text-blue-600 hover:underline">
      All of South East Asia &nbsp;›
    </Link>
    <br />
    <Link href="#" className="text-xs md:text-sm font-semibold text-blue-600 hover:underline">
      All of Far East Asia &nbsp;›
    </Link>

    <h4 className="text-sm font-semibold mt-3">Bhutan</h4>

    <h4 className="text-sm font-semibold mt-4">Nepal</h4>
    <div className="w-12 h-[1px] bg-gray-200 my-2" />
    <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 text-[10px] md:text-sm font-normal">
      {["Chitwan", "Kathmandu", "Pokhara"].map((city) => (
        <li key={city}>
          <Link href="#" className="hover:text-blue-600 text-sm">{city}</Link>
        </li>
      ))}
    </ul>

    <h4 className="text-sm font-semibold mt-4">Sri Lanka</h4>
    <div className="w-12 h-[1px] bg-gray-200 my-2" />
    <ul className="flex flex-wrap lg:flex-col lg:space-y-1 gap-x-4 gap-y-1 ml-1 text-[10px] md:text-sm font-normal">
      {["Bentota", "Colombo", "Galle", "Kandy", "Nuwara Eliya"].map((city) => (
        <li key={city}>
          <Link href="#" className="hover:text-blue-600 text-sm">{city}</Link>
        </li>
      ))}
    </ul>

    <h4 className="text-sm font-semibold mt-4">Maldives</h4>
    <h4 className="text-sm font-semibold mt-4">Cambodia</h4>
    <h4 className="text-sm font-semibold mt-4">Singapore</h4>
  </div>

  {/* Column 2 */}
  <div>
    <h4 className="text-xs md:text-sm font-semibold">Malaysia</h4>
    <div className="w-12 h-[1px] bg-gray-200 my-2" />
    <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 md:ml-1 text-[10px] md:text-sm font-normal">
      {["Kuala Lumpur", "Genting Highlands", "Langkawi"].map((place) => (
        <li key={place}>
          <Link href="#" className="hover:text-blue-600 text-sm">{place}</Link>
        </li>
      ))}
    </ul>

    <h4 className="text-sm font-semibold mt-4">Indonesia</h4>
    <div className="w-12 h-[1px] bg-gray-200 my-2" />
    <ul className="flex flex-wrap lg:flex-col lg:space-y-1 gap-x-4 gap-y-1 ml-1 text-[10px] md:text-sm font-normal">
      {["Bali", "Kuta", "Nusa Penida", "Ubud"].map((place) => (
        <li key={place}>
          <Link href="#" className="hover:text-blue-600 text-sm">{place}</Link>
        </li>
      ))}
    </ul>

    <h4 className="text-sm font-semibold mt-4">Hong Kong</h4>
    <h4 className="text-sm font-semibold mt-4">Macao</h4>

    <h4 className="text-sm font-semibold mt-4">China</h4>
    <div className="w-12 h-[1px] bg-gray-200 my-2" />
    <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 text-[10px] md:text-sm font-normal">
      {["Beijing", "Shanghai", "Shenzhen"].map((place) => (
        <li key={place}>
          <Link href="#" className="hover:text-blue-600 text-sm">{place}</Link>
        </li>
      ))}
    </ul>

    <h4 className="text-sm font-semibold mt-4">Taiwan</h4>
  </div>

  {/* Column 3 */}
  <div>
    <h4 className="text-xs md:text-sm font-semibold">Vietnam</h4>
    <div className="w-12 h-[1px] bg-gray-200 my-2" />
    <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 text-[10px] md:text-sm font-normal">
      {["Hanoi", "Ho Chi Minh"].map((place) => (
        <li key={place}>
          <Link href="#" className="hover:text-blue-600 text-sm">{place}</Link>
        </li>
      ))}
    </ul>

    <h4 className="text-sm font-semibold mt-4">Myanmar</h4>
    <h4 className="text-sm font-semibold mt-4">Laos</h4>

    <h4 className="text-sm font-semibold mt-4">Thailand</h4>
    <div className="w-12 h-[1px] bg-gray-200 my-2" />
    <ul className="flex flex-wrap lg:flex-col lg:space-y-1 gap-x-4 gap-y-1 ml-1 text-[10px] md:text-sm font-normal">
      {["Bangkok", "Krabi", "Pattaya", "Phuket"].map((place) => (
        <li key={place}>
          <Link href="#" className="hover:text-blue-600 text-sm">{place}</Link>
        </li>
      ))}
    </ul>

    <h4 className="text-sm font-semibold mt-4">Japan</h4>
    <div className="w-12 h-[1px] bg-gray-200 my-2" />
    <ul className="flex flex-wrap lg:flex-col lg:space-y-1 gap-x-4 gap-y-1 ml-1 text-[10px] md:text-sm font-normal">
      {["Cherry Blossom Tours", "Hiroshima", "Kyoto", "Osaka", "Tokyo"].map((place) => (
        <li key={place}>
          <Link href="#" className="hover:text-blue-600 text-sm">{place}</Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Column 4 */}
  <div>
    <h4 className="text-xs md:text-sm font-semibold">South Korea</h4>
    <div className="w-12 h-[1px] bg-gray-200 my-2" />
    <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 text-[10px] md:text-sm font-normal">
      <li><Link href="#" className="hover:text-blue-600 text-sm">Seoul</Link></li>
    </ul>

    <h4 className="text-sm font-semibold mt-4">Philippines</h4>
  </div>
</>

    ),

    "Australia & New Zealand": (
     <>
     {/* Column 1 */}
<div>
  <h4 className="text-sm font-semibold">Australia</h4>
  <div className="w-12 h-[1px] bg-gray-200 my-2" />
  <ul className="flex flex-wrap lg:flex-col lg:space-y-1 gap-x-4 gap-y-1 ml-1 text-[10px] md:text-sm font-normal">
    {[
      "Adelaide",
      "Brisbane",
      "Cairns",
      "Canberra",
      "Gold Coast",
      "Great Barrier Reef",
      "Great Ocean Road",
      "Perth",
      "Western Australia",
      "Melbourne",
      "Sydney",
      "Queensland",
    ].map((place) => (
      <li key={place}>
        <Link href="#" className="hover:text-blue-600 text-sm">{place}</Link>
      </li>
    ))}
  </ul>
</div>

{/* Column 2 */}
<div>
  <h4 className="text-sm font-semibold">Fiji</h4>
</div>

{/* Column 3 */}
<div>
  <h4 className="text-sm font-semibold">New Zealand</h4>
  <div className="w-12 h-[1px] bg-gray-200 my-2" />
  <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 text-[10px] md:text-sm font-normal">
    {["Auckland", "Christchurch", "Rotorua"].map((place) => (
      <li key={place}>
        <Link href="#" className="hover:text-blue-600 text-sm">{place}</Link>
      </li>
    ))}
  </ul>
</div>
</>
    ),

    Europe: (
     <>
  {/* Column 1 */}
  <div>
    <Link href="#" className="text-xs md:text-sm font-semibold text-blue-600 hover:underline">
      All of Europe &nbsp;›
    </Link>

    <h4 className="text-sm font-semibold mt-3">Western Europe</h4>
    <div className="w-12 h-[1px] bg-gray-200 my-2" />
    <ul className="flex flex-wrap lg:flex-col lg:space-y-1 gap-x-4 gap-y-1 ml-1 text-[10px] md:text-sm font-normal">
      {[
        "Austria",
        "Belgium",
        "England",
        "France",
        "Germany",
        "Geneva",
        "Interlaken",
        "Ireland",
        "Italy",
        "Liechtenstein",
        "Luxembourg",
        "Netherlands",
        "Scotland",
        "Switzerland",
        "Paris",
        "Vatican city",
      ].map((place) => (
        <li key={place}>
          <Link href="#" className="hover:text-blue-600 text-sm">{place}</Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Column 2 */}
  <div>
    <h4 className="text-xs md:text-sm font-semibold">Central & Eastern Europe</h4>
    <div className="w-12 h-[1px] bg-gray-200 my-2" />
    <ul className="flex flex-wrap lg:flex-col lg:space-y-1 gap-x-4 gap-y-1 ml-1 md:ml-1 text-[10px] md:text-sm font-normal">
      {[
        "Croatia",
        "Czech Republic",
        "Georgia",
        "Hungary",
        "Poland",
        "Slovenia",
        "Slovakia",
      ].map((place) => (
        <li key={place}>
          <Link href="#" className="hover:text-blue-600 text-sm">{place}</Link>
        </li>
      ))}
    </ul>

    <h4 className="text-sm font-semibold mt-4">Northern Europe</h4>
    <div className="w-12 h-[1px] bg-gray-200 my-2" />
    <ul className="flex flex-wrap lg:flex-col lg:space-y-1 gap-x-4 gap-y-1 ml-1 text-[10px] md:text-sm font-normal">
      {[
        "Norway",
        "Sweden",
        "Denmark",
        "Finland",
        "Iceland",
        "Estonia",
        "Russia",
      ].map((place) => (
        <li key={place}>
          <Link href="#" className="hover:text-blue-600 text-sm">{place}</Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Column 3 */}
  <div>
    <h4 className="text-xs md:text-sm font-semibold">Mediterranean Europe</h4>
    <div className="w-12 h-[1px] bg-gray-200 my-2" />
    <ul className="flex flex-wrap lg:flex-col lg:space-y-1 gap-x-4 gap-y-1 ml-1 text-[10px] md:text-sm font-normal">
      {[
        "Azerbaijan",
        "Greece",
        "Turkey",
        "Spain",
        "Portugal",
        "Morocco",
        "Egypt",
        "Jordan",
        "Israel",
        "Uzbekistan",
        "Kazakhstan",
      ].map((place) => (
        <li key={place}>
          <Link href="#" className="hover:text-blue-600 text-sm">{place}</Link>
        </li>
      ))}
    </ul>

    <h4 className="text-sm font-semibold mt-4">Highlights</h4>
    <div className="w-12 h-[1px] bg-gray-200 my-2" />
    <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 text-[10px] md:text-sm font-normal">
      {["Midnight Sun", "Northern Lights", "Scandinavia"].map((place) => (
        <li key={place}>
          <Link href="#" className="hover:text-blue-600 text-sm">{place}</Link>
        </li>
      ))}
    </ul>
  </div>
</>

    ),

    "Middle East": (
    <>
    {/* Column 1 */}
<div>
  <Link href="#" className="text-xs md:text-sm font-semibold text-blue-600 hover:underline">
    Dubai Abu Dhabi Middle East &nbsp;›
  </Link>

  <h4 className="text-sm font-semibold mt-3">Israel</h4>

  <h4 className="text-sm font-semibold mt-4">Jordan</h4>
  <div className="w-12 h-[1px] bg-gray-200 my-2" />
  <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 text-[10px] md:text-sm font-normal">
    <li><Link href="#" className="hover:text-blue-600 text-sm">Petra</Link></li>
  </ul>

  <h4 className="text-sm font-semibold mt-4">Oman</h4>
  <div className="w-12 h-[1px] bg-gray-200 my-2" />
  <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 text-[10px] md:text-sm font-normal">
    <li><Link href="#" className="hover:text-blue-600 text-sm">Muscat</Link></li>
  </ul>

  <h4 className="text-sm font-semibold mt-4">United Arab Emirates</h4>
  <div className="w-12 h-[1px] bg-gray-200 my-2" />
  <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 text-[10px] md:text-sm font-normal">
    {["Abu Dhabi", "Dubai", "Ferrari World"].map((place) => (
      <li key={place}>
        <Link href="#" className="hover:text-blue-600 text-sm">{place}</Link>
      </li>
    ))}
  </ul>

  <h4 className="text-sm font-semibold mt-4">Saudi Arabia</h4>

  <h4 className="text-sm font-semibold mt-4">Qatar</h4>
  <div className="w-12 h-[1px] bg-gray-200 my-2" />
  <ul className="flex flex-wrap gap-x-4 gap-y-2 ml-1 text-[10px] md:text-sm font-normal">
    <li><Link href="#" className="hover:text-blue-600 text-sm">Doha</Link></li>
  </ul>
</div>
</>
    ),

    Antarctica: (
     <>
     
      <section className="w-full xl:w-[400] bg-white px-1 md:px-12 py-2">
      <div className="max-w-6xl mx-auto">
     
        <h5 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
          Antartica
        </h5>

       
        <p className="text-gray-700 leading-relaxed max-w-3xl mb-4 font-normal text-justify">
          An adventure of a lifetime awaits you. Immerse yourself in the untouched
          beauty of the last frontier on Earth, the serene beauty of icebergs,
          and witness landscapes that seem straight out of your dreams.
        </p>

    
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="w-full md:w-[450px]">
            <div className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <Image
                src="/antartica.avif" 
                alt="Antarctica Expedition"
                width={450}
                height={250}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-3">
              <a
                href="#"
                className="text-blue-600 font-medium hover:underline inline-flex items-center"
              >
                Antarctica <span className="ml-1">→</span>
              </a>
              <p className="text-sm text-gray-600">The 7th Continent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
      </>
    ),
  };

  return (
    <div
      className=" left-0 w-full lg:w-[850] bg-white text-black shadow-lg border-t border-gray-200 z-50"
      role="region"
      aria-label="World mega menu"
    >
      <div className="max-w-7xl mx-auto px-8 py-4 ">

      
         <div className="hidden lg:block lg:flex lg:flex-wrap items-start gap-x-2 gap-y-0 text-sm md:text-sm mb-6 ">
        <span className="text-gray-700 font-normal whitespace-nowrap">
          Top Recommended Destinations
        </span>

     
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 font-semibold">
          <Link href="#" className="text-gray-900 hover:text-blue-600 transition">
          Europe
          </Link>
          <Link href="#" className="text-gray-900 hover:text-blue-600 transition">
        South East Asia
          </Link>
          <Link href="#" className="text-gray-900 hover:text-blue-600 transition">
          America
          </Link>
          <Link href="#" className="text-gray-900 hover:text-blue-600 transition">
        Australia New Zealand 
          </Link>
          <Link href="#" className="text-gray-900 hover:text-blue-600 transition">
         Japan China Korea Taiwan
          </Link>
        </div>
      </div>


{/* Destinations Mobile VIEW */}
       <section className="lg:hidden bg-white ">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-sm font-bold text-gray-800 mb-6 md:mb-8 tracking-tight">
          Top Recommended Destinations
        </h2>

    
        <div className="flex overflow-x-auto whitespace-nowrap scroll-smooth pb-4 -mx-4 px-2 sm:px-2 sm:mx-0
                        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="inline-flex flex-col items-center justify-start text-center mr-0 md:mr-8 lasr:mr-0
                         min-w-[90px] sm:min-w-[90px] flex-shrink-2"
            >
              <div className="relative w-16 h-16 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-gray-100 flex-shrink-0">
              
                <Image
                  src={destination.imageUrl}
                  alt={destination.name}
                  fill
                  sizes="(max-width: 240px) 46px, 80px" 
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="mt-3 text-sm sm:text-base font-medium text-gray-700 whitespace-normal leading-tight">
                {destination.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>




        {/* Tabs (Left Column) */}
        <div className="hidden lg:grid grid-cols-5 gap-3 text-xs md:text-sm leading-6 ">
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
   <div className="block lg:hidden">
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
