import React from "react";

const FeatureComponent = ({ icon, title, desc }) => {
  return (
    <div className="md:w-1/5 w-full h-auto rounded ">
      <div className="flex justify-center">{icon}</div>
      <div className="flex justify-center pt-2">
        <p className="text-lg font-medium text-center text-gray-700">{title}</p>
      </div>

      <p className="text-center pt-1 text-sm text-gray-600">{desc}</p>
    </div>
  );
};

export default FeatureComponent;
