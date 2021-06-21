import React from "react";
const BoxComponent = ({ icon, title }) => {
  return (
    <div className="md:w-1/5 w-full rounded-lg h-36 p-2 mx-2 shadow-lg mt-4">
      <div className="flex justify-center pt-3">{icon}</div>
      <div className="flex justify-center pt-2">
        <p className="text-lg font-medium text-center text-gray-700">{title}</p>
      </div>
    </div>
  );
};

export default BoxComponent;
