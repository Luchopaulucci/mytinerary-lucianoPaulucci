import { useState } from "react";

const Itineraies = ({
  name,
  price,
  duration,
  likes,
  created_To,
  comments,
  hashtags,
  photo,
}) => {
  const [showUnderConstruction, setShowUnderConstruction] = useState(false);

  const toggleUnderConstruction = () => {
    setShowUnderConstruction(!showUnderConstruction);
  };

  const calculateBills = (price) => {
    if (price <= 100) {
      return "💸";
    } else if (price <= 500) {
      return "💸💸";
    } else if (price <= 1000) {
      return "💸💸💸";
    } else if (price <= 1500) {
      return "💸💸💸💸";
    } else {
      return "💸💸💸💸💸";
    }
  };

  return (
    <div
      href="#"
      className="relative block overflow-hidden rounded-lg border bg-5 border-gray-100 p-4 sm:p-6 lg:p-8 mx-4 my-8 sm:mx-10 md:mx-32"
    >
      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-black sm:text-xl">{name}</h3>

          <p className="mt-1 text-xs font-medium text-black">{created_To}</p>
        </div>

        <div className="hidden sm:block sm:shrink-0">
          <img
            alt={created_To}
            src={photo}
            className="h-16 w-16 rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>

      <dl className="my-8 flex flex-wrap gap-6 sm:gap-10 text-center justify-between">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-800">Duration</dt>
          <dd className="text-xs text-gray-900">{duration}</dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-800">Price</dt>
          <dd className="text-xs text-gray-900">
            {calculateBills(price)}
          </dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-800">Hashtags</dt>
          <dd className="text-xs text-gray-900">
            {hashtags.map((hashtag, index) => (
              <span key={index}>#{hashtag} </span>
            ))}
          </dd>


        </div>

        <div className="flex flex-col-reverse">
          <h4>{likes}</h4>
          <button className="rounded-full bg-red-500 text-white p-2">💗</button>
        </div>
      </dl>
      <div className="mt-8 flex justify-center flex-col w-full items-center">
        <a
          onClick={toggleUnderConstruction}
          className="inline-block w-fit rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:text-black focus:ring active:text-indigo-500"
        >
          View More
        </a>
        {showUnderConstruction && <h3>UNDER CONSTRUCTION</h3>}
      </div>
    </div>
  );
};

export default Itineraies;
