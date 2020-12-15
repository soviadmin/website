import React from "react"
import FastSVG from "../svg/time.svg"
import QualitySVG from "../svg/badge.svg"
import ReliSVG from "../svg/trust.svg"
import ScrollAnimation from "react-animate-on-scroll"

import dhl from "../assets/images/companies/dhl.png"
import schenker from "../assets/images/companies/schenker.png"
import sarens from "../assets/images/companies/sarens.png"
import craneww from "../assets/images/companies/craneww.png"
import edico from "../assets/images/companies/edico.png"

import dsv from "../assets/images/companies/dsv.png"
import geodis from "../assets/images/companies/geodis.png"
import kn from "../assets/images/companies/k&n.png"
import rhenus from "../assets/images/companies/rhenus.png"
import bollore from "../assets/images/companies/bollore.png"

import hoanglam from "../assets/images/companies/hoanglam.png"
import martech from "../assets/images/companies/martech.png"
import vantage from "../assets/images/companies/vantage.png"
import ptsc from "../assets/images/companies/ptsc.png"
import lilama18 from "../assets/images/companies/lilama18.png"

export default function Testimonials(props) {
  // const imgContainer = useImage();
  let content = {
    EN: {
      title1: "See why people choose us",
      why1: {
        label: "Fast execution",
        text:
          "Find aute irure dolor in reprehend in voluptate velit esse cillum dolore eu",
      },
      why2: {
        label: "Reliability",
        text:
          "Find aute irure dolor in reprehend in voluptate velit esse cillum dolore eu",
      },
      why3: {
        label: "Quality assurance",
        text:
          "Find aute irure dolor in reprehend in voluptate velit esse cillum dolore eu",
      },
      title2: "Our partners",
    },

    VI: {
      title1: "Vì sao khách hàng chọn chúng tôi",
      why1: {
        label: "Xử lý tốc độ nhanh",
        text:
          "Find aute irure dolor in reprehend in voluptate velit esse cillum dolore eu",
      },
      why2: {
        label: "Đáng tin cậy",
        text:
          "Find aute irure dolor in reprehend in voluptate velit esse cillum dolore eu",
      },
      why3: {
        label: "Đảm bảo chất lượng",
        text:
          "Find aute irure dolor in reprehend in voluptate velit esse cillum dolore eu",
      },
      title2: "Các đối tác của SOVI",
    },
  }

  props.language === "en" ? (content = content.EN) : (content = content.VI)

  return (
    <div>
      <div className="testimonials why-choose-us">
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <h1 className="heading-one">{content.title1}</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-xs-12 pr-5 pl-5">
                <FastSVG className="testi-icon" />
                <h5>{content.why1.label}</h5>
                <p>{content.why1.text}</p>
              </div>
              <div className="col-lg-4 col-xs-12 pr-5 pl-5">
                <ReliSVG className="testi-icon" />
                <h5>{content.why2.label}</h5>
                <p>{content.why2.text}</p>
              </div>
              <div className="col-lg-4 col-xs-12 pr-5 pl-5">
                <QualitySVG className="testi-icon" />
                <h5>{content.why3.label}</h5>
                <p>{content.why3.text}</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className="testimonials partners">
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <h1 className="heading-two">{content.title2}</h1>
        </ScrollAnimation>
        <div className="container">
          <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
            {/* Brand Row 1 */}
            <div className="row brands">
              <div className="col-sm-4 col-md">
                <img src={dhl}></img>
              </div>
              <div className="col-sm-4 col-md">
                <img src={schenker}></img>
              </div>
              <div className="col-sm-4 col-md">
                <img src={sarens}></img>
              </div>
              <div className="col-sm-4 col-md">
                <img src={craneww}></img>
              </div>
              <div className="col-sm-4 col-md">
                <img src={kn}></img>
              </div>
            </div>

            {/* Brand Row 2 */}
            <div className="row brands">
              <div className="col-sm-4 col-md">
                <img src={bollore} style={{ width: "100%" }}></img>
              </div>
              <div className="col-sm-4 col-md">
                <img src={geodis}></img>
              </div>
              <div className="col-sm-4 col-md">
                <img src={dsv}></img>
              </div>
              <div className="col-sm-4 col-md">
                <img src={rhenus}></img>
              </div>
              <div className="col-sm-4 col-md">
                <img src={edico} style={{ width: "100%" }}></img>
              </div>
            </div>

            {/* Brand Row 3 */}
            <div className="row brands">
              <div className="col-sm-4 col-md">
                <img src={vantage}></img>
              </div>
              <div className="col-sm-4 col-md">
                <img src={martech} style={{ width: "90%" }}></img>
              </div>
              <div className="col-sm-4 col-md">
                <img src={hoanglam} style={{ width: "70%" }}></img>
              </div>
              <div className="col-sm-4 col-md">
                <img src={ptsc} style={{ width: "60%" }}></img>
              </div>
              <div className="col-sm-4 col-md">
                <img src={lilama18}></img>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
