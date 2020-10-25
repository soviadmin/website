import React from 'react';
import { useImage } from "../hooks/useImage";

export default function GetQuote(props) {
    // const imgContainer = useImage();
    return (
        <div className="get-quote">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-xs-12">
                        <h3>Get a free quote now</h3>
                        <p className="mr-5 mt-4">
                            Find aute irure dolor in reprehend in voluptate velit esse cillu
                        </p>
                    </div>
                    <div className="col-lg-5 col-xs-12">
                        
                    </div>
                </div>
            </div>
            {/* <button type="button" class="btn btn-primary mt-5">More about us</button> */}
        </div>
    )
}