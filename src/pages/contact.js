import React, { useState } from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons"
import emailjs from "emailjs-com"
import MyMap from "../map/MyMap"
import ScrollAnimation from "react-animate-on-scroll"
import EmailForm from "../components/EmailForm.js"

const Contact = () => {
  let content = {
    EN: {
      title: "Contact",
      breadcrumb1: "Home",
      breadcrumb2: "Contact",
      heading: "Contact Us",
      cta: "Get In Touch",
      info: {
        title: "Head Office",
        company: "Song Viet Transport Service Corp",
        address: "279 Ly Tu Trong St, 3rd Floor, Dist. 1, HCMC, Vietnam",
        hours: "Mon-Fri: 09:00AM - 06:00PM",
        email: "info@example.com",
        phone: "(+84) 310 931 337",
      },
      form: {
        heading: "Send us an email",
        subheading:
          "Have a question or request? Let us know your thoughts by filling this form",
      },
    },

    VI: {
      title: "Liên hệ",
      breadcrumb1: "Trang chủ",
      breadcrumb2: "Liên hệ",
      heading: "Thông tin liên hệ",
      cta: "Hãy liên hệ với chúng tôi",
      info: {
        title: "Trụ sở chính",
        company: "Công ty cổ phần thương mại và dịch vụ vận tải Sóng Việt",
        address: "279 Lý Tự Trọng, Lầu 3, Q1, TP. Hồ Chính Minh, Việt Nam",
        hours: "Thứ Hai - Thứ Sáu: 09:00 - 18:00",
        email: "info@example.com",
        phone: "(+84) 310 931 337",
      },
      form: {
        heading: "Liên hệ qua email",
        subheading:
          "Bạn có bất cứ thắc mắc hay yêu cầu nào? Hãy cho chúng tôi biết bằng cách điền vào mẫu đơn dưới đây",
      },
    },
  }

  let languageStoredInLocalStorage = localStorage.getItem("language")
  languageStoredInLocalStorage === "en"
    ? (content = content.EN)
    : (content = content.VI)

  return (
    <Layout>
      <Helmet title={content.title}></Helmet>
      <div className="contact-page">
        <header className="header">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/">{content.breadcrumb1}</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {content.breadcrumb2}
                </li>
              </ol>
            </nav>
            <h1 className="title">{content.heading}</h1>
          </ScrollAnimation>
        </header>

        <div className="contact-inner-section">
          <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
            <h1 className="heading">{content.cta}</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <h3>{content.info.title}</h3>
                  <hr
                    class="accent-2 mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: "90px" }}
                  />
                  <div className="head-office-wrapper pr-lg-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-1">
                          <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            className="ct-icon"
                          />
                        </div>
                        <div className="col-10">
                          <h5>{content.info.company}</h5>
                          <p>{content.info.address}</p>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-1">
                          <FontAwesomeIcon icon={faClock} className="ct-icon" />
                        </div>
                        <div className="col-10">
                          <p>{content.info.hours}</p>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-1">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="ct-icon"
                          />
                        </div>
                        <div className="col-10">
                          <p>{content.info.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-1">
                          <FontAwesomeIcon
                            icon={faPhoneAlt}
                            className="ct-icon"
                          />
                        </div>
                        <div className="col-10">
                          <p>{content.info.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <h3>{content.form.heading}</h3>
                  <hr
                    class="accent-2 mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: "90px" }}
                  />
                  <p className="send-email-note mt-0">
                    {content.form.subheading}.
                  </p>
                  <EmailForm />
                </div>
              </div>
            </div>
            <MyMap className="map" />
          </ScrollAnimation>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
