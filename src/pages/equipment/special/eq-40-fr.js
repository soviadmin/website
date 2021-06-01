import React, { useState, useEffect, useRef } from "react"
import Helmet from "react-helmet"
import { useImage } from "../../../hooks/useImage"
import Layout from "../../../components/Layout.js"
import ContainerTable from "../../../components/ContainerTable"
import PageHeader from "../../../components/PageHeader"

export default function Eq40FlatRack() {
  const [language, setLanguage] = useState("en")
  const languageStoredInLocalStorage = useRef()
  const imgContainer = useImage()

  useEffect(() => {
    languageStoredInLocalStorage.current = localStorage.getItem("language")
    setLanguage(languageStoredInLocalStorage.current)
  }, [])

  // Container's title & image should be entered directly this way instead of 
  // being passed as states via Link. In case page renders by itself, such
  // parent state would be null.
  let content = {
    EN: {
      title: "40' Flat Rack Container",
      breadcrumb: [
        {name: "Equipment", link: "/equipment"},
        {name: "40' Flat Rack Container"}
      ]
    },
    VI: {
      title: "Container Flat Rack 40'",
      breadcrumb: [
        {name: "Thiết bị", link: "/equipment"},
        {name: "Container Flat Rack 40'"}
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
          containerImg={imgContainer.equipment40_06.childImageSharp.fluid}
          noDoorOpening={true}
          irValues={[11.762, 2.378, 1.96]}
          wmValues={[4795, 40205, 0]}
          superRack={false}
        />
      </div>
    </Layout>
  )
}

