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
  let content = {
    EN: {
      title: "Home",
    },
    VI: {
      title: "Trang chủ",
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
