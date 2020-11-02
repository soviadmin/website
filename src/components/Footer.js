import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faMapMarkerAlt,
    faEnvelope,
    faPhoneAlt 
} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <footer class="page-footer font-small unique-color-dark pt-2 pb-2">
            <div class="container text-center text-md-left mt-5">
                <div class="row mt-3">
                    <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
                        <h6 class="text-uppercase">SOVI Transport Service Corp</h6>
                        <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "90px"}}/>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3"/>162 Pasteur St, Dist. 1, HCMC, Vietnam</p>
                        <p><FontAwesomeIcon icon={faEnvelope} className="mr-3"/> info@example.com</p>
                        <p><FontAwesomeIcon icon={faPhoneAlt} className="mr-3"/> + 01 234 567 88</p>
                        <p><FontAwesomeIcon icon={faPhoneAlt} className="mr-3"/> + 01 234 567 89</p>
                    </div>
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase">Services</h6>
                        <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                        <p><a href="#">Freight</a></p>
                        <p><a href="#">Express</a> </p>
                        <p><a href="#">BrandFlow</a></p>
                        <p><a href="#">Bootstrap Angular</a> </p>
                    </div>
                    <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4 mt-lg-5 mt-sm-0">
                        <h6 class="text-uppercase">Talk to us</h6>
                        {/* <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/> */}
                        <p><button type="button" class="btn btn-primary mt-2">Email</button></p>
                    </div>
                </div>
            </div>
            <hr className="footer-hr"/>
            <div class="footer-copyright text-center py-3">
                <p>Copyright © 2020 SOVI Transport Service Corp. All rights reserved.</p>
            </div>
        </footer>
    )
}
