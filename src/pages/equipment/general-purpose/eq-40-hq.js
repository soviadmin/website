import React, { useState, useEffect, useRef } from "react"
import Helmet from "react-helmet"
import { useImage } from "../../../hooks/useImage"
import Layout from "../../../components/Layout.js"
import ContainerTable from "../../../components/ContainerTable"
import PageHeader from "../../../components/PageHeader"

export default function Eq40Hq() {
  const [language, setLanguage] = useState(window.localStorage.getItem("language"))
  const imgContainer = useImage()

  // Container's title & image should be entered directly this way instead of 
  // being passed as states via Link. In case page renders by itself, such
  // parent state would be null.
  let content = {
    EN: {
      title: "40' High Cube Container",
      breadcrumb: [
        {name: "Equipment", link: "/equipment"},
        {name: "40' High Cube Container"}
      ]
    },
    VI: {
      title: "Container cao 40'",
      breadcrumb: [
        {name: "Thiết bị", link: "/equipment"},
        {name: "Container cao 40'"}
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
          containerImg={imgContainer.equipment40_01.childImageSharp.fluid}
          noDoorOpening={false}
          dgValues={[2.340, 2.597]}
          irValues={[12.032, 2.350, 2.7]}
          wmValues={[3900, 28600, 76.3]}
          superRack={false}
        />
      </div>
    </Layout>
  )
}


