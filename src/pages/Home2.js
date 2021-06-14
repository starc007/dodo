import React from "react";
import Header from "../components/Navbar/Header";

import img1 from "../assets/images/features_1.png";
import img2 from "../assets/images/features_2.png";
import img3 from "../assets/images/features_3.png";
import img4 from "../assets/images/features_4.png";
import img5 from "../assets/images/features_5.png";
import img6 from "../assets/images/features_6.png";
import img7 from "../assets/images/demo1.png";

const Home2 = () => {
  return (
    <div>
      <div className="h-16">
        <Header />
      </div>
      <div className="bg-image flex items-center ">
        <div className="layer">
          <p style={{ fontSize: 28, marginTop: 10 }}>
            Build The Most Powerful{" "}
          </p>

          <p className="p-style">eCommerce Platform with DODO</p>

          <div className="btn">
            <a href="#" className="btn-1 hover:bg-white hover:text-black">
              Try Customer End
            </a>
            <a href="#" className="btn-2 hover:bg-white hover:text-black">
              Try Admin End
            </a>
          </div>
        </div>
      </div>
      <div className="my-5 py-5 h-auto p-4">
        <p className="text-center text-xl text-blue-700">WHY CHOOSE DODO</p>
        <p className="text-center text-5xl text-gray-700 font-semibold">
          A complete website building toolkit save your time by using SaasLand
        </p>
        <div className="flex flex-wrap mt-5 justify-center div-margin">
          <div className="md:w-1/4 w-full h-auto py-4  mt-4">
            <div className="flex justify-center items-center">
              <img src={img1} />
            </div>
            <p className="font-semibold text-xl text-center pt-2">
              Visual Site Builder
            </p>
            <p className="text-gray-600 text-center">
              SaasLand comes with visual website builder “Elementor”. You can
              edit any part of your webpages using the intuitive front end
              builder.
            </p>
          </div>

          <div className="md:w-1/4 w-full h-auto py-4  mt-4">
            <div className="flex justify-center items-center">
              <img src={img2} />
            </div>
            <p className="font-semibold text-xl text-center pt-2">
              One-click Demo Import
            </p>
            <p className="text-gray-600 text-center">
              The one-click demo importer gives you the ability to import any
              demo you see in the live preview. Just a matter of a few seconds!
            </p>
          </div>

          <div className="md:w-1/4 w-full h-auto py-4  mt-4">
            <div className="flex justify-center items-center">
              <img src={img3} />
            </div>
            <p className="font-semibold text-xl text-center pt-2">
              250+ Element Blocks
            </p>
            <p className="text-gray-600 text-center">
              We have assembled a huge collection of element blocks. Now you can
              choose from over 250 templates to create stunning layouts.
            </p>
          </div>
          <div className="md:w-1/4 w-full h-auto py-4  mt-4">
            <div className="flex justify-center items-center">
              <img src={img4} />
            </div>
            <p className="font-semibold text-xl text-center pt-2">
              No Coding Required
            </p>
            <p className="text-gray-600 text-center">
              Setup a fully functional, awesome website without needing to code
              a single line - SaasLand is that easy to configure.
            </p>
          </div>
          <div className="md:w-1/4 w-full h-auto py-4  mt-4">
            <div className="flex justify-center items-center">
              <img src={img5} />
            </div>
            <p className="font-semibold text-xl text-center pt-2">
              Build Shop - Sell Online
            </p>
            <p className="text-gray-600 text-center">
              WooCommerce is setup and fully integrated. Now build your online
              shop, sell your products, grow your business.
            </p>
          </div>
          <div className="md:w-1/4 w-full h-auto py-4  mt-4">
            <div className="flex justify-center items-center">
              <img src={img6} />
            </div>
            <p className="font-semibold text-xl text-center pt-2">
              Support That Pleases
            </p>
            <p className="text-gray-600 text-center">
              Already our customers are hugely satisfied with customer support
              we are conveying - you will be impressed, too!
            </p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#F9FAFE" }} className="my-5 py-5 h-auto">
        <p className="text-center text-8xl font-bold text-blue-700">38</p>
        <p className="text-center text-4xl font-semibold text-gray-700">
          Stunning Demos
        </p>
        <p className="text-gray-500 text-xl text-center p-4">
          All home pages, inner pages and elements are included with the
          purchase. Easily import the demos and pages with the one click demo
          import. If you want to create new pages the elements and blocks have
          got your back. Mix and blend elements from different demos as per your
          preference and create awesome websites with Saasland!
        </p>
        <div className="flex justify-center flex-wrap mt-5 div-margin">
          <div className="md:w-1/4 w-full h-auto py-4  mt-4">
            <div className="flex justify-center items-center shadow-xl">
              <img src={img7} />
            </div>
            <p className="font-semibold text-xl text-center pt-4">
              Visual Site Builder
            </p>
          </div>
          <div className="md:w-1/4 w-full h-auto py-4  mt-4">
            <div className="flex justify-center items-center shadow-xl">
              <img src={img7} />
            </div>
            <p className="font-semibold text-xl text-center pt-4">
              Visual Site Builder
            </p>
          </div>
          <div className="md:w-1/4 w-full h-auto py-4  mt-4">
            <div className="flex justify-center items-center shadow-xl">
              <img src={img7} />
            </div>
            <p className="font-semibold text-xl text-center pt-4">
              Visual Site Builder
            </p>
          </div>
          <div className="md:w-1/4 w-full h-auto py-4  mt-4">
            <div className="flex justify-center items-center shadow-xl">
              <img src={img7} />
            </div>
            <p className="font-semibold text-xl text-center pt-4">
              Visual Site Builder
            </p>
          </div>
          <div className="md:w-1/4 w-full h-auto py-4  mt-4">
            <div className="flex justify-center items-center shadow-xl">
              <img src={img7} />
            </div>
            <p className="font-semibold text-xl text-center pt-4">
              Visual Site Builder
            </p>
          </div>
          <div className="md:w-1/4 w-full h-auto py-4  mt-4">
            <div className="flex justify-center items-center shadow-xl">
              <img src={img7} />
            </div>
            <p className="font-semibold text-xl text-center pt-4">
              Visual Site Builder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
