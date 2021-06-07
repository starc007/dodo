import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap';

const TabComponent = () => {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-wrap mt-2">
              <Nav.Item>
                <Nav.Link
                  className="h-40 md:w-80 w-full shadow-2xl rounded pt-4"
                  eventKey="first"
                >
                  <div>
                    <label className="text-xl text-gray-800 font-medium">
                      Efficient Seller Panel
                    </label>
                    <p className="text-gray-600">
                      Organized seller panel to manage products, orders, income.
                      Every seller has a separate shop.
                    </p>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="h-40 md:w-80 w-full my-4 shadow-2xl rounded pt-4"
                  eventKey="second"
                >
                  <div>
                    <label className="text-xl text-gray-800 font-medium">
                      Powerful Admin Panel
                    </label>
                    <p className="text-gray-600">
                      Behind this whole system there is a powerful admin panel
                      from where admin can manage full system.
                    </p>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="h-40 md:w-80 w-full shadow-2xl rounded pt-4"
                  eventKey="third"
                >
                  <div>
                    <label className="text-xl text-gray-800 font-medium">
                      Exclusive Customer Profile
                    </label>
                    <p className="text-gray-600">
                      Purchase & order history, profile image, information and
                      shipping address are editable.
                    </p>
                  </div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content className="mx-2 rounded">
              <Tab.Pane eventKey="first" className="w-full mt-2">
                <div className="bg-image-2 flex items-center justify-center">
                  <div className="layer">
                    <p style={{ fontSize: 22, marginTop: 20 }}>MOST POWERFUL</p>

                    <p className="p-style">Active eCommerce CMS</p>

                    <p style={{ fontSize: 22 }}>
                      A powerful platform to make you an eCommerce entrepreneur
                    </p>
                    <div className="btn">
                      <a
                        href="#"
                        className="btn-1 hover:bg-white hover:text-black"
                      >
                        Browse Frontend
                      </a>
                      <a
                        href="#"
                        className="btn-2 hover:bg-white hover:text-black"
                      >
                        Browse Admin
                      </a>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">hey</Tab.Pane>
              <Tab.Pane eventKey="third">hii</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
}

export default TabComponent
