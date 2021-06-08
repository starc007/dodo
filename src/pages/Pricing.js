import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Navbar/Header";
import PricingComponent from "../components/PricingComponent";

const Pricing = () => {
  return (
    <div className="h-auto">
      <div className="h-16">
        <Header />
      </div>
      <div className="w-full h-64 bg-green-100 flex justify-center items-center">
        <label>Pricing banner</label>
      </div>
      <div className="py-4">
        <PricingComponent />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;
