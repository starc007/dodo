import React from "react";
import { Container, Navbar } from "react-bootstrap";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#12121B" }}
      className="h-auto w-full flex justify-between items-center p-4 flex-wrap"
    >
      <div className="flex text-white flex-wrap  footer-div">
        {/* <label>© 2020 - 2021 DOT COM LABS LLP |</label> */}
        <a
          href="#"
          className="text-gray-400 hover:text-gray-400"
          style={{ cursor: "text" }}
        >
          {" "}
          © 2020 - 2021 DOT COM LABS LLP |
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-200">
          {" "}
          Products Support Policy |
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-200">
          {" "}
          Customization Terms & Policy
        </a>
      </div>
      <div className="flex py-2">
        <a href="#">
          <img src={facebook} width="30" />
        </a>
        <a href="#">
          <img src={twitter} width="30" className="mx-2" />
        </a>
        <a href="#">
          <img src={youtube} width="30" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
