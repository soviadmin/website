import React from "react"
import Link from "gatsby"
import Helmet from "react-helmet"
import { Tab, Row, Col, Nav } from "react-bootstrap"
import Layout from "../components/layout"

const Service = () => (
  <Layout>
    <Helmet title="Service"></Helmet>
    <div className="service-page">
      <header className="header">
        <h1 className="title">Our Services</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
      </header>
      <div>
        <div className="intro">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={4}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Service 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Service 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Service 3</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Service 4</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">Service 5</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane id="tab1" eventKey="first">
                    <h1> Tab oneeee</h1>
                  </Tab.Pane>
                  <Tab.Pane id="tab2" eventKey="second">
                    <h1> Tab twoooo</h1>
                  </Tab.Pane>
                  <Tab.Pane id="tab3" eventKey="third">
                    <h1> Tab threeee</h1>
                  </Tab.Pane>
                  <Tab.Pane id="tab4" eventKey="fourth">
                    <h1> Tab fourrrrr</h1>
                  </Tab.Pane>
                  <Tab.Pane path="/tab5" eventKey="fifth">
                    <h1> Tab fiveeee</h1>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </div>
  </Layout>
)

export default Service
