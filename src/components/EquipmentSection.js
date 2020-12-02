import React from "react"
import FeaturePicture from "../svg/feature.svg"
import Carousel from "react-bootstrap/Carousel";

export default function EquipmentSection() {
  return (
    <div className="feature-eq">
      <h1 className="heading">Feature Equipment.</h1>
      
      <Carousel id="banner">
            <Carousel.Item interval={2000}>
                {/* <Carousel.Caption>
                    <h2>COMPANY HEADER 1</h2>
                    <p>Nulla vitae elit libero, a phacetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 col-xs-12">
                      <FeaturePicture className="feature-pic" />
                    </div>
                    <div className="col-lg-4 col-xs-12">
                      <FeaturePicture className="feature-pic" />
                    </div>
                    <div className="col-lg-4 col-xs-12">
                      <FeaturePicture className="feature-pic" />
                    </div>
                  </div>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 col-xs-12">
                      <FeaturePicture className="feature-pic" />
                    </div>
                    <div className="col-lg-4 col-xs-12">
                      <FeaturePicture className="feature-pic" />
                    </div>
                    <div className="col-lg-4 col-xs-12">
                      <FeaturePicture className="feature-pic" />
                    </div>
                  </div>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 col-xs-12">
                      <FeaturePicture className="feature-pic" />
                    </div>
                    <div className="col-lg-4 col-xs-12">
                      <FeaturePicture className="feature-pic" />
                    </div>
                    <div className="col-lg-4 col-xs-12">
                      <FeaturePicture className="feature-pic" />
                    </div>
                  </div>
                </div>
            </Carousel.Item>
        </Carousel>
        <a href="/equipment">
          <button type="button" class="btn btn-primary my-btn filled-btn">
            See all equipment
          </button>
        </a>
    </div>
  )
}
