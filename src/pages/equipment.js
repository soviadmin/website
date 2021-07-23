import React, { useState, useEffect, useRef } from "react"
import Helmet from "react-helmet"
import { Tab, Tabs } from "react-bootstrap"
import ScrollAnimation from "react-animate-on-scroll"
import { useImage } from "../hooks/useImage"
import Img from "gatsby-image"
import Layout from "../components/Layout.js"
import { Link } from "gatsby"
import PageHeader from "../components/PageHeader"

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
      breadcrumb: [
        {name: "Equipment"}
      ],
      heading: "Container Types",
      tab1: "General Purpose",
      tab2: "Reefer", 
      tab3: "Special",
      note: "Scroll down to see more",
      desc: "Description",
      descContent: "Common container types and necessary specification related to stuffing into container."
    },

    VI: {
      title: "Thiết bị",
      breadcrumb: [
        {name: "Thiết bị"}
      ],
      heading: "Các loại container thông dụng",
      tab1: "Container thường",
      tab2: "Container lạnh",
      tab3: "Container đặc biệt",
      note: "Lướt xuống để xem",
      desc: "Giới thiệu",
      descContent: "Một số container thông dụng và các thông số cần " + 
                  "thiết liên quan đến việc đóng hàng vào container."
    },
  }

  language === "en" ? (content = content.EN) : (content = content.VI)

  return (
    <Layout>
      <Helmet title={content.title}></Helmet>
      <div className="equipment-page">
        <PageHeader language={language} 
                    breadcrumbList={content.breadcrumb} 
                    title={content.title} 
                    heading={content.heading}/>
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
                <GeneralPurpose language={language}/>
              </Tab>
              <Tab eventKey="open-top" title={content.tab2}>
                <Reefer language={language}/>
              </Tab>
              <Tab eventKey="hard-top" title={content.tab3}>
                <Special language={language}/>
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
  let content = {
      eq20: "20' General Purpose Container",
      eq40: "40' General Purpose Container",
      eq40Hq: "40' High Cube Container",
      eq45: "45' General Purpose Container"
  }

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
      content.eq20, "eq-20"
    ],
    [
      imgContainer.equipment40_01.childImageSharp.fluid,
      content.eq40, "eq-40"
    ],
    [
      imgContainer.equipment40_01.childImageSharp.fluid,
      content.eq40Hq, "eq-40-hq"
    ],
    [
      imgContainer.equipment40_01.childImageSharp.fluid,
      content.eq45, "eq-45"
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
              <Link to={`/equipment/general-purpose/${groupItem[2]}`}>
                <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                  <Img key={randomKey()} fluid={groupItem[0]} />
                  <p className="eq-name mb-5">{groupItem[1]}</p>
                </ScrollAnimation>
              </Link>
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
  let content = {
      eq20Rf: "20' Reefer Container",
      eq40Rf: "40' Reefer Container"
  }
  const reeferItems = [
    [
      imgContainer.equipment20_reefer.childImageSharp.fluid,
      content.eq20Rf, "eq-20-rf"
    ],
    [
      imgContainer.equipment40_reefer.childImageSharp.fluid,
      content.eq40Rf, "eq-40-rf"
    ],
  ]
  function randomKey() {
    let rand = 1 + Math.random() * 100
    if (rand === itemKey) {
      rand = rand + 100
      setKey(rand)
    }
    return rand
  }
  return (
    <div className="row">
      {reeferItems.map(groupItem => {
        return (
          <div
            className="col-xl-4 col-lg-6 col-sm-12 eq-image eq-gallery-item"
            key={randomKey()}
          >
            <Link to={`/equipment/reefer/${groupItem[2]}`}>
              <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                <Img key={randomKey()} fluid={groupItem[0]} />
                <p className="eq-name mb-5">{groupItem[1]}</p>
              </ScrollAnimation>
            </Link>
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
  let content = {
      eq20OpenTop: "20' Open Top Container",
      eq40OpenTop: "40' Open Top Container",
      eq20Fr: "20' Flat Rack Container",
      eq40Fr: "40' Flat Rack Container",
      eq40Sr: "40' Super Rack Container",
  }

  const specialItems = [
    [
      imgContainer.equipment20_04.childImageSharp.fluid,
      content.eq20OpenTop, "eq-20-ot"
    ],
    [
      imgContainer.equipment40_07.childImageSharp.fluid,
      content.eq40OpenTop, "eq-40-ot"
    ],
    [
      imgContainer.equipment20_03.childImageSharp.fluid,
      content.eq20Fr, "eq-20-fr"
    ],
    [
      imgContainer.equipment40_06.childImageSharp.fluid,
      content.eq40Fr, "eq-40-fr"
    ],
    [
      imgContainer.equipment40_04.childImageSharp.fluid,
      content.eq40Sr, "eq-40-sr"
    ]
  ]
  function randomKey() {
    let rand = 1 + Math.random() * 100
    if (rand === itemKey) {
      rand = rand + 100
      setKey(rand)
    }
    return rand
  }
  return (
    <div className="row">
      {specialItems.map(groupItem => {
        return (
          <div
            className="col-xl-4 col-lg-6 col-sm-12 eq-image eq-gallery-item"
            key={randomKey()}
          >
            <Link to={`/equipment/special/${groupItem[2]}`}>
              <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                <Img key={randomKey()} fluid={groupItem[0]} />
                <p className="eq-name mb-5">{groupItem[1]}</p>
              </ScrollAnimation>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
