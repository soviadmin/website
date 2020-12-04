import React from 'react';
import AboutIllustration from "../svg/illustration1.svg";
import Img from "gatsby-image"
import { useImage } from "../hooks/useImage"
import ScrollAnimation from 'react-animate-on-scroll'

export default function AboutSection(props) {   
    // const imgContainer = useImage();
    return (
        <div className="about-sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xs-12 header">
                        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                            <h2 className="heading-one">From Ocean to Air,</h2>
                            <h2 className="heading-two">We've got your back</h2>
                            <p className="mr-5 mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, 
                                lorem at egestas gravida, tortor ex tincidunt felis, quis molestie turpis sem 
                                nec ex. Praesent laoreet magna in suscipit volutpat. In euismod metus at sem 
                                lacinia gravida. Suspendisse porta molestie arcu, eu maximus mauris tincidunt hendrerit.
                            </p>
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <ScrollAnimation animateIn="pulse" animateOnce={true}>
                            <AboutIllustration className="illustration"/>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}