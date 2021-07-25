import React, { useState, useEffect, useRef } from "react"
import Helmet from "react-helmet"
import { useImage } from "../../../hooks/useImage"
import Layout from "../../../components/Layout.js"
import ContainerTable from "../../../components/ContainerTable"
import PageHeader from "../../../components/PageHeader"

export default function Eq20FlatRack() {
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
      title: "20' Flat Rack Container",
      breadcrumb: [
        { name: "Equipment", link: "/equipment" },
        { name: "20' Flat Rack Container" },
      ],
    },
    VI: {
      title: "Container Flat Rack 20'",
      breadcrumb: [
        { name: "Thiết bị", link: "/equipment" },
        { name: "Container Flat Rack 20'" },
      ],
    },
  }

  language === "vi" ? (content = content.VI) : (content = content.EN)

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
          containerImg={imgContainer.equipment20_03.childImageSharp.fluid}
          noDoorOpening={true}
          irValues={[5.613, 2.218, 2.213]}
          wmValues={[2740, 31260, 0]}
          superRack={false}
        />
      </div>
    </Layout>
  )
}
