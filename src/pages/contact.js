import React, {useState} from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faMapMarkerAlt,
    faEnvelope,
    faPhoneAlt,
    faClock 
} from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com'
import MyMap from '../map/MyMap'
import ScrollAnimation from 'react-animate-on-scroll'
import EmailForm from '../components/EmailForm.js';

const Contact = () => {
    return (
    <Layout>
        <Helmet title="Contact"></Helmet>
        <div className="contact-page">
            <header className="header">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                    <h1 className="title">Contact us</h1>
                </ScrollAnimation>
            </header>
            
            <MyMap />

            <div className="contact-inner-section">
                <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
                    <h1 className="heading">Get in touch</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <h3>Head Office</h3>
                                <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "90px"}}/>
                                <div className="head-office-wrapper pr-lg-5">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-1">
                                                <FontAwesomeIcon icon={faMapMarkerAlt} className="ct-icon"/>
                                            </div>
                                            <div className="col-10">
                                                <h5>SOVI Transport Service Corp</h5>
                                                <p>279 Lý Tự Trọng St, 3rd Floor, Dist. 1, 
                                                    Ho Chi Minh City, Vietnam
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-1">
                                                <FontAwesomeIcon icon={faClock} className="ct-icon"/>
                                            </div>
                                            <div className="col-10">
                                                <p>Mon-Fri: 09:00AM - 06:00PM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-1">
                                                <FontAwesomeIcon icon={faEnvelope} className="ct-icon"/>
                                            </div>
                                            <div className="col-10">
                                                <p>info@example.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-1">
                                                <FontAwesomeIcon icon={faPhoneAlt} className="ct-icon"/>
                                            </div>
                                            <div className="col-10">
                                                <p>+84-310-931-337</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <h3>Send us an email</h3>
                                <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "90px"}}/>
                                <p className="send-email-note mt-0">Have a question or request? Let us know your thoughts by filling this form.</p>
                                <EmailForm/>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    </Layout>
    );
}

export default Contact

