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

      <div className="h-auto bg-white">
        <p className="md:text-5xl text-4xl font-bold text-center text-black">
          Watch Promo
        </p>
        <p className="text-center text-gray-400 text-lg">
          Complete system for your eCommerce business
        </p>
      </div>
      <div className="h-auto my-5">
        <div className="flex justify-center">
          <img src={easy} />
        </div>
        <p className="md:text-5xl text-3xl font-semibold text-center text-black">
          How <span style={{ color: "#F5250A" }}>Active eCommerce cms </span>
          works?
        </p>
        <div className="flex justify-center flex-wrap div-margin">
          <div className="md:w-1/5 w-full h-52 rounded bg-blue-100 p-2">
            <div className="flex justify-center">
              <FiDownload size={40} className="text-gray-700" />
            </div>
            <div className="flex justify-center pt-2">
              <p className="font-semibold text-2xl text-gray-700">01</p>
            </div>

            <p className="text-center pt-1 text-gray-600">
              Download and Install Active eCommerce CMS
            </p>
          </div>
          <div className="md:w-1/5 w-full h-52 rounded bg-red-100 p-2">
            <div className="flex justify-center">
              <FiSettings size={40} className="text-gray-700" />
            </div>
            <div className="flex justify-center">
              <p className="font-semibold text-2xl text-gray-700 pt-2">02</p>
            </div>

            <p className="text-center pt-1 text-gray-600">
              Setup your platform with eCommerce options
            </p>
          </div>
          <div className="md:w-1/5 w-full h-52 rounded bg-green-100 p-2">
            <div className="flex justify-center">
              <FaBullhorn size={38} className="text-gray-700" />
            </div>
            <div className="flex justify-center">
              <p className="font-semibold text-2xl pt-2 text-gray-700">03</p>
            </div>

            <p className="text-center text-gray-600 pt-1">
              Welcome your sellers to join with your platform
            </p>
          </div>
          <div className="md:w-1/5 w-full h-52 rounded bg-red-100 p-2">
            <div className="flex justify-center">
              <GiChart size={40} className="text-gray-700" />
            </div>
            <div className="flex justify-center">
              <p className="font-semibold text-2xl pt-2 text-gray-700">04</p>
            </div>

            <p className="text-center pt-1 text-gray-600">
              Start earning from sales commission
            </p>
          </div>
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
      <div className="h-auto my-5">
        <p className="md:text-5xl text-4xl font-bold text-center text-black">
          Amazing features
        </p>
        <p className="text-center text-gray-600 text-lg">
          Standard Multivendor system with well-decorated frontend & exclusive
          features.
        </p>
        <div className="flex flex-wrap justify-center div-margin">
          <div className="md:w-1/4 w-full h-52 rounded bg-blue-100 p-2">
            <div className="flex justify-center">
              <GiStoneBlock size={40} className="text-gray-700" />
            </div>
            <div className="flex justify-center pt-2">
              <p className="text-lg font-medium text-gray-700">
                Laravel based PHP script
              </p>
            </div>

            <p className="text-center pt-1 text-sm text-gray-600">
              Developed with most powerful PHP framework Laravel
            </p>
          </div>
          <div className="md:w-1/4 w-full h-52 rounded bg-red-100 p-2">
            <div className="flex justify-center">
              <MdComputer size={40} className="text-gray-700" />
            </div>
            <div className="flex justify-center pt-2">
              <p className="font-medium text-lg text-gray-700">
                100% Responsive design
              </p>
            </div>

            <p className="text-center pt-1 text-sm text-gray-600">
              The entire layout is available to 100% fit for any sizes of screen
            </p>
          </div>
          <div className="md:w-1/4 w-full h-52 rounded bg-purple-100 p-2">
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
          <div className="md:w-1/4 w-full h-52 rounded bg-green-100 p-2">
            <div className="flex justify-center">
              <FiShoppingCart size={40} className="text-gray-700" />
            </div>
            <div className="flex justify-center pt-2">
              <p className="font-medium text-lg text-gray-700">
                Basic eCommerce
              </p>
            </div>

            <p className="text-center pt-1 text-sm text-gray-600">
              By a click, you can turn the total system from Multi vendor system
              to B-C format
            </p>
          </div>
          <div className="md:w-1/4 w-full h-52 rounded bg-yellow-100 p-2">
            <div className="flex justify-center">
              <AiOutlineDollar size={40} className="text-gray-700" />
            </div>
            <div className="flex justify-center pt-2">
              <p className="font-medium text-lg text-gray-700">
                Available Multi-currency
              </p>
            </div>

            <p className="text-center pt-1 text-sm text-gray-600">
              Multi-currency option makes this system border-less eCommerce
              platform
            </p>
          </div>
          <div className="md:w-1/4 w-full h-52 rounded bg-indigo-100 p-2">
            <div className="flex justify-center">
              <AiFillCreditCard size={40} className="text-gray-700" />
            </div>
            <div className="flex justify-center pt-2">
              <p className="font-medium text-lg text-gray-700">
                Multiple Payment Gateways
              </p>
            </div>

            <p className="text-center pt-1 text-sm text-gray-600">
              Take payments by Multiple International payment Gateways
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
      <div className="h-auto  p-3" style={{ backgroundColor: "#F8F9FB" }}>
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
      <div className="h-auto py-4 " style={{ backgroundColor: "#F9EFEC" }}>
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
          <div className="md:w-1/5 w-full h-44 shadow-lg rounded-lg bg-white">
            <div className="flex justify-center my-4">
              <AiOutlineShoppingCart size={45} color="#FC876C" />
            </div>
            <p className="text-center text-gray-700 text-2xl font-medium">
              Products Variant
            </p>
          </div>
          <div className="md:w-1/5 w-full h-44 shadow-lg rounded-lg bg-white">
            <div className="flex justify-center my-4">
              <GiCutDiamond size={45} color="#FC876C" />
            </div>
            <p className="text-center text-gray-700 text-2xl font-medium">
              Featured Product
            </p>
          </div>
          <div className="md:w-1/5 w-full h-44 shadow-lg rounded-lg bg-white">
            <div className="flex justify-center my-4">
              <AiOutlineHeart size={45} color="#FC876C" />
            </div>
            <p className="text-center text-gray-700 text-2xl font-medium">
              Product Wishlist
            </p>
          </div>
          <div className="md:w-1/5 w-full h-44 shadow-lg rounded-lg bg-white">
            <div className="flex justify-center my-4">
              <MdLocalOffer size={45} color="#FC876C" />
            </div>
            <p className="text-center text-gray-700 text-2xl font-medium">
              Products Flash Deal
            </p>
          </div>
          <div className="md:w-1/5 w-full h-44 shadow-lg rounded-lg bg-white">
            <div className="flex justify-center my-4">
              <MdLocalOffer size={45} color="#FC876C" />
            </div>
            <p className="text-center text-gray-700 text-2xl font-medium">
              Today’s Deal
            </p>
          </div>
          <div className="md:w-1/5 w-full h-44 shadow-lg rounded-lg bg-white">
            <div className="flex justify-center my-4">
              <BiGitCompare size={45} color="#FC876C" />
            </div>
            <p className="text-center text-gray-700 text-2xl font-medium">
              Products Compare
            </p>
          </div>
          <div className="md:w-1/5 w-full h-44 shadow-lg rounded-lg bg-white">
            <div className="flex justify-center my-4">
              <FaShoppingBag size={45} color="#FC876C" />
            </div>
            <p className="text-center text-gray-700 text-2xl font-medium">
              Discounted Product
            </p>
          </div>
          <div className="md:w-1/5 w-full h-44 shadow-lg rounded-lg bg-white">
            <div className="flex justify-center my-4">
              <IoCashOutline size={45} color="#FC876C" />
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
      <div
        className="h-auto flex flex-wrap p-5"
        style={{ backgroundColor: "#F7F9FB" }}
      >
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
          Affordable <span style={{ color: "#F5250A" }}>Pricing </span>
        </p>
        
      </div>
    </div>
  );
};

export default Home;
