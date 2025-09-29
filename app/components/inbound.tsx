"use client";

import Image from "next/image";

export default function Inbound() {
  return (
    <div className="w-full lg:w-[700] bg-white text-gray-800 px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">India: A Timeless Experience</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className="flex flex-col">
            <Image
              src="/inbound-1.webp"
              alt="Rajasthan Royale"
              width={200}
              height={120}
              className="rounded-md object-cover w-full h-28"
            />
            <h3 className="mt-2 text-sm font-semibold">Rajasthan Royale</h3>
            <p className="text-xs text-gray-500">Beyond The Forts</p>
          </div>

       
          <div className="flex flex-col">
            <Image
              src="/inbound-2.webp"
              alt="Rajasthan"
              width={200}
              height={120}
              className="rounded-md object-cover w-full h-28"
            />
            <h3 className="mt-2 text-sm font-semibold">Rajasthan</h3>
            <p className="text-xs text-gray-500">Roars & Royals</p>
          </div>

   
          <div className="flex flex-col">
            <Image
              src="/inbound-3.avif"
              alt="Golden Grandeur"
              width={200}
              height={120}
              className="rounded-md object-cover w-full h-28"
            />
            <h3 className="mt-2 text-sm font-semibold">Golden Grandeur</h3>
            <p className="text-xs text-gray-500">The Triangle of Royalty</p>
          </div>

      
          <div className="flex flex-col">
            <Image
              src="/inbound-4.avif"
              alt="Udaipur"
              width={200}
              height={120}
              className="rounded-md object-cover w-full h-28"
            />
            <h3 className="mt-2 text-sm font-semibold">Udaipur</h3>
            <p className="text-xs text-gray-500">The Triangle of Royalty</p>
          </div>
        </div>
      </div>

     
      <div>
        <h2 className="text-lg font-semibold mb-4">Explore Niche Experiences</h2>
        <div className="flex flex-col space-y-4">
          {[
            { title: "India Royale", desc: "Roots & Routes", img: "/inbound-5.webp" },
            { title: "Sacred Trails", desc: "Ayodhya Prayagraj Varanasi", img: "/inbound-6.webp" },
            { title: "On Buddha’s Trail", desc: "A pilgrimage route", img: "/inbound-7.avif" },
            { title: "The Himalayan Kingdom", desc: "Mountain Range of Asia", img: "/inbound-8.avif" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-4">
              <Image
                src={item.img}
                alt={item.title}
                width={50}
                height={50}
                className="rounded-full object-cover w-12 h-12"
              />
              <div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

  
    
      <div className="flex flex-col space-y-4 md:pt-18">
        {[
          { title: "Maharaja’s Express", desc: "The Indian Panorama", img: "/inbound-9.avif" },
          { title: "Blissful Bhutan", desc: "Nature, Nirvana, Monks", img: "/inbound-10.webp" },
          { title: "Nepal", desc: "Mountain Lakes & Wildlife", img: "/inbound-11.avif" },
          { title: "Sri Lanka", desc: "Sacred Sites to Sandy Shores", img: "/inbound-12.webp" },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-4">
            <Image
              src={item.img}
              alt={item.title}
              width={50}
              height={50}
              className="rounded-full object-cover w-12 h-12"
            />
            <div>
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
