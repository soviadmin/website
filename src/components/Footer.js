import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faMapMarkerAlt,
    faEnvelope,
    faPhoneAlt,
    faClock,
} from '@fortawesome/free-solid-svg-icons'
import { 
    faFacebookF,
    faLinkedinIn
} from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <footer class="page-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h6 class="text-uppercase">SOVI Transport Service Corp</h6>
                        <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "90px"}}/>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3"/>279 Lý Tự Trọng St, 3rd Floor, Dist. 1, HCMC, Vietnam</p>
                        <p><FontAwesomeIcon icon={faClock} className="mr-3"/>Mon-Fri: 09:00AM - 06:00PM</p>
                        <p><FontAwesomeIcon icon={faEnvelope} className="mr-3"/> info@example.com</p>
                        <p><FontAwesomeIcon icon={faPhoneAlt} className="mr-3"/>+84-310-931-337</p>
                    </div>
                    <div class="col-md-2">
                        <h6 class="text-uppercase">Services</h6>
                        <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                        <p><a href="/service">Freight</a></p>
                        <p><a href="/service">OOG</a> </p>
                        <p><a href="/service">Custom Clearance</a></p>
                        <p><a href="/service">Trucking</a> </p>
                        <p><a href="/service">Express</a> </p>
                    </div>
                    <div class="col-md-2">
                        <h6 class="text-uppercase">Other Links</h6>
                        <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                        <p><a href="/">Home</a></p>
                        <p><a href="/about">About</a> </p>
                        <p><a href="/equipment">Equipment</a></p>
                        <p><a href="/service">Service</a> </p>
                        <p><a href="/contact">Contact</a> </p>
                    </div>
                    <div class="col-md-2">
                        <h6 class="text-uppercase">Follow us</h6>
                        <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                        <ul>
                            <li className="social-icon"><a href="https://www.facebook.com/sovi.tran.31" ><FontAwesomeIcon icon={faFacebookF}/></a></li>
                            <li className="social-icon"><a href="#" ><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="footer-hr"/>
            <div class="text-center">
                <p className="copyright">Copyright © 2020 SOVI Transport Service Corp. All rights reserved.</p>
            </div>

        </footer>
    )
}
