import React from "react"
import FastSVG from "../svg/fast.svg"
import QualitySVG from "../svg/quality.svg"
import ReliSVG from "../svg/reliability.svg"


export default function Testimonials() {
  // const imgContainer = useImage();
  return (
    <div>
      <div className="testimonials why-choose-us">
        <h1 className="heading-one">See why people choose us.</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xs-12 pr-5 pl-5">
              <FastSVG className="testi-icon"/>
              <h5>Fast execution</h5>
              <p>
                Find aute irure dolor in reprehend in voluptate velit esse
                cillum dolore eu
              </p>
            </div>
            <div className="col-lg-4 col-xs-12 pr-5 pl-5">
              <ReliSVG className="testi-icon"/>
              <h5>Reliability</h5>
              <p>
                Find aute irure dolor in reprehend in voluptate velit esse
                cillum dolore eu
              </p>
            </div>
            <div className="col-lg-4 col-xs-12 pr-5 pl-5">
              <QualitySVG className="testi-icon"/>
              <h5>Quality assurance</h5>
              <p>
                Find aute irure dolor in reprehend in voluptate velit esse
                cillum dolore eu
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials partners">
        <h1 className="heading-two">Our Partners.</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-xs-12">Logo 1</div>
            <div className="col-lg-2 col-xs-12">Logo 2</div>
            <div className="col-lg-2 col-xs-12">Logo 3</div>
            <div className="col-lg-2 col-xs-12">Logo 4</div>
            <div className="col-lg-2 col-xs-12">Logo 5</div>
            <div className="col-lg-2 col-xs-12">Logo 6</div>
          </div>
        </div>
      </div>
    </div>
  )
}
