import React, { useState, useEffect } from "react"
import { Nav, Navbar, Form } from "react-bootstrap"
import { Link, graphql, useStaticQuery } from "gatsby"
import logo from "../assets/images/logo/logo2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faPhoneAlt,
  faFax,
} from "@fortawesome/free-solid-svg-icons"

export default function Header(props) {
  const [language, setLanguage] = useState(window.localStorage.getItem("language"))
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  useEffect(() => {
    setLanguage(window.localStorage.getItem("language"))
  }, [language])

  const handleSetLanguage = e => {
    setLanguage(e.target.value)
    localStorage.setItem("language", e.target.value)
    props.toggleLanguage(e.target.value)
    window.location.reload()
  }

  let content = {
    EN: {
      nav1: "Home",
      nav2: "About",
      nav3: "Service",
      nav4: "Equipment",
      nav5: "Contact",
      nav6: "Request for Quote",
      language: "English",
    },

    VI: {
      nav1: "Trang chủ",
      nav2: "Giới thiệu",
      nav3: "Dịch vụ",
      nav4: "Thiết bị",
      nav5: "Liên hệ",
      nav6: "Yêu cầu báo giá",
      language: "Tiếng Việt",
    },
  }

  language === "en" ? (content = content.EN) : (content = content.VI)

  return (
    <header id="header">
      <Navbar
        fixed="top"
        expand="lg"
        collapseOnSelect="true"
        className="navbar-bg"
      >
        <div className="row contact-header">
          <div className="col-3">
            <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" />
            (+84) 310 931 337
            {/* {data.site.siteMetadata.title} */}
          </div>
          {/* <div className="col-3">
            <FontAwesomeIcon icon={faFax} className="contact-icon" />
            1234567890
          </div> */}
          <div className="col-3">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            sovi@sovi.vn
          </div>
          <div className="col-lg-3 col-sm-12 language-header">
            <Form.Label className="select-label">{content.language}</Form.Label>
            <Form.Control
              as="select"
              className="language-box"
              value={language}
              onChange={handleSetLanguage}
            >
              <option value="en">EN</option>
              <option value="vi">VI</option>
            </Form.Control>
          </div>
        </div>
        <Navbar.Brand className="brand">
          <Link to="/">
            <img
              src={logo}
              width="140"
              height="60"
              className="d-inline-block align-top"
              alt="SOVI Logistics logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="hamburger" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="section-link" to="/">
              {content.nav1}
            </Link>
            <Link className="section-link" to="/about">
              {content.nav2}
            </Link>
            <Link className="section-link" to="/service">
              {content.nav3}
            </Link>
            <Link className="section-link" to="/equipment">
              {content.nav4}
            </Link>
            <Link className="section-link" to="/contact">
              {content.nav5}
            </Link>
            <Link className="request-link" to="/contact">
              {content.nav6}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}
