import React from "react";

const Search = () => {
  return (
    <div className="mt-20 flex justify-center">
      <label htmlFor="name" className="sr-only">
        Search
      </label>

      <input
        type="name"
        className="w-52 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm sm:w-96"
        placeholder="Search citie"
      />
    </div>
  );
};

export default Search;
