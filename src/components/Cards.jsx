import React from "react";

const Cards = ({ country, citie, image, description, _id }) => {
  return (
    <a href={"/cities/" +_id} className="h-44 w-64 group relative block bg-black sm:h-full">
      <img
        alt="Citie"
        src={image}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
          {country}
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">{citie}</p>
        
        <div className="hidden sm:block sm:mt-32">
          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Cards;
