import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceLists = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold text-purple-700 p-4 mt-2 text-center">
        Awesome Affordable Prices
      </h1>
      <div className="text-center md:grid grid-cols-3 gap-3">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceLists;
