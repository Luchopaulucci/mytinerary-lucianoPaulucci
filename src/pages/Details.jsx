import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_citiesById } from "../store/actions/citieActions";
import Itineraies from "../components/Itineraies";

const Details = () => {
  const { id } = useParams();

  const dispatch = useDispatch()

  const citieDetail = useSelector((state) => state.citieReducer.citieDetail);

  useEffect(() => {
    dispatch(get_citiesById(id))
  }, [dispatch, id]);

  const itineraries = citieDetail.itineraries

  const nameOfCreatedBy = citieDetail.created_By ? citieDetail.created_By.name : "N/A"

  const photoOfCreatedBy = citieDetail.created_By ? citieDetail.created_By.photo: "N/A"

/*   console.log(citieDetail);

  console.log(itineraries);

  console.log(photoOfCreatedBy);

  console.log(nameOfCreatedBy) */

  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${citieDetail.image})` }}
      >
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-8xl text-white">
              {citieDetail.citie}
            </h1>
            <h2 className="text-2xl font-extrabold sm:text-5xl">
              {citieDetail.country}
            </h2>
            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-balck">
              {citieDetail.description}
            </p>
          </div>
        </div>
      </section>
      {itineraries ? (
        itineraries.length > 0 ? (
          itineraries.map((itinerary) => (
            <Itineraies
              key={itinerary._id}
              name={itinerary.name}
              duration={itinerary.duration}
              likes={itinerary.likes}
              price={itinerary.price}
              created_To={nameOfCreatedBy}
              hashtags={itinerary.hashtags}
              photo={photoOfCreatedBy}
            />
          ))
        ) : (
          <p className="text-lg sm:text-5xl text-white my-6 mx-2 text-center py-8 bg-5 rounded ">😢 No itineraries available 😢</p>
        )
      ) : (
        <p>Loading itineraries</p>
      )}

    </div>

  );
};

export default Details;