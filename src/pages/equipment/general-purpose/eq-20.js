import React, { useState, useEffect, useRef } from "react"
import Helmet from "react-helmet"
import { useImage } from "../../../hooks/useImage"
import Layout from "../../../components/Layout.js"
import ContainerTable from "../../../components/ContainerTable"
import PageHeader from "../../../components/PageHeader"

export default function Eq20() {
  const imgContainer = useImage()

  // Container's title & image should be entered directly this way instead of
  // being passed as states via Link. In case page renders by itself, such
  // parent state would be null.
  let content = {
    EN: {
      title: "20' General Purpose Container",
      breadcrumb: [
        { name: "Equipment", link: "/equipment" },
        { name: "20' General Purpose Container" },
      ],
    },
    VI: {
      title: "Container thường 20'",
      breadcrumb: [
        { name: "Thiết bị", link: "/equipment" },
        { name: "Container thường 20'" },
      ],
    },
  }
  if (typeof window !== "undefined") {
    content = content.EN
  } else if (localStorage.getItem("language") == "en") {
    content = content.EN
  } else {
    content = content.VI
  }
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
          containerImg={imgContainer.equipment20_02.childImageSharp.fluid}
          noDoorOpening={false}
          dgValues={[2.34, 2.292]}
          irValues={[5.9, 2.352, 2.395]}
          wmValues={[2350, 28130, 33.1]}
          superRack={false}
        />
      </div>
    </Layout>
  )
}
