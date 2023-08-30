import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";

const Carousel = () => {
  const [cities, setCities] = useState([]);
  const [show, showSlide] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/cities/get")
      .then((response) => setCities(response.data.cities))
      .catch((err) => console.error(err));
  }, []);

  const visibleCities = cities.slice(show, show + 4);

  const slideNext = () => {
    if (show > 8) {
      showSlide(0);
    } else {
      showSlide(show + 4);
    }
  };

  const slidePrev = () => {
    if (show <= 0) {
      showSlide(12);
    } else {
      showSlide(show - 4);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slideNext();
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [show]);

  return (
    <div className="flex flex-row gap-2 justify-center items-center sm:flex-wrap my-6 mx-1">
      <button
        onClick={slidePrev}
        className="inline-flex h-8 w-8 items-center justify-center rounded bg-1 text-black rtl:rotate-180"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap justify-center ">
        {visibleCities.map((cards) => (
          <Cards
            key={cards.citie}
            citie={cards.citie}
            county={cards.country}
            image={cards.image}
            description={cards.description}
            _id={cards._id}
          />
        ))}
      </div>

      <button
        onClick={slideNext}
        className="inline-flex h-8 w-8 items-center justify-center rounded bg-1 text-black rtl:rotate-180"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
