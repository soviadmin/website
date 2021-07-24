import React, { useState, useEffect, useRef } from "react"
import Helmet from "react-helmet"
import { useImage } from "../../../hooks/useImage"
import Layout from "../../../components/Layout.js"
import ContainerTable from "../../../components/ContainerTable"
import PageHeader from "../../../components/PageHeader"

export default function Eq20OpenTop() {
  const [language, setLanguage] = useState(localStorage.getItem("language"))
  const imgContainer = useImage()

  // Container's title & image should be entered directly this way instead of 
  // being passed as states via Link. In case page renders by itself, such
  // parent state would be null.
  let content = {
    EN: {
      title: "20' Open Top Container",
      breadcrumb: [
        {name: "Equipment", link: "/equipment"},
        {name: "20' Open Top Container"}
      ]
    },
    VI: {
      title: "Container Open Top 20'",
      breadcrumb: [
        {name: "Thiết bị", link: "/equipment"},
        {name: "Container Open Top 20'"}
      ]
    },
  }
  language === "en" ? (content = content.EN) : (content = content.VI)
  return (
    <Layout>
      <Helmet title={content.title}></Helmet>
      <div className="equipment-page">
        <PageHeader language={language} breadcrumbList={content.breadcrumb} title={content.title}/>
        <ContainerTable 
          language={language} 
          containerName={content.title}
          containerImg={imgContainer.equipment20_04.childImageSharp.fluid}
          noDoorOpening={false}
          dgValues={[2.343, 2.295]}
          irValues={[5.899, 2.352, 2.351]}
          wmValues={[2350, 28130, 32.2]}
          superRack={false}
        />
      </div>
    </Layout>
  )
}


