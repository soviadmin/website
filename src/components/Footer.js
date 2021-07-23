import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

export default function Footer(props) {
  let content = {
    EN: {
      menu1: {
        title: "Song Viet Transport Service & Trading Corporation",
        item1: "277-279 Ly Tu Trong St, 3rd Floor, Dist. 1, HCMC, Vietnam",
        item2: "Mon-Fri: 09:00AM - 06:00PM",
        item3: "sovi@sovi.vn",
        item4: "(+84) 310 931 337",
      },
      menu2: {
        title: "Services",
        item1: "Freight",
        item2: "OOG Solutions",
        item3: "Custom Clearance",
        item4: "Trucking",
        item5: "Express",
      },
      menu3: {
        title: "Navigation",
        item1: "Home",
        item2: "About",
        item3: "Equipment",
        item4: "Service",
        item5: "Contact",
      },
      menu4: {
        title: "Follow us on",
      },
      copyright:
        "2020 © Song Viet Transport Service & Trading Corp. All rights reserved.",
    },

    VI: {
      menu1: {
        title: "Công ty cổ phần thương mại và dịch vụ vận tải Sóng Việt",
        item1: "277-279 Lý Tự Trọng, Lầu 3, Q1, TP. Hồ Chính Minh, Việt Nam",
        item2: "Thứ Hai - Thứ Sáu: 09:00 - 18:00",
        item3: "sovi@sovi.vn",
        item4: "(+84) 310 931 337",
      },
      menu2: {
        title: "Dịch vụ",
        item1: "Cước vận chuyển",
        item2: "Giải pháp hàng quá khổ",
        item3: "Khai báo hải quan",
        item4: "Vận chuyển đường bộ",
        item5: "Phát chuyển nhanh",
      },
      menu3: {
        title: "Quay lại",
        item1: "Trang chủ",
        item2: "Về chúng tôi",
        item3: "Thiết bị",
        item4: "Dịch vụ",
        item5: "Liên hệ",
      },
      menu4: {
        title: "Theo dõi chúng tôi tại",
      },
      copyright:
        "Mọi bản quyền thuộc về Công Ty Thương Mại và Dịch Vụ Vận Chuyển Sóng Việt © 2020.",
    },
  }

  props.language === "en" ? (content = content.EN) : (content = content.VI)

  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 address">
            <h6 className="text-uppercase">{content.menu1.title}</h6>
            <hr
              className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "90px" }}
            />
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3" />
              {content.menu1.item1}
            </p>
            <p>
              <FontAwesomeIcon icon={faClock} className="mr-3" />
              {content.menu1.item2}
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
              {content.menu1.item3}
            </p>
            <p>
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-3" />
              {content.menu1.item4}
            </p>
          </div>
          <div className="col-md-3">
            <h6 className="text-uppercase">{content.menu2.title}</h6>
            <hr
              className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <a href="/service">{content.menu2.item1}</a>
            </p>
            <p>
              <a href="/service">{content.menu2.item2}</a>
            </p>
            <p>
              <a href="/service">{content.menu2.item3}</a>
            </p>
            <p>
              <a href="/service">{content.menu2.item4}</a>
            </p>
            <p>
              <a href="/service">{content.menu2.item5}</a>
            </p>
          </div>
          <div className="col-md-3 other">
            <h6 className="text-uppercase">{content.menu3.title}</h6>
            <hr
              className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <a href="/">{content.menu3.item1}</a>
            </p>
            <p>
              <a href="/about">{content.menu3.item2}</a>
            </p>
            <p>
              <a href="/equipment">{content.menu3.item3}</a>
            </p>
            <p>
              <a href="/service">{content.menu3.item4}</a>
            </p>
            <p>
              <a href="/contact">{content.menu3.item5}</a>
            </p>
          </div>
          <div className="row">
            <div className="col-12">
              <h6 className="text-uppercase">{content.menu4.title}</h6>
              <hr
                className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <ul style={{listStyle: "none"}}>
                <li className="social-icon">
                  <a href="https://www.facebook.com/sovi.tran.31">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                {/* <li className="social-icon">
                  <a href="https://www.facebook.com/sovi.tran.31">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="footer-hr" /> */}
      <div className="text-center">
        <p className="copyright">{content.copyright}</p>
      </div>
    </footer>
  )
}
