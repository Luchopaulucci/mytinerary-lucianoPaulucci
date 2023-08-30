import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [citie, setCitie] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/cities/${id}`)
      .then((response) => setCitie(response.data.cities))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${citie.image})` }}
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-8xl text-white">
            {citie.citie}
          </h1>
          <h2 className="text-2xl font-extrabold sm:text-5xl">
            {citie.country}
          </h2>
          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
            {citie.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
