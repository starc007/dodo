import React from "react";
import Header from "../components/Navbar/Header";
import Slider from '../components/Slider/Slider'
import easy from "../assets/easiest.jpg";
import stunning from "../assets/stunning.jpg";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="bg-image flex items-center justify-center">
        <div className="layer">
          <p style={{ fontSize: 22, marginTop: 20 }}>MOST POWERFUL</p>

          <p className="p-style">Active eCommerce CMS</p>

          <p style={{ fontSize: 22 }}>
            A powerful platform to make you an eCommerce entrepreneur
          </p>
          <div className="btn">
            <a href="#" className="btn-1 hover:bg-white hover:text-black">
              Browse Frontend
            </a>
            <a href="#" className="btn-2 hover:bg-white hover:text-black">
              Browse Admin
            </a>
          </div>
        </div>
      </div>

      <div className="h-auto m-4 bg-white">
        <p className="md:text-5xl text-4xl font-bold text-center text-black">
          Watch Promo
        </p>
        <p className="text-center text-gray-400 text-lg">
          Complete system for your eCommerce business
        </p>
      </div>
      <div className="h-auto m-4 my-5">
        <div className="flex justify-center">
          <img src={easy} />
        </div>
        <p className="md:text-5xl text-3xl font-semibold text-center text-black">
          How <span style={{ color: "#F5250A" }}>Active eCommerce cms </span>
          works?
        </p>
        <div className="flex justify-center flex-wrap div-margin">
          <div className="md:w-1/5 w-full h-52 rounded bg-red-100"></div>
          <div className="md:w-1/5 w-full h-52 rounded bg-red-100 "></div>
          <div className="md:w-1/5 w-full h-52 rounded bg-red-100"></div>
          <div className="md:w-1/5 w-full h-52 rounded bg-red-100"></div>
        </div>
      </div>
      <div className="h-auto my-5">
        <div className="flex justify-center">
          <img src={stunning} />
        </div>
        <p className="md:text-5xl text-4xl font-semibold text-center text-black">
          <span style={{ color: "#F5250A" }}>Frontend </span> Design
        </p>
        <p className="text-center text-gray-400 text-lg">
          Unique shop design to make your business a true eCommerce platform
        </p>
        <div>
          <Slider />
        </div>
      </div>

    </div>
  );
};

export default Home;
