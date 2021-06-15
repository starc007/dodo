import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import img1 from "../assets/images/features_1.png";
import img2 from "../assets/images/features_2.png";
import img3 from "../assets/images/features_3.png";
import img4 from "../assets/images/features_4.png";
import img5 from "../assets/images/features_5.png";
import img6 from "../assets/images/features_6.png";

const TabComponent = () => {
  return (
    <div className="h-auto mt-4">
      <Tab.Container defaultActiveKey="first">
        <div>
          <Nav variant="pills" className="flex-row justify-center">
            <Nav.Item>
              <Nav.Link eventKey="first" className=" w-auto text-center  ">
                Customer Website
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className=" w-auto text-center  ">
                Admin Panel
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className=" w-auto text-center  ">
                Seller Panel
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <Tab.Content de>
          <Tab.Pane eventKey="first" className="mt-3 ml-5 mr-5">
            <div className="flex flex-wrap mt-5 justify-center div-margin">
              <div className="md:w-1/4 w-full h-auto py-4  mt-4">
                <div className="flex justify-center items-center">
                  <img src={img1} />
                </div>
                <p className="font-semibold text-xl text-center pt-2">
                  Laravel Based PHP Script
                </p>
                <p className="text-gray-600 text-center">
                  Developed in Laravel to give you an amazing experience
                </p>
              </div>

              <div className="md:w-1/4 w-full h-auto py-4  mt-4">
                <div className="flex justify-center items-center">
                  <img src={img2} />
                </div>
                <p className="font-semibold text-xl text-center pt-2">
                  The Perfectly Responsive Design
                </p>
                <p className="text-gray-600 text-center">
                  The entire layout is designed to fit every screen size
                </p>
              </div>

              <div className="md:w-1/4 w-full h-auto py-4  mt-4">
                <div className="flex justify-center items-center">
                  <img src={img3} />
                </div>
                <p className="font-semibold text-xl text-center pt-2">
                  Multivendor System
                </p>
                <p className="text-gray-600 text-center">
                  A feature rich Multivendor System
                </p>
              </div>
              <div className="md:w-1/4 w-full h-auto py-4  mt-4">
                <div className="flex justify-center items-center">
                  <img src={img4} />
                </div>
                <p className="font-semibold text-xl text-center pt-2">
                  Single Vendor eCommerce
                </p>
                <p className="text-gray-600 text-center">
                  The system can be converted from Multivendor to Single Vendor
                  and vice-versa in a click
                </p>
              </div>
              <div className="md:w-1/4 w-full h-auto py-4  mt-4">
                <div className="flex justify-center items-center">
                  <img src={img5} />
                </div>
                <p className="font-semibold text-xl text-center pt-2">
                  Borderless System
                </p>
                <p className="text-gray-600 text-center">
                  Dodo supports multiple currencies to function across
                  International Borders
                </p>
              </div>
              <div className="md:w-1/4 w-full h-auto py-4  mt-4">
                <div className="flex justify-center items-center">
                  <img src={img6} />
                </div>
                <p className="font-semibold text-xl text-center pt-2">
                  Payment Gateways
                </p>
                <p className="text-gray-600 text-center">
                  Dodo supports various payment Gateways to enable you accept
                  online payments
                </p>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="second">hey</Tab.Pane>
          <Tab.Pane eventKey="third">hii</Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default TabComponent;
