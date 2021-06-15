import React from "react";
import Header from "../components/Navbar/Header";


import img7 from "../assets/images/demo1.png";
import Group from "../assets/Group-7995.png";
import Store from "../assets/STORE-PRESENTATION-1.png";
import panel from "../assets/GLOBAL-BUSINESS-IN-YOUR-HAND.png";
import payment from "../assets/payment.jpg";


import { FiDownload, FiSettings } from "react-icons/fi";
import { FaBullhorn } from "react-icons/fa";
import { GiChart} from "react-icons/gi";
import TabComponent from "../components/TabComponent";
import TabComponent2 from "../components/TabComponent2";
import Footer from "../components/Footer";

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
          <p style={{ fontSize: 28, marginTop: 10 }}>
            Build The Most{" "}
            <span id="text" className="font-bold text-4xl"></span>
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

      <div className="h-auto bg-white py-4">
        <p className="md:text-5xl text-4xl font-bold text-center text-gray-700">
          Glimpses of Dodo
        </p>
        <p className="text-center text-gray-400 text-lg">
          The Most User Friendly eCommerce Platform
        </p>
      </div>
      <div
        className="h-auto my-5 py-5 p-4"
        style={{ backgroundColor: "#F9FAFE" }}
      >
        <p className="md:text-6xl text-4xl font-semibold text-center text-gray-700">
          How to
          <span style={{ color: "#F28C0E" }}>Start an eCommerce Business </span>
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

      <div className="my-5 py-5 h-auto">
        <p className="text-center text-6xl font-bold">
          The Best-In-Class Interface
        </p>
        <p className="text-gray-500 text-xl text-center">
          Dodo gives you the Design that No One Can Miss.
        </p>
        <TabComponent />
      </div>
      <div className="my-5 py-5 h-auto" style={{ backgroundColor: "#F9FAFE" }}>
        <p className="text-center text-6xl font-bold text-gray-700">
          Why Choose Dodo?
        </p>
        <p className="text-gray-500 text-xl text-center">
          Dodo provides you a complete end to end Convertible eCommerce Platform
          with the most fantabulous features ever.
        </p>
        <TabComponent2 />
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
      <div className="h-auto flex flex-wrap p-5">
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
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home2;
