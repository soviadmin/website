import React, { useState } from "react"
import { Nav, Navbar, Form } from "react-bootstrap"
import { Link } from "gatsby"
import logo from "../assets/images/logo.png"

export default function Header(props) {
  let languageStoredInLocalStorage = localStorage.getItem("language")
  const [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "en"
  )

  const handleSetLanguage = e => {
    setLanguage(e.target.value)
    storeLanguageInLocalStorage(e.target.value)
    props.toggleLanguage(e.target.value)
  }

  let content = {
    EN: {
      nav1: "Home",
      nav2: "About",
      nav3: "Service",
      nav4: "Equipment",
      nav5: "Contact",
      nav6: "Request for Quote",
    },

    VI: {
      nav1: "Trang chủ",
      nav2: "Về SOVI",
      nav3: "Dịch vụ",
      nav4: "Thiết bị",
      nav5: "Liên hệ",
      nav6: "Yêu cầu báo giá",
    },
  }

  language === "en" ? (content = content.EN) : (content = content.VI)

  return (
    <header id="header">
      <Navbar fixed="top" expand="lg" collapseOnSelect="true" bg="light">
        <Navbar.Brand className="brand">
          <img
            src={logo}
            width="140"
            height="60"
            className="d-inline-block align-top"
            alt="SOVI Logistics logo"
          />
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
            <Form.Control
              as="select"
              className="language-box"
              value={language}
              onChange={handleSetLanguage}
            >
              <option value="en">EN</option>
              <option value="vi">VI</option>
            </Form.Control>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

function storeLanguageInLocalStorage(language) {
    localStorage.setItem("language", language);
  }
