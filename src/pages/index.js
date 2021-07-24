import React, { useState, useEffect, useRef } from "react"
import Helmet from "react-helmet"
import Banner from "../components/Banner"
import EquipmentSection from "../components/EquipmentSection"
import AboutSection from "../components/AboutSection"
import ServiceSection from "../components/ServiceSection"
import Testimonials from "../components/Testimonials"
import ContactSection from "../components/ContactSection"
import Layout from "../components/Layout"

const IndexPage = () => {
  if (typeof window !== "undefined") {
    localStorage.setItem("language", "en")
  }

  const [language, setLanguage] = useState(
    window.localStorage.getItem("language")
  )

  let content = {
    EN: {
      title: "Home",
    },
    VI: {
      title: "Trang chủ",
    },
  }

  language === "en" ? (content = content.EN) : (content = content.VI)
  return (
    <Layout>
      <Helmet title={content.title}></Helmet>
      <Banner />
      <AboutSection />
      <EquipmentSection />
      <ServiceSection />
      <Testimonials />
      <ContactSection />
    </Layout>
  )
}

export default IndexPage
