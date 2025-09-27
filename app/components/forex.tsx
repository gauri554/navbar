"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Forex() {
  return (
    <div className="w-full md:w-[650] bg-white px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* ---------- Left Side ---------- */}
      <div className="flex flex-col space-y-6">
        {/* Title */}
        <div className="flex items-center gap-2">
         {/* <Image
            src="/forex-1.svg" 
            alt="Forex Icon"
            width={30}
            height={30}
            className="object-contain"
          />*/}
          <h2 className="text-lg font-semibold text-blue-800">
            BUY & SELL FOREIGN CURRENCY
          </h2>
        </div>

        {/* US Dollar */}
        <div className="flex items-center gap-3">
          <Image
            src="/forex-2.svg" // 🇺🇸 Replace with correct flag icon
            alt="US Dollar"
            width={35}
            height={35}
            className="object-contain"
          />
          <p className="text-sm font-medium text-gray-600">US Dollar $</p>
        </div>

        {/* EUR */}
        <div className="flex items-center gap-3">
          <Image
            src="/forex-3.svg" // 🇪🇺 Replace with correct flag icon
            alt="Euro"
            width={35}
            height={35}
            className="object-contain"
          />
          <p className="text-sm font-medium text-gray-600">EUR - Euro $</p>
        </div>

        {/* "and more..." */}
        <p className="italic text-sm text-gray-500 mt-2 ">&nbsp;&nbsp;and more…</p>

        {/* CTA */}
        <Link
          href="#"
          className="flex items-center text-blue-700 text-sm font-medium hover:underline mt-1"
        >
          All your FOREX needs taken care of <FiArrowRight className="ml-1" />
        </Link>
      </div>

      {/* ---------- Right Side ---------- */}
      <div className="flex flex-col space-y-6 mt-12 md:mt-20">
        {/* AED */}
        <div className="flex items-center gap-3">
          <Image
            src="/forex-4.svg" // 🇦🇪 Replace with correct flag icon
            alt="AED - UAE Dirham"
            width={35}
            height={35}
            className="object-contain"
          />
          <p className="text-sm font-medium text-gray-600">AED - UAE Dirham $</p>
        </div>

        {/* GBP */}
        <div className="flex items-center gap-3">
          <Image
            src="/forex-4.svg" // 🇬🇧 Replace with correct flag icon
            alt="GBP - British Pound"
            width={35}
            height={35}
            className="object-contain"
          />
          <p className="text-sm font-medium text-gray-600">GBP - British Pound £</p>
        </div>
      </div>
    </div>
  );
}
