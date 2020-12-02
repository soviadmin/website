import React from "react"
import Link from 'gatsby'
import { navigate } from '@reach/router';

export default function ServiceSection(props) {
  
  function handleClick(e) {
    navigate('/service/location=02');
  }

  return (
    <div className="our-services">
      <h1 className="heading">Our Services.</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-xs-12">
            <div class="card mb-5">
              <div class="card-body">
                <h5 class="card-title">Freight</h5>
                <p className="card-text">
                  Ocean & Air
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xs-12">
              <div class="card mb-5">
                <div class="card-body">
                  <h5 class="card-title">OOG Solution</h5>
                  <p className="card-text">
                    FR/OT/Buck
                  </p>
                </div>
              </div>
          </div>
          <div className="col-lg-4 col-xs-12">
            <div class="card mb-5">
              <div class="card-body">
                <h5 class="card-title">Custom Clearance</h5>
                <p className="card-text">
                  Find aute irure dolor in reprehend in voluptate velit esse
                  cillum.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ROW 2 */}
        <div className="row">
          <div className="col-lg-4 col-xs-12">
            <div class="card mb-5">
              <div class="card-body">
                <h5 class="card-title">Trucking</h5>
                <p className="card-text">
                  Find aute irure dolor in reprehend in voluptate velit esse
                  cillum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xs-12">
            <div class="card mb-5">
              <div class="card-body">
                <h5 class="card-title">Express</h5>
                <p className="card-text">
                  Find aute irure dolor in reprehend in voluptate velit esse
                  cillum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="/service">
        <button type="button" class="btn btn-primary my-btn filled-btn mt-3 mb-3">
          See all services  
        </button>
      </a>
    </div>
  )
}
