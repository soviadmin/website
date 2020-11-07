import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import AboutImage from "../svg/about-image.svg";
import SafetyClaim from "../svg/safety.svg";


const About = () => (
    <Layout>
        <Helmet title="About"></Helmet>
        <div className="about-page">
            <header className="header">
                <h1 className="title">About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            </header>
            <div>
                <div className="intro row">
                    <div className="col-md-6">
                        <h2>We are dedicated providers</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <AboutImage className="intro-image" />
                    </div>
                </div>
                <div className="stats">
                    <h2 className="stats-heading">Over 20 customers have used SOVI service</h2>
                    <div className="row">
                        <div className="col-sm-4">
                            <h2 className="numbers">97%+</h2>
                            <p>Customers satisfied with the service</p>
                        </div>
                        <div className="col-sm-4">
                            <h2 className="numbers">1,000,000+</h2>
                            <p>Tasks completed</p>
                        </div>
                        <div className="col-sm-4">
                            <h2 className="numbers">4,000,000+</h2>
                            <p>Hours of work</p>
                        </div>
                    </div>
                </div>
                <div className="claim">
                    <h2 className="claim-heading">At SOVI, safety is our first priority</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                    </p>
                    <SafetyClaim className="claim-image" />
                </div>
            </div>
        </div>
    </Layout>
)

export default About




