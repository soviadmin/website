import React from "react"
import Link from "gatsby"
import { navigate } from "@reach/router"
import ScrollAnimation from "react-animate-on-scroll"

export default function ServiceSection(props) {
  let content = {
    EN: {
      title: "Our Services",
      ser1: {
        name: "Freight",
        desc: "Ocean & Air",
      },
      ser2: {
        name: "OOG Solution",
        desc: "Flatrack/Open Top/Buck",
      },
      ser3: {
        name: "Custom Clearance",
        desc: "FR/OT/Buck",
      },
      ser4: {
        name: "Trucking",
        desc: "FR/OT/Buck",
      },
      ser5: {
        name: "Express",
        desc: "FR/OT/Buck",
      },
      button: "See all services",
      button: "See all services",
    },

    VI: {
      title: "Dịch vụ của chúng tôi",
      ser1: {
        name: "Cước vận chuyển",
        desc: "Đường biển & Hàng không",
      },
      ser2: {
        name: "Giải pháp hàng quá khổ",
        desc: "Flatrack/Open Top/Buck",
      },
      ser3: {
        name: "Khai báo hải quan",
        desc: "Thêm thông tin",
      },
      ser4: {
        name: "Vận chuyển đường bộ",
        desc: "Thêm thông tin",
      },
      ser5: {
        name: "Phát chuyển nhanh",
        desc: "Thêm thông tin",
      },
      button: "Xem tất cả dịch vụ",
    },
  }

  props.language === "en" ? (content = content.EN) : (content = content.VI)

  function handleClick(e) {
    navigate("/service/location=02")
  }

  return (
    <div className="our-services">
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <h1 className="heading">{content.title}.</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xs-12">
              <div className="card mb-5">
                <div className="card-body">
                  <h5 className="card-title">{content.ser1.name}</h5>
                  <p className="card-text">{content.ser1.desc}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xs-12">
              <div className="card mb-5">
                <div className="card-body">
                  <h5 className="card-title">{content.ser2.name}</h5>
                  <p className="card-text">{content.ser2.desc}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xs-12">
              <div className="card mb-5">
                <div className="card-body">
                  <h5 className="card-title">{content.ser3.name}</h5>
                  <p className="card-text">{content.ser3.desc}</p>
                </div>
              </div>
            </div>
          </div>
          {/* ROW 2 */}
          <div className="row service-row2">
            <div className="col-lg-6 col-xs-12">
              <div className="card mb-5">
                <div className="card-body">
                  <h5 className="card-title">{content.ser4.name}</h5>
                  <p className="card-text">{content.ser4.desc}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xs-12">
              <div className="card mb-5">
                <div className="card-body">
                  <h5 className="card-title">{content.ser5.name}</h5>
                  <p className="card-text">{content.ser5.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="pulse" animateOnce={true}>
        <a href="/service">
          <button
            type="button"
            className="btn btn-primary my-btn filled-btn mt-3 mb-3"
          >
            {content.button}
          </button>
        </a>
      </ScrollAnimation>
    </div>
  )
}
