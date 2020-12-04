import React from "react"
import FastSVG from "../svg/time.svg"
import QualitySVG from "../svg/badge.svg"
import ReliSVG from "../svg/trust.svg"
import ScrollAnimation from 'react-animate-on-scroll'

export default function Testimonials() {
  // const imgContainer = useImage();
  return (
    <div>
      <div className="testimonials why-choose-us">
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <h1 className="heading-one">See why people choose us.</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
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
        </ScrollAnimation>
      </div>
      <div className="testimonials partners">
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <h1 className="heading-two">Our Partners.</h1>
        </ScrollAnimation>
        <div className="container">
          <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
            <div className="row">
              <div className="col-lg-2 col-xs-12">Logo 1</div>
              <div className="col-lg-2 col-xs-12">Logo 2</div>
              <div className="col-lg-2 col-xs-12">Logo 3</div>
              <div className="col-lg-2 col-xs-12">Logo 4</div>
              <div className="col-lg-2 col-xs-12">Logo 5</div>
              <div className="col-lg-2 col-xs-12">Logo 6</div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
