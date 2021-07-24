import React, { useEffect, useRef, useState } from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons"
import ScrollAnimation from "react-animate-on-scroll"
import EmailForm from "../components/EmailForm.js"
import { useImage } from "../hooks/useImage"
import Img from "gatsby-image"
import PageHeader from "../components/PageHeader"

const Contact = () => {
  const imgContainer = useImage()

  let content = {
    EN: {
      title: "Contact",
      breadcrumb: [{ name: "Contact" }],
      heading: "Contact Us",
      cta: "Get In Touch",
      info: {
        title: "Head Office",
        company: "Song Viet Transport Service & Trading Corporation",
        address: "277-279 Ly Tu Trong St, 3rd Floor, Dist. 1, HCMC, Vietnam",
        hours: "Mon-Fri: 09:00AM - 06:00PM",
        email: "sovi@sovi.vn",
        phone: "(+84) 310 931 337",
      },
      form: {
        heading: "Send us an email",
        subheading:
          "Have a question or request? Let us know by filling out this form",
      },
    },

    VI: {
      title: "Liên hệ",
      breadcrumb: [{ name: "Liên hệ" }],
      heading: "Thông tin liên hệ",
      cta: "Hãy liên hệ với chúng tôi",
      info: {
        title: "Trụ sở chính",
        company: "Công ty cổ phần thương mại và dịch vụ vận tải Sóng Việt",
        address: "277-279 Lý Tự Trọng, Lầu 3, Q1, TP. Hồ Chính Minh, Việt Nam",
        hours: "Thứ Hai - Thứ Sáu: 09:00 - 18:00",
        email: "sovi@sovi.vn",
        phone: "(+84) 310 931 337",
      },
      form: {
        heading: "Liên hệ qua email",
        subheading:
          "Bạn có thắc mắc hay yêu cầu nào? Hãy cho chúng tôi biết bằng cách điền vào mẫu đơn dưới đây",
      },
    },
  }

  if (localStorage) {
    if (localStorage.getItem("language") == "en") {
      content = content.EN
    } else {
      content = content.VI
    }
  } else {
    content = content.EN
  }
  return (
    <Layout>
      <Helmet title={content.title}></Helmet>
      <div className="contact-page">
        <PageHeader
          language={language}
          breadcrumbList={content.breadcrumb}
          title={content.title}
          heading={content.heading}
        />
        {/* Edit this map's CSS using margin-top of _contact.scss/contact-inner-section class */}
        {/* <MyMap className="map" /> */}
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
                    className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
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
                  <Img
                    className="mb-sm-4 mb-4 mr-lg-3"
                    fluid={imgContainer.sovi_map.childImageSharp.fluid}
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <h3>{content.form.heading}</h3>
                  <hr
                    className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: "90px" }}
                  />
                  <p className="send-email-note mt-0">
                    {content.form.subheading}.
                  </p>
                  <EmailForm language={language} />
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
