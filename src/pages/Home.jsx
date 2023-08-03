import React from "react";

const Home = () => {
  return (
    <div className="relative bg-homeFondo bg-no-repeat bg-cover bg-center h-screen">
      <div className="absolute inset-0 backdrop-blur flex items-center justify-center">
        <div className="w-full gap-5 grid items-center justify-center">
          <h1 className="text-4xl font-extrabold sm:text-8xl text-center">
            MY
            <strong className="font-extrabold text-1 sm:block">tinerary</strong>
          </h1>
          <h2 className="text-1xl font-semibold sm:text-2xl text-8">
            '¡Find your perfect trip, designed by insiders who know and love
            their cities!'.
          </h2>
          <div className="flex justify-center">
            <a class="items-center rounded border-indigo-600 bg-1 px-10 py-2 text-white hover:text-7 w-fit" href="/download" >
              <h3 className="font-">Download</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
