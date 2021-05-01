import React, { useState, useEffect, useRef } from "react"
import Helmet from "react-helmet"
import { Tab, Tabs } from "react-bootstrap"
import ScrollAnimation from "react-animate-on-scroll"
import { useImage } from "../../../hooks/useImage"
import Img from "gatsby-image"
import Layout from "../../../components/Layout.js"

const Eq20Gp = () => {
  const [language, setLanguage] = useState("en")
  const languageStoredInLocalStorage = useRef()

  useEffect(() => {
    languageStoredInLocalStorage.current = localStorage.getItem("language")
    setLanguage(languageStoredInLocalStorage.current)
  }, [])

  let content = {
    EN: {
      title: "20' General Purpose Container",
      breadcrumb1: "Home",
      breadcrumb2: "Equipment",
      breadcrumb3: "20' General Purpose Container",
      heading: "20' General Purpose Container",
    },
    VI: {
      title: "Container Bách hoá 20'",
      breadcrumb1: "Trang chủ",
      breadcrumb2: "Thiết bị",
      breadcrumb3: "Container Bách hoá 20'",
      heading: "Container Bách hoá 20'",
    },
  }

  language === "en" ? (content = content.EN) : (content = content.VI)
  return (
    <Layout>
      <Helmet title={content.title}></Helmet>
      <div className="equipment-page">
        <header className="header">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/">{content.breadcrumb1}</a>
                </li>
                <li class="breadcrumb-item" aria-current="page">
                  <a href="/equipment">{content.breadcrumb2}</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {content.breadcrumb3}
                </li>
              </ol>
            </nav>
            <h1 className="title">{content.heading}</h1>
          </ScrollAnimation>
        </header>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <div className="equipment-desc">
            <h2>Component</h2>
          </div>
        </ScrollAnimation>
      </div>
    </Layout>
  )
}

export default Eq20Gp

