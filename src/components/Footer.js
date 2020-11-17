import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faMapMarkerAlt,
    faEnvelope,
    faPhoneAlt 
} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <footer class="page-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <h6 class="text-uppercase">SOVI Transport Service Corp</h6>
                        <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "90px"}}/>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3"/>279 Lý Tự Trọng St, 3rd Floor, Dist. 1, HCMC, Vietnam</p>
                        <p><FontAwesomeIcon icon={faEnvelope} className="mr-3"/> info@example.com</p>
                        <p><FontAwesomeIcon icon={faPhoneAlt} className="mr-3"/>0310 931 337</p>
                        <p><FontAwesomeIcon icon={faPhoneAlt} className="mr-3"/>0310 931 337</p>
                    </div>
                    <div class="col-md-2">
                        <h6 class="text-uppercase">Services</h6>
                        <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                        <p><a href="#">Freight</a></p>
                        <p><a href="#">Express</a> </p>
                        <p><a href="#">BrandFlow</a></p>
                        <p><a href="#">Bootstrap Angular</a> </p>
                    </div>
                    <div class="col-md-3">
                        <h6 class="text-uppercase">Equipment</h6>
                        <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                        <p><a href="#">Barges</a></p>
                        <p><a href="#">Prime Mover-Man</a> </p>
                        <p><a href="#">Boom Truck-Hyundai</a></p>
                        <p><a href="#">Heavy Duty Trailer</a> </p>
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
