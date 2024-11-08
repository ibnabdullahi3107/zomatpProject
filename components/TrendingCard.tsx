// components/TrendingCard.tsx

import Image from "next/image";
import { Bookmark, Link } from "lucide-react";

const TrendingCard = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg md:max-w-5xl lg:max-w-6xl">
      {/* Image with Overlay */}
      <div className="relative">
        <Image
          src="/trend.png"
          alt="Top Trending Spots"
          width={900}
          height={800}
          className="object-cover w-full h-54 sm:h-80 md:h-96 lg:h-[20rem]"
        />
        {/* Small Overlay Card with Text */}
        <div className="absolute bottom-4 left-4 bg-neutral-950 bg-opacity-80 text-white rounded-lg p-5 w-2/4 sm:w-2/3 md:w-1/2 lg:w-2/4">
          <p className="text-lg font-medium uppercase tracking-widest opacity-75">
            Zomato Collections
          </p>
          <h3 className="text-3xl sm:text-4xl py-3 font-bold">Top Trending Spots</h3>
          <p className="mt-1 opacity-75 text-sm sm:text-base">
            The restaurants that are talk of the town. Look out for more such
            popular places, updated every Thursday!
          </p>
          <span className="text-xs mt-3 block">32 Places</span>
        </div>
      </div>

      {/* Save and Link Options */}
      <div className="absolute top-3 right-3 flex space-x-2">
        <button className="bg-gray-800 text-white text-sm py-1 px-3 rounded-full hover:bg-gray-700">
          + Save Collection
        </button>
        <a
          href="#"
          className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700"
        >
          <Link />
        </a>
      </div>
    </div>
  );
};

export default TrendingCard;
