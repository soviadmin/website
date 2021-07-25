import React, { useState, useEffect, useRef } from "react"
import Helmet from "react-helmet"
import { useImage } from "../../../hooks/useImage"
import Layout from "../../../components/Layout.js"
import ContainerTable from "../../../components/ContainerTable"
import PageHeader from "../../../components/PageHeader"

export default function Eq45() {
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
      title: "45' General Purpose Container",
      breadcrumb: [
        { name: "Equipment", link: "/equipment" },
        { name: "45' General Purpose Container" },
      ],
    },
    VI: {
      title: "Container thường 45'",
      breadcrumb: [
        { name: "Thiết bị", link: "/equipment" },
        { name: "Container thường 45'" },
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
          containerImg={imgContainer.equipment40_01.childImageSharp.fluid}
          noDoorOpening={false}
          dgValues={[2.34, 2.597]}
          irValues={[13.556, 2.352, 2.7]}
          wmValues={[4800, 27700, 86.0]}
          superRack={false}
        />
      </div>
    </Layout>
  )
}
