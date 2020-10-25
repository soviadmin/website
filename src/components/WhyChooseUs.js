import React from 'react';
import { useImage } from "../hooks/useImage";

export default function WhyChooseUs(props) {
    // const imgContainer = useImage();
    return (
        <div className="feature-eq choose-us">
            <h3>See why people choose us</h3>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-xs-12 pr-5 pl-5">
                        <h5>Fast</h5>
                        <p>Find aute irure dolor in reprehend in voluptate velit esse cillum dolore eu</p>
                    </div>
                    <div className="col-lg-4 col-xs-12 pr-5 pl-5">
                        <h5>Reliable</h5>
                        <p>Find aute irure dolor in reprehend in voluptate velit esse cillum dolore eu</p>
                    </div>
                    <div className="col-lg-4 col-xs-12 pr-5 pl-5">
                        <h5>Customer service</h5>
                        <p>Find aute irure dolor in reprehend in voluptate velit esse cillum dolore eu</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}