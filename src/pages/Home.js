import React from "react";
import Header from "../components/Navbar/Header";

import panel from "../assets/GLOBAL-BUSINESS-IN-YOUR-HAND.png";
import payment from "../assets/payment.jpg";

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
import TabComponent from "../components/TabComponent";

import Footer from "../components/Footer";
import FeatureComponent from "../components/FeatureComponent";

import img1 from "../assets/iconsandbanners/01.png"
import img2 from "../assets/iconsandbanners/02.png"
import img3 from "../assets/iconsandbanners/03.png"
import img4 from "../assets/iconsandbanners/04.png"
import img5 from "../assets/iconsandbanners/05.png"
import img6 from "../assets/iconsandbanners/06.png"
import img7 from "../assets/iconsandbanners/07.png"
import img8 from "../assets/iconsandbanners/08.png"
import img9 from "../assets/iconsandbanners/09.png"
import img10 from "../assets/iconsandbanners/10.png"
import img11 from "../assets/iconsandbanners/11.png"
import img12 from "../assets/iconsandbanners/12.png"

const Home2 = () => {
  const words = ["Powerful", "Alluring", "Intuitive", "Responsive"];
  let i = 0;
  let counter;
  function typeNow() {
    let word = words[i].split("");
    var loopTyping = function () {
      if (word.length > 0) {
        document.getElementById("text").innerHTML += word.shift();
      } else {
        deleteNow();
        return false;
      }
      counter = setTimeout(loopTyping, 130);
    };
    loopTyping();
  }

  function deleteNow() {
    let word = words[i].split("");
    var loopDeleting = function () {
      if (word.length > 0) {
        word.pop();
        document.getElementById("text").innerHTML = word.join("");
      } else {
        if (words.length > i + 1) {
          i++;
        } else {
          i = 0;
        }
        typeNow();
        return false;
      }
      counter = setTimeout(loopDeleting, 120);
    };
    loopDeleting();
  }
  window.onload = function () {
    typeNow();
  };

  return (
    <div>
      <div className="h-16">
        <Header />
      </div>
      <div className="bg-image flex items-center ">
        <div className="layer">
          <p style={{ fontSize: 30, marginTop: 10 }}>
            Build The Most{" "}
            <span
              id="text"
              className="font-bold text-5xl"
              style={{ color: "#2088df" }}
            ></span>
            <span className="text-red-700 text-4xl">|</span>
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

      <div className="h-auto b py-4">
        <p className="md:text-5xl text-4xl font-bold text-center text-gray-700">
          Glimpses of Dodo
        </p>
        <p className="text-center text-gray-400 text-lg">
          The Most User Friendly eCommerce Platform
        </p>
      </div>

      <div className="my-5 py-5 h-auto">
        <p className="text-center text-6xl font-bold">
          The Best-In-Class Interface
        </p>
        <p className="text-gray-500 text-xl text-center">
          Dodo gives you the Design that No One Can Miss.
        </p>
        <TabComponent />
      </div>
      <div className=" my-5 py-5 h-auto" style={{ backgroundColor: "#F9FAFE" }}>
        <p className="text-center text-6xl font-bold text-gray-700">
          Why Choose Dodo?
        </p>
        <p className="text-gray-500 text-xl text-center">
          Dodo provides you a complete end to end Convertible eCommerce Platform
          with the most fantabulous features ever.
        </p>
        <div className="flex flex-wrap justify-center div-margin">
          <FeatureComponent
            title="Laravel based PHP script"
            icon={<img src={img1} width="50" />}
            desc="Developed in Laravel to give you an amazing experience"
          />
          <FeatureComponent
            title="The Perfectly Responsive Design"
            icon={<img src={img2} width="50" />}
            desc="The entire layout is designed to fit every screen size"
          />
          <FeatureComponent
            title="Multivendor system"
            icon={<img src={img3} width="50" />}
            desc="A feature rich Multivendor System"
          />
          <FeatureComponent
            title="Single Vendor eCommerce"
            icon={<img src={img4} width="50" />}
            desc=" The system can be converted from Multivendor to Single Vendor and
              vice-versa in a click"
          />
          <FeatureComponent
            title="Borderless System"
            icon={<img src={img5} width="50" />}
            desc="Dodo supports multiple currencies to function across International
              Borders"
          />
          <FeatureComponent
            title="Payment Gateways"
            icon={<img src={img6} width="50" />}
            desc="Dodo supports various payment Gateways to enable you accept online payments"
          />
          <FeatureComponent
            title="Products Variant"
            icon={<img src={img7} width="50" />}
            desc="Multiple Variants in Terms of Colour, Model, Size etc. can be added to ensure improved user experience"
          />
          <FeatureComponent
            title="Product Wishlist"
            icon={<img src={img8} width="50" />}
            desc="Wishlist not just allows customers to remember product but also gives you an insight of your customer’s liking and disliking"
          />
          <FeatureComponent
            title="Products Flash Deal"
            icon={<img src={img9} width="50" />}
            desc="Flash Deal is an indispensable part of any eCommerce as only this can create the most required buzz in the market"
          />
          <FeatureComponent
            title="Today’s Deal"
            icon={<img src={img10} width="50" />}
            desc="Another feature to Surprise your customers every now and then and keep them curious about next offer"
          />
          <FeatureComponent
            title="Compare Products"
            icon={<img src={img11} width="50" />}
            desc="eCommerce’s only limitation is that there is no one to guide the customer what to buy when he is confused between similar looking products. Compare Products feature allow them to compare product features and thereby leading them to purchase"
          />
          <FeatureComponent
            title="Free/Flat Shipping"
            icon={<img src={img12} width="50" />}
            desc="Whether you want to ship items for free or you wanna charge Shipping Fee, the choice is only yours"
          />
        </div>
        <div className="flex justify-center my-4">
          <a
            style={{ textDecoration: "none" }}
            href="/cms-features"
            className="w-52 h-12 text-center flex items-center justify-center rounded-3xl  bg-blue-600 text-white shadow-2xl"
          >
            View All Features
          </a>
        </div>
      </div>

      <div className="h-auto flex flex-wrap p-5">
        <div className="w-full md:w-1/2 self-center p-3">
          <p className="md:text-5xl text-4xl font-semibold text-gray-700">
            Multiple International Payment Gateways To Accept Payments
          </p>
          <p className="text-gray-500">
            Accepting online payments easily is the most important requirement
            of nyt eCommerce platform. Therefore, we have enabled Dodo to
            support several payment gateways thereby enabling you to accept
            payments the way you want.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src={payment} />
        </div>
      </div>
      <div
        className="h-auto flex flex-wrap p-5"
        style={{ backgroundColor: "#F9FAFE" }}
      >
        <div className="w-full md:w-1/2">
          <img src={panel} />
        </div>
        <div className="w-full md:w-1/2 self-center p-4">
          <p className="md:text-5xl text-4xl font-semibold text-gray-700">
            Global Business in Your Hands
          </p>
          <p className="text-gray-500">
            Now you need not be bound to your office. Our omnipotent Admin Panel
            allows you to control your Borderless business from anywhere in the
            world let it be your home or your vacation destination. The
            dashboard gives you all the available information w.r.t. Customers,
            Orders and Merchants in a graphical manner making it easy to
            understand in a glance.
          </p>
        </div>
      </div>
      <div className="h-auto py-5 p-4">
        <p className="md:text-6xl text-4xl font-semibold text-center text-gray-700">
          How to
          <span style={{ color: "#5E2CED" }}>
            {" "}
            Start an eCommerce Business{" "}
          </span>
          <br />
          with Dodo?
        </p>
        <div className="flex justify-center flex-wrap">
          <div className="md:w-1/5 w-full h-52 rounded shadow-lg mt-2 mx-2 p-2">
            <div className="flex justify-center pt-3">
              <FiDownload size={40} className="text-gray-700" />
            </div>
            <div className="flex justify-center pt-2">
              <p className="font-semibold text-2xl text-gray-700">Get</p>
            </div>

            <p className="text-center pt-1 text-gray-600">Install Dodo</p>
          </div>
          <div className="md:w-1/5 w-full h-52 rounded shadow-lg mt-2 mx-2 p-2">
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
          <div className="md:w-1/5 w-full h-52 rounded shadow-lg mt-2 mx-2 p-2">
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
          <div className="md:w-1/5 w-full h-52 rounded shadow-lg mt-2 mx-2 p-2">
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
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home2;
