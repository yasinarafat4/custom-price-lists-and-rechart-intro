import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PhoneBar = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    /* Previous style for fetching data
   fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((res) => res.json())
      .then((data) => setPhones(data));*/
    // New style
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadedData = data.data.data;
        console.log(loadedData);
        const phoneData = loadedData.map((phone) => {
          const parts = phone.slug.split("-");
          const price = parseInt(parts[1]);
          const phoneInfo = {
            name: phone.phone_name,
            price: price,
          };
          return phoneInfo;
        });
        setPhones(phoneData);
      });
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold text-purple-700 p-4 mt-2 text-center">
        Phone Bar
      </h1>
      <div>
        <BarChart width={1000} height={500} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
        </BarChart>
      </div>
    </div>
  );
};

export default PhoneBar;
