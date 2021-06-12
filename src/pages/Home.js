import React from "react";
import { FiDownload, FiSettings, FiShoppingCart } from "react-icons/fi";
import { FaBullhorn, FaHandshake, FaShoppingBag } from "react-icons/fa";
import { BiGitCompare } from "react-icons/bi";
import { IoCashOutline } from "react-icons/io5";

import { GiChart, GiStoneBlock, GiCutDiamond } from "react-icons/gi";
import { MdComputer, MdLocalOffer } from "react-icons/md";
import {
  AiOutlineDollar,
  AiFillCreditCard,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  
} from "react-icons/ai";
import Header from "../components/Navbar/Header";
import Slider from "../components/Slider/Slider";
import easy from "../assets/easiest.jpg";
import stunning from "../assets/stunning.jpg";
import efficient from "../assets/efficient.jpg";
import extremely from "../assets/extremely.jpg";
import laptop from "../assets/laptop.png";
import Group from "../assets/Group-7995.png";
import Store from "../assets/STORE-PRESENTATION-1.png";
import panel from "../assets/GLOBAL-BUSINESS-IN-YOUR-HAND.png";
import TabComponent from "../components/TabComponent";
import Footer from "../components/Footer";
import PricingComponent from "../components/PricingComponent";

const Home = () => {
  return (
    <div>
      <div className="h-16">
        <Header />
      </div>
      <div className="bg-image flex items-center justify-center">
        <div className="layer">
          <p style={{ fontSize: 28, marginTop: 20 }}>
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

      <div className="h-auto bg-white py-4">
        <p className="md:text-5xl text-4xl font-bold text-center text-black">
          Glimpses of Dodo
        </p>
        <p className="text-center text-gray-400 text-lg">
          The Most User Friendly eCommerce Platform
        </p>
      </div>
      <div className="h-auto my-5">
        <div className="flex justify-center">
          <img src={easy} />
        </div>
        <p className="md:text-7xl text-4xl font-semibold text-center text-black">
          How to
          <span style={{ color: "#F28C0E" }}>Start an eCommerce Business </span>
          with Dodo?
        </p>
        <div className="flex justify-center flex-wrap">
          <div className="md:w-1/5 w-full h-52 rounded shadow-lg border p-2">
            <div className="flex justify-center pt-3">
              <FiDownload size={40} className="text-gray-700" />
            </div>
            <div className="flex justify-center pt-2">
              <p className="font-semibold text-2xl text-gray-700">Get</p>
            </div>

            <p className="text-center pt-1 text-gray-600">Install Dodo</p>
          </div>
          <div className="md:w-1/5 w-full h-52 rounded shadow-lg border p-2">
            <div className="flex justify-center pt-3">
              <FiSettings size={40} className="text-gray-700" />
            </div>
            <div className="flex justify-center">
              <p className="font-semibold text-2xl text-gray-700 pt-2">Set</p>
            </div>

            <p className="text-center pt-1 text-gray-600">
              Setup your eCommerce in the easiest manner possible
            </p>
          </div>
          <div className="md:w-1/5 w-full h-52 rounded shadow-lg border p-2">
            <div className="flex justify-center pt-3">
              <FaBullhorn size={38} className="text-gray-700" />
            </div>
            <div className="flex justify-center">
              <p className="font-semibold text-2xl pt-2 text-gray-700">Go</p>
            </div>

            <p className="text-center text-gray-600 pt-1">
              Onboard your sellers on Platform and You are ready
            </p>
          </div>
          <div className="md:w-1/5 w-full h-52 rounded shadow-lg border p-2">
            <div className="flex justify-center pt-3">
              <GiChart size={40} className="text-gray-700" />
            </div>
            <div className="flex justify-center">
              <p className="font-semibold text-2xl pt-2 text-gray-700">Enjoy</p>
            </div>

            <p className="text-center pt-1 text-gray-600">
              Enjoy Your Commission Income
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto my-5">
        <div className="flex justify-center">
          <img src={stunning} />
        </div>
        <p className="md:text-5xl text-4xl font-semibold text-center text-black">
          <span style={{ color: "#F28C0E" }}>Design </span> That No One Can Miss
        </p>
        <p className="text-center text-gray-400 text-lg">
          The most simple yet alluring shop design to make your customers stay
          and shop with ease
        </p>
        <div>
          <Slider />
        </div>
      </div>
      <div className="h-auto my-5">
        <p className="md:text-5xl text-4xl font-bold text-center text-black">
          Fantastic features
        </p>
        <p className="text-center text-gray-600 text-lg">
          A Convertible eCommerce Platform with the most fantabulous features
          ever.
        </p>
        <div className="flex flex-wrap justify-center div-margin">
          <div className="md:w-1/4 w-full h-52 rounded  p-2">
            <div className="flex justify-center">
              <GiStoneBlock size={40} className="text-gray-700" />
            </div>
            <div className="flex justify-center pt-2">
              <p className="text-lg font-medium text-gray-700">
                Laravel based PHP script
              </p>
            </div>

            <p className="text-center pt-1 text-sm text-gray-600">
              Developed in Laravel to give you an amazing experience
            </p>
          </div>
          <div className="md:w-1/4 w-full h-52 rounded  p-2">
            <div className="flex justify-center">
              <MdComputer size={40} className="text-gray-700" />
            </div>
            <div className="flex justify-center pt-2">
              <p className="font-medium text-lg text-gray-700">
                The Perfectly Responsive Design
              </p>
            </div>

            <p className="text-center pt-1 text-sm text-gray-600">
              The entire layout is designed to fit every screen size
            </p>
          </div>
          <div className="md:w-1/4 w-full h-52 rounded  p-2">
            <div className="flex justify-center">
              <FaHandshake size={40} className="text-gray-700" />
            </div>
            <div className="flex justify-center pt-2">
              <p className="font-medium text-lg text-gray-700">
                Multivendor system
              </p>
            </div>

            <p className="text-center pt-1 text-sm text-gray-600">
              Complete system for making your Multivendor system
            </p>
          </div>
          <div className="md:w-1/4 w-full h-52 rounded  p-2">
            <div className="flex justify-center">
              <FiShoppingCart size={40} className="text-gray-700" />
            </div>
            <div className="flex justify-center pt-2">
              <p className="font-medium text-lg text-gray-700">
                Single Vendor eCommerce
              </p>
            </div>

            <p className="text-center pt-1 text-sm text-gray-600">
              The system can be converted from Multivendor to Single Vendor and
              vice-versa in a click
            </p>
          </div>
          <div className="md:w-1/4 w-full h-52 rounded  p-2">
            <div className="flex justify-center">
              <AiOutlineDollar size={40} className="text-gray-700" />
            </div>
            <div className="flex justify-center pt-2">
              <p className="font-medium text-lg text-gray-700">
                Borderless System
              </p>
            </div>

            <p className="text-center pt-1 text-sm text-gray-600">
              Dodo supports multiple currencies to function across International
              Borders
            </p>
          </div>
          <div className="md:w-1/4 w-full h-52 rounded  p-2">
            <div className="flex justify-center">
              <AiFillCreditCard size={40} className="text-gray-700" />
            </div>
            <div className="flex justify-center pt-2">
              <p className="font-medium text-lg text-gray-700">
                Multiple Payment Gateways
              </p>
            </div>

            <p className="text-center pt-1 text-sm text-gray-600">
              Dodo supports several international payment gateways
            </p>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <a
            style={{ textDecoration: "none" }}
            href="#"
            className="w-52 h-12 text-center flex items-center justify-center rounded-3xl  bg-blue-600 text-white shadow-2xl"
          >
            View All Features
          </a>
        </div>
      </div>
      <div className="h-auto  p-3">
        <div className="flex justify-center">
          <img src={efficient} />
        </div>
        <p
          className="md:text-6xl text-5xl font-semibold text-center"
          style={{ color: "#E64004" }}
        >
          User <span style={{ color: "#E66804" }}> Panels </span>
        </p>
        <div>
          <TabComponent />
        </div>
      </div>
      <div className="h-auto w-full py-4">
        <div className="flex justify-center">
          <img src={laptop} />
        </div>
        <div className="mt-4">
          <p className="md:text-6xl text-5xl font-semibold text-center">
            Easy Product Posting
          </p>
          <p
            className="text-gray-500 text-center"
            style={{ wordWrap: "break-word" }}
          >
            An efficient and thoughtfully streamlined product posting option for
            admins
            <br /> and sellers makes it possible to provide an industry-leading
            standard.
          </p>
        </div>
        <div className="flex justify-center mt-4 div-margin-2 flex-wrap ml-2">
          <div className="md:w-1/5 w-full h-44 shadow-sm rounded-lg ">
            <div className="flex justify-center my-4">
              <AiOutlineShoppingCart size={45} color="#F28C0E" />
            </div>
            <p className="text-center text-gray-700 text-2xl font-medium">
              Products Variant
            </p>
          </div>
          <div className="md:w-1/5 w-full h-44 shadow-sm rounded-lg ">
            <div className="flex justify-center my-4">
              <GiCutDiamond size={45} color="#F28C0E" />
            </div>
            <p className="text-center text-gray-700 text-2xl font-medium">
              Featured Product
            </p>
          </div>
          <div className="md:w-1/5 w-full h-44 shadow-sm rounded-lg ">
            <div className="flex justify-center my-4">
              <AiOutlineHeart size={45} color="#F28C0E" />
            </div>
            <p className="text-center text-gray-700 text-2xl font-medium">
              Product Wishlist
            </p>
          </div>
          <div className="md:w-1/5 w-full h-44 shadow-sm rounded-lg ">
            <div className="flex justify-center my-4">
              <MdLocalOffer size={45} color="#F28C0E" />
            </div>
            <p className="text-center text-gray-700 text-2xl font-medium">
              Products Flash Deal
            </p>
          </div>
          <div className="md:w-1/5 w-full h-44 shadow-sm rounded-lg ">
            <div className="flex justify-center my-4">
              <MdLocalOffer size={45} color="#F28C0E" />
            </div>
            <p className="text-center text-gray-700 text-2xl font-medium">
              Today’s Deal
            </p>
          </div>
          <div className="md:w-1/5 w-full h-44 shadow-sm rounded-lg ">
            <div className="flex justify-center my-4">
              <BiGitCompare size={45} color="#F28C0E" />
            </div>
            <p className="text-center text-gray-700 text-2xl font-medium">
              Products Compare
            </p>
          </div>
          <div className="md:w-1/5 w-full h-44 shadow-sm rounded-lg ">
            <div className="flex justify-center my-4">
              <FaShoppingBag size={45} color="#F28C0E" />
            </div>
            <p className="text-center text-gray-700 text-2xl font-medium">
              Discounted Product
            </p>
          </div>
          <div className="md:w-1/5 w-full h-44 shadow-sm rounded-lg ">
            <div className="flex justify-center my-4">
              <IoCashOutline size={45} color="#F28C0E" />
            </div>
            <p className="text-center text-gray-700 text-2xl font-medium">
              Free/Flat Shipping
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto flex flex-wrap p-5">
        <div className="w-full md:w-1/2">
          <img src={Group} />
        </div>
        <div className="w-full md:w-1/2 self-center p-3">
          <p
            className="md:text-5xl text-4xl font-semibold"
            style={{ color: "#E64004" }}
          >
            Multiple{" "}
            <span style={{ color: "#E66804" }}> Payment Gateways </span>
          </p>
          <p className="text-gray-600">
            Active eCommerce CMS comes with 8 types of payment options. You can
            take payments from your customers according to your suitable
            gateways.
          </p>
        </div>
      </div>
      <div className="h-auto flex flex-wrap p-5">
        <div className="w-full md:w-1/2 self-center p-3">
          <p
            className="md:text-6xl text-5xl font-semibold"
            style={{ color: "#E64004" }}
          >
            Stunning Seller
            <span style={{ color: "#E66804" }}> Store Presentation </span>
          </p>
          <p className="text-gray-600">
            All sellers have their shop setting to present his/her store
            branding. Store page comes with promotional banners, featured
            products, sellers reviews, social links, new products.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src={Store} />
        </div>
      </div>
      <div className="h-auto flex flex-wrap p-5">
        <div className="w-full md:w-1/2">
          <img src={panel} />
        </div>
        <div className="w-full md:w-1/2 self-center p-3">
          <p
            className="md:text-5xl text-4xl font-semibold"
            style={{ color: "#E64004" }}
          >
            Global Business
            <span style={{ color: "#E66804" }}> is in your HAND! </span>
          </p>
          <p className="text-gray-600">
            Admin panel of Active eCommerce CMS is a control room of your
            business. You can manage your whole eCommerce business including
            customers, products, orders, sellers, shops. Is has everything you
            need to control your shop business.
          </p>
        </div>
      </div>
      <div className="h-auto py-4">
        <div className="flex justify-center">
          <img src={extremely} />
        </div>
        <p className="md:text-5xl text-4xl font-semibold text-center text-black">
          Affordable <span style={{ color: "#F28C0E" }}>Pricing </span>
        </p>
        <PricingComponent />
      </div>
      <div>
        <div className="bg-image-3 flex items-center justify-center">
          <div className="w-full md:w-2/5 h-2/3 bg-white rounded-lg text-center p-5 mx-4">
            <p className="md:text-4xl text-3xl font-semibold ">
              Ready to start an eCommerce Business?
            </p>
            <p className="text-gray-500 font-medium ">
              Top-notch support, free lifetime updates, and premium exclusive
              features are coming soon!
            </p>
            <button
              // href="#"

              className="rounded px-2 h-16 text-sm md:text-base p-3 bg-red-500 text-white text-center mt-4 hover:bg-red-700"
            >
              Download Your Copy Now | $59
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
