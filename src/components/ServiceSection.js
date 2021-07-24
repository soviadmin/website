import React from "react"
// import { navigate } from "@reach/router"
import ScrollAnimation from "react-animate-on-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"

import OOGIcon from "../svg/oog.svg"
import CustomClearanceIcon from "../svg/customs.svg"
import TruckingIcon from "../svg/trucking.svg"
import FreightIcon from "../svg/freight.svg"
import ExpressIcon from "../svg/express.svg"

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
        desc: "Flat Rack/Open Top/Buck",
      },
      ser3: {
        name: "Custom Clearance",
        desc: "Transit formalities & Cargo",
      },
      ser4: {
        name: "Trucking",
        desc: "More info",
      },
      ser5: {
        name: "Express",
        desc: "Nationwide Services Available",
      },
      ser6: {
        name: "Supporting Services",
        desc: "Stuffing/Unstuffing, Lashing, Certification,...",
      },
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
        desc: "Flat Rack/Open Top/Buck",
      },
      ser3: {
        name: "Khai báo hải quan",
        desc: "Quá cảnh & Xuất nhập khẩu", //"Thủ tục & Hàng hoá",
      },
      ser4: {
        name: "Vận chuyển đường bộ",
        desc: "Thêm thông tin",
      },
      ser5: {
        name: "Phát chuyển nhanh",
        desc: "Chuyển phát toàn quốc",
      },
      ser6: {
        name: "Các dịch vụ hỗ trợ",
        desc: "Đóng/dỡ hàng, Chằng buộc, Chứng nhận,...",
      },
      button: "Xem tất cả dịch vụ",
    },
  }

  props.language === "en" ? (content = content.EN) : (content = content.VI)

  // function handleClick(e) {
  //   navigate("/service/location=02")
  // }

  return (
    <div className="our-services">
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <h1 className="heading">{content.title}</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xs-12">
              <a href="/service">
                <div className="card mb-5">
                  <div className="card-body">
                    <FreightIcon className="service-icon" />
                    <h5 className="card-title">{content.ser1.name}</h5>
                    <p className="card-text">{content.ser1.desc}</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-6 col-xs-12">
              <a href="/service">
                <div className="card mb-5">
                  <div className="card-body">
                    <OOGIcon className="service-icon" />
                    <h5 className="card-title">{content.ser2.name}</h5>
                    <p className="card-text">{content.ser2.desc}</p>
                  </div>
                </div>
              </a>
            </div>
            {/* <div className="col-lg-4 col-xs-12">
              <a href="/service">
                <div className="card mb-5">
                  <div className="card-body">
                    <CustomClearanceIcon className="service-icon" />
                    <h5 className="card-title">{content.ser3.name}</h5>
                    <p className="card-text">{content.ser3.desc}</p>
                  </div>
                </div>
              </a>
            </div> */}
          </div>
          {/* ROW 2 */}
          <div className="row">
            <div className="col-lg-6 col-xs-12">
              <a href="/service">
                <div className="card mb-5">
                  <CustomClearanceIcon
                    className="service-icon"
                    style={{
                      width: "9rem",
                      marginBottom: "-0.5rem",
                      marginTop: "2rem",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{content.ser3.name}</h5>
                    <p className="card-text">{content.ser3.desc}</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-6 col-xs-12">
              <a href="/service">
                <div className="card mb-5">
                  <ExpressIcon
                    className="service-icon"
                    style={{
                      width: "6rem",
                      marginBottom: "0rem",
                      marginTop: "1rem",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{content.ser6.name}</h5>
                    <p className="card-text">{content.ser6.desc}</p>
                  </div>
                </div>
              </a>
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
            <FontAwesomeIcon
              style={{ marginLeft: "5px", paddingTop: "3px" }}
              icon={faCaretRight}
            />
          </button>
        </a>
      </ScrollAnimation>
    </div>
  )
}
