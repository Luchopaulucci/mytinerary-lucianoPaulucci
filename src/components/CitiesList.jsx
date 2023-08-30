import React from "react";
import Cards from "./Cards";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const CitiesList = () => {
  const [cities, setCities] = useState([]);
  const inputSearch = useRef();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/cities/get")
      .then((response) => setCities(response.data.cities))
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = async (citie) => {
    const citieSearch = inputSearch.current.value;

    try {
      await axios
        .get(`http://localhost:4000/api/cities/get?citie=${citieSearch}`)
        .then((response) => setCities(response.data.cities));
    } catch (error) {
      console.error(error);
      setCities([]);
    }
  };

  return (
    <div className="h-full">
      <div className="mt-20 flex justify-center">
        <label htmlFor="name" className="sr-only">
          Search
        </label>

        <input
          ref={inputSearch}
          type="name"
          className="w-52 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm sm:w-96"
          placeholder="Search citie"
        />
        <button
          onClick={handleSearch}
          type="button"
          className="text-gray-600 hover:text-gray-700 mx-2 "
        >
          <span className="sr-only">Search</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center sm:flex-row sm:flex-wrap my-10">
        {cities?.length > 0 ? (
          cities.map((cards) => (
            <Cards
              key={cards.citie}
              citie={cards.citie}
              country={cards.country}
              image={cards.image}
              description={cards.description}
              _id={cards._id}
            />
          ))
        ) : (
          <h3 className="text-white h-screen">Not Found</h3>
        )}
      </div>
    </div>
  );
};

export default CitiesList;
