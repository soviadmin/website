import React, { useState, useEffect, useRef } from "react"
import Helmet from "react-helmet"
import { Tab, Tabs } from "react-bootstrap"
import ScrollAnimation from "react-animate-on-scroll"
import { useImage } from "../hooks/useImage"
import Img from "gatsby-image"
import Layout from "../components/Layout.js"

const Equipment = () => {
  const [language, setLanguage] = useState("en")
  const languageStoredInLocalStorage = useRef()

  useEffect(() => {
    languageStoredInLocalStorage.current = localStorage.getItem("language")
    setLanguage(languageStoredInLocalStorage.current)
  }, [])

  let content = {
    EN: {
      title: "Equipment",
      breadcrumb1: "Home",
      breadcrumb2: "Equipment",
      heading: "Equipment Gallery",
      tab1: "General Purpose",
      tab2: "Reefer", 
      tab3: "Special",
      note: "Scroll down to see more",
      desc: "Description",
      descContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },

    VI: {
      title: "Thiết bị",
      breadcrumb1: "Trang chủ",
      breadcrumb2: "Thiết bị",
      heading: "Kho thiết bị",
      tab1: "Container bách hoá",
      tab2: "Container lạnh",
      tab3: "Container đặc biệt",
      note: "Lướt xuống để xem",
      desc: "Giới thiệu",
      descContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  }

  language === "en" ? (content = content.EN) : (content = content.VI)

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
          <div className="equipment-desc">
            <h2>{content.desc}</h2>
            <p>{content.descContent}</p>
          </div>
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
                <GeneralPurpose />
              </Tab>
              <Tab eventKey="open-top" title={content.tab2}>
                <Reefer />
              </Tab>
              <Tab eventKey="hard-top" title={content.tab3}>
                <Special />
              </Tab>
            </Tabs>
          </div>
        </ScrollAnimation>
      </div>
    </Layout>
  )
}

export default Equipment

export function GeneralPurpose() {
  const [itemKey, setKey] = useState(0)
  const imgContainer = useImage()

  function randomKey() {
    let rand = 1 + Math.random() * 100
    if (rand === itemKey) {
      rand = rand + 100
      setKey(rand)
    }
    return rand
  }
  const genPurposeItems = [
    [
      imgContainer.equipment20_02.childImageSharp.fluid,
      "20' Container", "eq-20"
    ],
    [
      imgContainer.equipment40_01.childImageSharp.fluid,
      "40' Container", "eq-40"
    ],
    [
      imgContainer.equipment40_01.childImageSharp.fluid,
      "40' High Cube Container", "eq-40-hq"
    ],
    [
      imgContainer.equipment40_01.childImageSharp.fluid,
      "45' Container", "eq-45"
    ],
  ]
  return (
    <div className="row">
      {genPurposeItems.map(groupItem => {
        return (
            <div
              className="col-xl-4 col-lg-6 col-sm-12 eq-image eq-gallery-item"
              key={randomKey()}
            >
              <a href={`/equipment/general-purpose/${groupItem[2]}`}>
                <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                  <Img key={randomKey()} fluid={groupItem[0]} />
                  <p className="eq-name mb-5">{groupItem[1]}</p>
                </ScrollAnimation>
              </a>
            </div>
        )
      })}
    </div>
  )
}
//Loại container lạnh (Reefer)
export function Reefer() {
  const [itemKey, setKey] = useState(0)
  const imgContainer = useImage()

  function randomKey() {
    let rand = 1 + Math.random() * 100
    if (rand === itemKey) {
      rand = rand + 100
      setKey(rand)
    }
    return rand
  }
  const reeferItems = [
    [
      imgContainer.equipment20_reefer.childImageSharp.fluid,
      "20' Reefer", "eq-20-rf"
    ],
    [
      imgContainer.equipment40_reefer.childImageSharp.fluid,
      "40' Reefer High Cube", "eq-40-rf"
    ],
  ]
  return (
    <div className="row">
      {reeferItems.map(groupItem => {
        return (
          <div
            className="col-xl-4 col-lg-6 col-sm-12 eq-image eq-gallery-item"
            key={randomKey()}
          >
            <a href={`/equipment/reefer/${groupItem[2]}`}>
              <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                <Img key={randomKey()} fluid={groupItem[0]} />
                <p className="eq-name mb-5">{groupItem[1]}</p>
              </ScrollAnimation>
            </a>
          </div>
        )
      })}
    </div>
  )
}
//Loại đặc biệt - SOVI'S Special
export function Special() {
  const [itemKey, setKey] = useState(0)
  const imgContainer = useImage()

  function randomKey() {
    let rand = 1 + Math.random() * 100
    if (rand === itemKey) {
      rand = rand + 100
      setKey(rand)
    }
    return rand
  }
  const specialItems = [
    [
      imgContainer.equipment20_04.childImageSharp.fluid,
      "20' Open Top Container", "eq-20-ot"
    ],
    [
      imgContainer.equipment40_07.childImageSharp.fluid,
      "40' Open Top Container", "eq-40-ot"
    ],
    [
      imgContainer.equipment20_03.childImageSharp.fluid,
      "20' Flat Rack", "eq-20-fr"
    ],
    [
      imgContainer.equipment40_06.childImageSharp.fluid,
      "40' Flat Rack", "eq-40-fr"
    ],
    [
      imgContainer.equipment40_04.childImageSharp.fluid,
      "40' Super Rack", "eq-40-sr"
    ]
  ]
  return (
    <div className="row">
      {specialItems.map(groupItem => {
        return (
          <div
            className="col-xl-4 col-lg-6 col-sm-12 eq-image eq-gallery-item"
            key={randomKey()}
          >
            <a href={`/equipment/special/${groupItem[2]}`}>
              <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                <Img key={randomKey()} fluid={groupItem[0]} />
                <p className="eq-name mb-5">{groupItem[1]}</p>
              </ScrollAnimation>
            </a>
          </div>
        )
      })}
    </div>
  )
}
