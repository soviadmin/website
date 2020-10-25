import React from 'react';
import { useImage } from "../hooks/useImage";
import about from '../assets/images/h3_sq.jpg'

export default function AboutUs(props) {
    // const imgContainer = useImage();
    return (
        <div className="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-xs-12">
                        <h3>About Us</h3>
                        <p className="mr-5 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, 
                            lorem at egestas gravida, tortor ex tincidunt felis, quis molestie turpis sem 
                            nec ex. Praesent laoreet magna in suscipit volutpat. In euismod metus at sem 
                            lacinia gravida. Suspendisse porta molestie arcu, eu maximus mauris tincidunt hendrerit.
                        </p>
                    </div>
                    <div className="col-lg-5 col-xs-12">
                        <img src={about}/>
                    </div>
                </div>
            </div>
            {/* <button type="button" class="btn btn-primary mt-5">More about us</button> */}
        </div>
    )
}