import React from "react"
import FeaturePicture from "../svg/feature.svg"

export default function EquipmentSection() {
  return (
    <div className="feature-eq">
      <h1 className="heading">Feature Equipment.</h1>
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
        <button type="button" class="btn btn-primary view-btn">
          View All Equipment
        </button>
      </div>
    </div>
  )
}
