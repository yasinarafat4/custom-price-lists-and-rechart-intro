import React from "react";
import Features from "../Features/Features";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-indigo-400 m-4 rounded-lg p-4 flex flex-col">
      <h1>
        <span className="text-purple-800 text-3xl font-extrabold">
          ${price.price}
        </span>
        <span className="text-2xl font-bold text-white">/mon</span>
      </h1>
      <h2 className="text-xl font-bold">{price.name}</h2>
      <hr className="my-2" />
      <p className="text-lg font-semibold text-purple-900">
        {price.description}
      </p>
      <hr className="my-2" />
      <p className="text-left font-bold text-lg">Features:</p>
      <p className="text-left mb-2">
        {price.features.map((feature, idx) => (
          <Features key={idx} feature={feature}></Features>
        ))}
      </p>
      <button className="w-full bg-green-600 py-2 rounded-md text-slate-100 mt-auto hover:bg-purple-600 font-semibold">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCard;
