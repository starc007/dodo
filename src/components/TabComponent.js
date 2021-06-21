import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";

const TabComponent = () => {
  return (
    <div className="h-auto mt-4">
      <Tab.Container defaultActiveKey="first">
        <div>
          <Nav variant="pills" className="flex-row justify-center">
            <Nav.Item>
              <Nav.Link eventKey="first" className=" w-auto text-center  ">
                Shopping Website
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className=" w-auto text-center  ">
                Customer Panel
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className=" w-auto text-center  ">
                Seller Store
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth" className=" w-auto text-center  ">
                Seller Panel
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth" className=" w-auto text-center  ">
                Admin Panel
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <Tab.Content de>
          <Tab.Pane eventKey="first" className="mt-3 ml-5 mr-5">
            <div className="bg-image-2 flex items-center justify-center">
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
          </Tab.Pane>
          <Tab.Pane eventKey="second">hey</Tab.Pane>
          <Tab.Pane eventKey="third">hii</Tab.Pane>
          <Tab.Pane eventKey="fourth">hii</Tab.Pane>
          <Tab.Pane eventKey="fifth">hii</Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default TabComponent;
