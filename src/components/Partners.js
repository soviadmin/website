import React from 'react';
import { useImage } from "../hooks/useImage";

export default function Partners(props) {
    // const imgContainer = useImage();
    return (
        <div className="feature-eq">
            <h3>Our Partners</h3>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-xs-12">
                        Logo 1
                    </div>
                    <div className="col-lg-2 col-xs-12">
                    Logo 2
                    </div>
                    <div className="col-lg-2 col-xs-12">
                    Logo 3
                    </div>
                    <div className="col-lg-2 col-xs-12">
                    Logo 4
                    </div>
                    <div className="col-lg-2 col-xs-12">
                    Logo 5
                    </div>
                    <div className="col-lg-2 col-xs-12">
                    Logo 6
                    </div>
                </div>
            </div>
        </div>
    )
}