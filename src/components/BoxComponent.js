import React from "react";
const BoxComponent = ({ icon, title }) => {
  return (
    <div className="w-5/6 md:w-1/4 shadow-lg rounded-lg h-40 p-3">
      <div className="flex justify-center">{icon}</div>
      <p className="text-lg text-center pt-3">{title}</p>
    </div>
  );
};

export default BoxComponent;
