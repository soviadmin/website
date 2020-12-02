import React, {useState} from "react"
import Link from "gatsby"
import Helmet from "react-helmet"
import { Tab, Row, Col, Nav } from "react-bootstrap"
import Layout from "../components/layout"
import { navigate } from '@reach/router';
// import { Link, NavLink } from 'react-router-dom'

const Service = () => {
  
  const [param, setParam] = useState("");

  // let location = useLocation();
  // let path = location.pathname.toLocaleLowerCase();
  let location = window.location.href;
  console.log(location);
  // console.log(location.a);
  function handleClick(e) {
      navigate('?location=service_02');
  }
      // var newurl = window.location.href + '?param=hi';
      // window.history.pushState({path:newurl},'',newurl);
  
    // setLocation(true);
    // console.log(location);
  
  return (
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
                    <Nav.Link eventKey="first" href="/service#target=freight">Freight</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" href="/service#target=oog-solution">OOG Solution</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" href="/service#target=custom-clearance">Custom Clearance</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth" href="/service#target=trucking">Trucking</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth" href="/service#target=express">Express</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane id="tab1" eventKey="first">
                    <h1>Freight</h1>
                  </Tab.Pane>
                  <Tab.Pane id="tab2" eventKey="second">
                    <h1>OOG Solution</h1>
                  </Tab.Pane>
                  <Tab.Pane id="tab3" eventKey="third">
                    <h1>Custom Clearance</h1>
                  </Tab.Pane>
                  <Tab.Pane id="tab4" eventKey="fourth">
                    <h1>Trucking</h1>
                  </Tab.Pane>
                  <Tab.Pane path="/tab5" eventKey="fifth">
                    <h1>Express</h1>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </div>
  </Layout>
  );
}

export default Service
