"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Car, Plane, Ship, Compass, Gift, Users } from "lucide-react";

const tabs = ["Themed Experiences", "Luxury Holidays", "Island Getaways"];

export default function CustomizedHolidays() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className=" left-0 top-full w-full  md:w-[650] bg-white shadow-lg border-t border-gray-200 z-50">
      {/* Tabs */}
      <div className="flex gap-6 px-4 py-3 text-sm font-medium border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="flex flex-col md:flex-row p-4 md:p-6 gap-6">
        {/* LEFT SIDE */}
        {activeTab === "Themed Experiences" && (
          <div className="w-full md:w-1/2 space-y-4 text-sm">
            <Link href="#" className="block font-semibold text-blue-600 mb-3">
              🎉 THEMED EXPERIENCES - Find your reason!
            </Link>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Users className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Family Fun</span>
              </li>
              <li className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Romantic Holidays</span>
              </li>
              <li className="flex items-center gap-3">
                <Compass className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Getaways</span>
              </li>
              <li className="flex items-center gap-3">
                <Gift className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">
                  Hidden Gems{" "}
                  <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                    Newly Launched
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Car className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Self Drive Holidays</span>
              </li>
              <li className="flex items-center gap-3">
                <Plane className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Air Inclusive Holidays</span>
              </li>
              <li className="flex items-center gap-3">
                <Ship className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Cruise Holidays</span>
              </li>
            </ul>
          </div>
        )}

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 grid grid-cols-1 gap-6">
          {activeTab === "Themed Experiences" && (
            <>
              <Link href="#" className="flex flex-col sm:flex-row gap-4 items-start">
                <Image
                  src="/customized-1.avif"
                  alt="Luxury Holidays"
                  width={200}
                  height={120}
                  className="rounded-md object-cover w-full sm:w-40 h-28"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Luxury Holidays →
                  </h3>
                  <p className="text-gray-600 text-sm">
                    choose the right tailor-made luxury travel vacations
                  </p>
                </div>
              </Link>

              <Link href="#" className="flex flex-col sm:flex-row gap-4 items-start">
                <Image
                  src="/customized-2.avif"
                  alt="Island Getaways"
                  width={200}
                  height={120}
                  className="rounded-md object-cover w-full sm:w-40 h-28"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Island Getaways →
                  </h3>
                  <p className="text-gray-600 text-sm">
                    explore the tropical island getaways
                  </p>
                </div>
              </Link>
            </>
          )}

          {activeTab === "Luxury Holidays" && (
            <p className="text-gray-600">Luxury Holidays content…</p>
          )}

          {activeTab === "Island Getaways" && (
            <p className="text-gray-600">Island Getaways content…</p>
          )}
        </div>
      </div>
    </div>
  );
}
