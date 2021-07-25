import React, { useState, useEffect, useRef } from "react"
import Helmet from "react-helmet"
import { useImage } from "../../../hooks/useImage"
import Layout from "../../../components/Layout.js"
import ContainerTable from "../../../components/ContainerTable"
import PageHeader from "../../../components/PageHeader"

export default function Eq20Reefer() {
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
      title: "20' Reefer Container",
      breadcrumb: [
        { name: "Equipment", link: "/equipment" },
        { name: "20' Reefer Container" },
      ],
    },
    VI: {
      title: "Container lạnh 20'",
      breadcrumb: [
        { name: "Thiết bị", link: "/equipment" },
        { name: "Container lạnh 20'" },
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
          containerImg={imgContainer.equipment20_reefer.childImageSharp.fluid}
          noDoorOpening={false}
          dgValues={[2.29, 2.264]}
          irValues={[5.45, 2.28, 2.159]}
          wmValues={[2860, 29140, 28.1]}
          superRack={false}
        />
      </div>
    </Layout>
  )
}
