import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const students = [
    {
      id: 1,
      name: "John",
      physics: 80,
      chemistry: 70,
      math: 90,
    },
    {
      id: 2,
      name: "Sarah",
      physics: 75,
      chemistry: 85,
      math: 95,
    },
    {
      id: 3,
      name: "David",
      physics: 90,
      chemistry: 80,
      math: 85,
    },
    {
      id: 4,
      name: "Emily",
      physics: 85,
      chemistry: 90,
      math: 75,
    },
    {
      id: 5,
      name: "Alex",
      physics: 95,
      chemistry: 75,
      math: 80,
    },
    {
      id: 6,
      name: "Ava",
      physics: 70,
      chemistry: 95,
      math: 85,
    },
    {
      id: 7,
      name: "Daniel",
      physics: 80,
      chemistry: 85,
      math: 90,
    },
    {
      id: 8,
      name: "Sophia",
      physics: 75,
      chemistry: 90,
      math: 85,
    },
    {
      id: 9,
      name: "William",
      physics: 90,
      chemistry: 80,
      math: 75,
    },
    {
      id: 10,
      name: "Ella",
      physics: 85,
      chemistry: 75,
      math: 95,
    },
    {
      id: 11,
      name: "Oliver",
      physics: 95,
      chemistry: 70,
      math: 80,
    },
    {
      id: 12,
      name: "Mia",
      physics: 70,
      chemistry: 85,
      math: 95,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-purple-700 p-4 mt-2 text-center">
        Dashboard
      </h1>
      <h2 className="text-lg font-semibold ms-2">Line Chart</h2>
      <LineChart width={500} height={300} data={students}>
        <Line dataKey="physics"></Line>
        <Line dataKey="chemistry"></Line>
        <Line dataKey="math"></Line>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default Dashboard;
