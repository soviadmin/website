import React, { useState, useEffect, useRef } from "react"
import Helmet from "react-helmet"
import { useImage } from "../../../hooks/useImage"
import Layout from "../../../components/Layout.js"
import ContainerTable from "../../../components/ContainerTable"
import PageHeader from "../../../components/PageHeader"

export default function Eq40SuperRack() {
  const imgContainer = useImage()
  const [language, setLang] = useState(null)

  useEffect(() => {
    setLang(localStorage.getItem("language")) // en or vi
  })

  // Container's title & image should be entered directly this way instead of
  // being passed as states via Link. In case page renders by itself, such
  // parent state would be null.
  let content = {
    EN: {
      title: "40' Super Rack Container",
      breadcrumb: [
        { name: "Equipment", link: "/equipment" },
        { name: "40' Super Rack Container" },
      ],
    },
    VI: {
      title: "Container Super Rack 40'",
      breadcrumb: [
        { name: "Thiết bị", link: "/equipment" },
        { name: "Container Super Rack 40'" },
      ],
    },
  }

  language === "en" ? (content = content.EN) : (content = content.VI)

  return (
    <Layout>
      <Helmet title={content.title}></Helmet>
      <div className="equipment-page">
        <PageHeader
          language={language}
          breadcrumbList={content.breadcrumb}
          title={content.title}
        />
        <ContainerTable
          language={language}
          containerName={content.title}
          containerImg={imgContainer.equipment40_04.childImageSharp.fluid}
          noDoorOpening={true}
          irValues={[12.172, 2.374, 2.264, 3.483]}
          wmValues={[6000, 44000, 0]}
          superRack={true}
        />
      </div>
    </Layout>
  )
}
