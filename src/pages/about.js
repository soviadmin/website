import React, {useState, useEffect, useRef} from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import AboutImage from "../svg/about-image.svg";
import SafetyClaim from "../svg/safety.svg";
import AnimatedNumber from 'react-animated-number'
import useOnScreen from '../hooks/useOnScreen';
import ScrollAnimation from 'react-animate-on-scroll'

const About = () => {
    
    const [state, setState] = useState({
        perc_customer: 0,
        num_tasks: 0,
        num_hours: 0
    });
    const ref = useRef();
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if(isVisible === true) {
            setState({
                ...state,
                perc_customer: 97,
                num_tasks: 1000000,
                num_hours: 4000000
            });
        }
    }, [isVisible]);
    
    return (
    <Layout>
        <Helmet title="About"></Helmet>
        <div className="about-page">
            <header className="header">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">About</li>
                        </ol>
                    </nav>
                <h1 className="title">About Us</h1>
                </ScrollAnimation>
            </header>
            
            <div>
                <div className="intro row">
                    <div className="col-md-6">
                        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                            <h2>We are dedicated providers</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                            </p>
                        </ScrollAnimation>
                    </div>
                    <div className="col-md-6">
                        <ScrollAnimation animateIn="bounceIn" animateOnce={true}>
                            <AboutImage className="intro-image" />
                        </ScrollAnimation>
                    </div>
                </div>
                    <div className="stats">
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <h2 className="stats-heading">Over 1,500 customers have used SOVI services</h2>
                        </ScrollAnimation>
                        <div className="row" ref={ref}>
                            <div className="col-sm-4">
                                <AnimatedNumber
                                    value={state.perc_customer}
                                    className='numbers'
                                    formatValue={v => v.toFixed(0)}
                                    duration={1000}
                                    component={"text"}
                                    frameStyle={perc => (
                                        { opacity: perc / 100 }
                                    )}
                                /><span className='numbers'>%</span>
                                <p>Customers satisfied with the service</p>
                            </div>
                            <div className="col-sm-4">
                                <AnimatedNumber
                                    value={state.num_tasks}
                                    className='numbers'
                                    formatValue={v => v.toLocaleString('en-US', { minimumFractionDigits: 0 })}
                                    duration={1000}
                                    frameStyle={perc => (
                                        { opacity: perc / 100 }
                                    )}
                                /><span className='numbers'>+</span>
                                <p>Tasks completed</p>
                            </div>
                            <div className="col-sm-4">
                                <AnimatedNumber
                                    value={state.num_hours}
                                    className='numbers'
                                    formatValue={v => v.toLocaleString()}
                                    duration={1000}
                                    frameStyle={perc => (
                                        { opacity: perc / 100 }
                                    )}
                                /><span className='numbers'>+</span>
                                <p>Hours of work</p>
                            </div>
                        </div>
                    </div>
                <div className="claim">
                    <ScrollAnimation animateIn="pulse" animateOnce={true}>
                        <h2 className="claim-heading">At SOVI, safety is our first priority</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                        </p>
                        <SafetyClaim className="claim-image" />
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    </Layout>
    );
}

export default About




