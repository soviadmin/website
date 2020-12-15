import React, { useState } from "react"
import Helmet from "react-helmet"
import { Tab, Tabs } from "react-bootstrap"
import ScrollAnimation from "react-animate-on-scroll"
import { useImage } from "../hooks/useImage"
import Img from "gatsby-image"
import Layout from "../components/Layout.js"

const Equipment = () => {
  let content = {
    EN: {
      title: "Equipment",
      breadcrumb1: "Home",
      breadcrumb2: "Equipment",
      heading: "Equipment Gallery",
      tab1: "All Equipment",
      tab2: "SOVI's Special",
      tab3: "SOVI's Super Special",
      note: "Scroll down to see more",
    },

    VI: {
      title: "Thiết bị",
      breadcrumb1: "Trang chủ",
      breadcrumb2: "Thiết bị",
      heading: "Thư viện thiết bị",
      tab1: "Tất cả thiết bị",
      tab2: "Loại đặc biệt",
      tab3: "Loại chuyên dụng",
      note: "Lướt xuống để xem",
    },
  }

  let languageStoredInLocalStorage = localStorage.getItem("language")
  languageStoredInLocalStorage === "en"
    ? (content = content.EN)
    : (content = content.VI)

  return (
    <Layout>
      <Helmet title={content.title}></Helmet>
      <div className="equipment-page">
        <header className="header">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/">{content.breadcrumb1}</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {content.breadcrumb2}
                </li>
              </ol>
            </nav>
            <h1 className="title">{content.heading}</h1>
          </ScrollAnimation>
        </header>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <div className="equipment-tabs">
            <p className="note">
              <em>{content.note}</em>
            </p>
            <Tabs
              variant="pills"
              className="justify-content-center"
              defaultActiveKey="all"
              id="uncontrolled-tab-example"
            >
              <Tab eventKey="all" title={content.tab1}>
                <AllEquipment />
              </Tab>
              <Tab eventKey="open-top" title={content.tab2}>
                <Special />
              </Tab>
              <Tab eventKey="hard-top" title={content.tab3}>
                <SuperSpecial />
              </Tab>
            </Tabs>
          </div>
        </ScrollAnimation>
      </div>
    </Layout>
  )
}

export default Equipment

export function AllEquipment() {
  const [itemKey, setKey] = useState(0)
  const imgContainer = useImage()

  function randomKey() {
    const rand = 1 + Math.random() * 100
    if (rand === itemKey) {
      rand = rand + 100
      setKey(rand)
    }
    return rand
  }
  const allItems = [
    [
      imgContainer.equipment40_01.childImageSharp.fluid,
      "40' Open Top Container",
    ],
    [
      imgContainer.equipment40_02.childImageSharp.fluid,
      "40' High Cube Flat Rack",
    ],
    [
      imgContainer.equipment40_03.childImageSharp.fluid,
      "40' High Cube Super Rack",
    ],
    [imgContainer.equipment40_04.childImageSharp.fluid, "40' Super Rack"],
    [
      imgContainer.equipment40_05.childImageSharp.fluid,
      "40' Flat Rack with 47 MT Pay Load",
    ],
    [
      imgContainer.equipment40_06.childImageSharp.fluid,
      "40' Flat Rack with Collapsible Ends",
    ],
    [
      imgContainer.equipment40_07.childImageSharp.fluid,
      "40' High Cube Hard Top Open Top",
    ],
    [
      imgContainer.equipment20_01.childImageSharp.fluid,
      "20' Open Top Container",
    ],
    [
      imgContainer.equipment20_02.childImageSharp.fluid,
      "20' High Cube Open Top",
    ],
    [
      imgContainer.equipment20_03.childImageSharp.fluid,
      "20' Flat Rack with 31 MT Pay Load",
    ],
    [
      imgContainer.equipment20_04.childImageSharp.fluid,
      "20' High Cube Hard Top",
    ],
  ]
  return (
    <div className="row">
      {allItems.map(groupItem => {
        return (
          <div
            className="col-xl-4 col-lg-6 col-sm-12 eq-image eq-gallery-item"
            key={randomKey()}
          >
            <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
              <Img key={randomKey()} fluid={groupItem[0]} />
              <p className="eq-name mb-5">{groupItem[1]}</p>
            </ScrollAnimation>
          </div>
        )
      })}
    </div>
  )
}

export function Special() {
  const [itemKey, setKey] = useState(0)
  const imgContainer = useImage()

  function randomKey() {
    const rand = 1 + Math.random() * 100
    if (rand === itemKey) {
      rand = rand + 100
      setKey(rand)
    }
    return rand
  }
  const specialItems = [
    [
      imgContainer.equipment40_01.childImageSharp.fluid,
      "40' Open Top Container",
    ],
    [
      imgContainer.equipment20_01.childImageSharp.fluid,
      "20' Open Top Container",
    ],
    [
      imgContainer.equipment40_06.childImageSharp.fluid,
      "40' Flat Rack with Collapsible Ends",
    ],
    [
      imgContainer.equipment20_02.childImageSharp.fluid,
      "20' High Cube Open Top",
    ],
  ]
  return (
    <div className="row">
      {specialItems.map(groupItem => {
        return (
          <div
            className="col-xl-4 col-lg-6 col-sm-12 eq-image eq-gallery-item"
            key={randomKey()}
          >
            <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
              <Img key={randomKey()} fluid={groupItem[0]} />
              <p className="eq-name mb-5">{groupItem[1]}</p>
            </ScrollAnimation>
          </div>
        )
      })}
    </div>
  )
}

export function SuperSpecial() {
  const [itemKey, setKey] = useState(0)
  const imgContainer = useImage()

  function randomKey() {
    const rand = 1 + Math.random() * 100
    if (rand === itemKey) {
      rand = rand + 100
      setKey(rand)
    }
    return rand
  }
  const superSpecialItems = [
    [
      imgContainer.equipment40_02.childImageSharp.fluid,
      "40' High Cube Flat Rack",
    ],
    [
      imgContainer.equipment40_07.childImageSharp.fluid,
      "40' High Cube Hard Top Open Top",
    ],
    [
      imgContainer.equipment20_03.childImageSharp.fluid,
      "20' Flat Rack with 31 MT Pay Load",
    ],
    [
      imgContainer.equipment40_05.childImageSharp.fluid,
      "40' Flat Rack with 47 MT Pay Load",
    ],
    [
      imgContainer.equipment40_03.childImageSharp.fluid,
      "40' High Cube Super Rack",
    ],
    [imgContainer.equipment40_04.childImageSharp.fluid, "40' Super Rack"],
    [
      imgContainer.equipment20_04.childImageSharp.fluid,
      "20' High Cube Hard Top",
    ],
  ]
  return (
    <div className="row">
      {superSpecialItems.map(groupItem => {
        return (
          <div
            className="col-xl-4 col-lg-6 col-sm-12 eq-image eq-gallery-item"
            key={randomKey()}
          >
            <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
              <Img key={randomKey()} fluid={groupItem[0]} />
              <p className="eq-name mb-5">{groupItem[1]}</p>
            </ScrollAnimation>
          </div>
        )
      })}
    </div>
  )
}
