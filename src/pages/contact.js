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
import {
    Alert,
    Button
} from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'


const Contact = () => {
    const [state, setState] = useState({
        clientSubject: '',
        clientName: '',
        clientEmail: '',
        clientMobile: '',
        clientMessage: ''
    });
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);


    function handleChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        setState((state) => ({ ...state, [name]: value}));
    }
    
    function handleSubmit(event) {
        console.log("hit submit");

        event.preventDefault();
        const data = {
            subject: state.clientSubject,
            from_name: state.clientName, 
            sender_email: state.clientEmail,
            phone: state.clientMobile,
            message: state.clientMessage, 
        };
        
        emailjs.send(
            process.env.GATSBY_EMAILJS_SERVICE_ID, 
            process.env.GATSBY_EMAILJS_TEMPLATE_ID,
            data, 
            process.env.GATSBY_EMAILJS_USER_ID
          ).then(res => {
            console.log('Email successfully sent!');
            setShowSuccess(true);
            setState()
        })// Handle errors
        .catch(err => {
            console.error('Unable to send email due to error:', err);
            setShowError(true);
        });
        
        event.target.reset();
    }
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
                                <form className="test-mailing" onSubmit={handleSubmit}>
                                    <div>
                                        <input onChange={handleChange} value={state.clientSubject} type="text" name="clientSubject" placeholder="Subject*" maxLength={200} required autoComplete="off"/>
                                        <input onChange={handleChange} value={state.clientName} type="text" name="clientName" placeholder="Full Name*" maxLength={50} required autoComplete="off"/>
                                        <input onChange={handleChange} value={state.clientEmail} type="text" name="clientEmail" placeholder="Email*" maxLength={50} required autoComplete="off"/>
                                        <input onChange={handleChange} value={state.clientMobile} type="text" name="clientMobile" placeholder="Mobile Phone" maxLength={50} autoComplete="off"/>
                                        <textarea
                                            name="clientMessage"
                                            onChange={handleChange}
                                            placeholder="Message*"
                                            required
                                            rows="10"
                                            maxLength="4000"
                                            value={state.clientMessage}
                                            style={{width: '100%', height: '150px'}}
                                        />
                                    </div>
                                    <Alert show={showSuccess} variant="success" onClose={() => setShowSuccess(false)} dismissible>
                                        <p className="mb-0">Your email has been sent!</p>
                                    </Alert>
                                    <Alert show={showError} variant="danger" onClose={() => setShowError(false)} dismissible>
                                        <p className="mb-0">Failed to send email. Please try again.</p>
                                    </Alert>
                                    <input type="submit" value="Submit" className="btn btn-primary my-btn filled-btn"/>
                                </form>
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

