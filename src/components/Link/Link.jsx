import React from "react";

const Link = ({ route }) => {
  return (
    <div>
      <li className="mr-12 hover:bg-purple-500 hover:text-white p-2 rounded font-semibold border">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;
