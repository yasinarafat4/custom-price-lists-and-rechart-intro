import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Features = ({ feature }) => {
  return (
    <div className="flex gap-1">
      <CheckCircleIcon className="h-6 w-6 text-green-700" />
      <span className="font-semibold">{feature}</span>
    </div>
  );
};

export default Features;
