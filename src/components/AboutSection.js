import React from 'react';
import AboutIllustration from "../svg/illustration1.svg";


export default function AboutSection(props) {
    return (
        <div className="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xs-12 header">
                        <h2 className="heading-one">From Ocean to Air,</h2>
                        <h2 className="heading-two">We've got your back</h2>
                        <p className="mr-5 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, 
                            lorem at egestas gravida, tortor ex tincidunt felis, quis molestie turpis sem 
                            nec ex. Praesent laoreet magna in suscipit volutpat. In euismod metus at sem 
                            lacinia gravida. Suspendisse porta molestie arcu, eu maximus mauris tincidunt hendrerit.
                        </p>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <AboutIllustration className="illustration"/>
                    </div>
                </div>
            </div>
        </div>
    )
}