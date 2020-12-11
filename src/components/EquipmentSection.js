import React, { useState } from "react"
import Carousel from "react-bootstrap/Carousel"
import ScrollAnimation from "react-animate-on-scroll"
import { useImage } from "../hooks/useImage"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"

export default function EquipmentSection(props) {
  const imgContainer = useImage()
  const [itemKey, setKey] = useState(0)

  let content = {
    EN: {
      title: "Featured Equipment",
      eq1: "40' High Cube Flat Rack",
      eq2: "40' High Cube Hard Top Open Top",
      eq3: "20' Flat Rack with 31 MT Pay Load",
      eq4: "40' Flat Rack with 47 MT Pay Load",
      eq5: "40' High Cube Super Rack",
      eq6: "40' Super Rack",
      eq7: "20' High Cube Hard Top",
      eq8: "40' Open Top Container",
      eq9: "40' Flat Rack with Collapsible Ends",
      button: "See all equipment",
    },

    VI: {
      title: "Các thiết bị nổi bật",
      eq1: "Thiết bị 1",
      eq2: "Thiết bị 2",
      eq3: "Thiết bị 3",
      eq4: "Thiết bị 4",
      eq5: "Thiết bị 5",
      eq6: "Thiết bị 6",
      eq7: "Thiết bị 7",
      eq8: "Thiết bị 8",
      eq9: "Thiết bị 9",
      button: "Xem tất cả thiết bị",
    },
  }

  props.language === "en" ? (content = content.EN) : (content = content.VI)

  function randomKey() {
    const rand = 1 + Math.random() * 100
    if (rand === itemKey) {
      rand = rand + 100
      setKey(rand)
    }
    console.log(rand)
    return rand
  }
  const eqImages = [
    [
      [imgContainer.equipment40_02.childImageSharp.fluid, content.eq1],
      [imgContainer.equipment40_07.childImageSharp.fluid, content.eq2],
      [imgContainer.equipment20_03.childImageSharp.fluid, content.eq3],
    ],
    [
      [imgContainer.equipment40_05.childImageSharp.fluid, content.eq4],
      [imgContainer.equipment40_03.childImageSharp.fluid, content.eq5],
      [imgContainer.equipment40_04.childImageSharp.fluid, content.eq6],
    ],
    [
      [imgContainer.equipment20_04.childImageSharp.fluid, content.eq7],
      [imgContainer.equipment40_01.childImageSharp.fluid, content.eq8],
      [imgContainer.equipment40_06.childImageSharp.fluid, content.eq9],
    ],
  ]

  return (
    <div className="feature-eq">
      <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
        <h1 className="heading">{content.title}.</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <Carousel id="banner">
          {eqImages.map(group => {
            return (
              <Carousel.Item interval={1000} key={randomKey()}>
                <div className="container">
                  <div className="row">
                    {group.map(groupItem => {
                      return (
                        <div
                          className="col-lg-4 col-xs-12 eq-image"
                          key={randomKey()}
                        >
                          <Img key={randomKey()} fluid={groupItem[0]} />
                          <p className="eq-name">{groupItem[1]}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </ScrollAnimation>

      <ScrollAnimation animateIn="pulse" animateOnce={true}>
        <a href="/equipment">
          <button type="button" className="btn btn-primary my-btn filled-btn">
            {content.button}
            <FontAwesomeIcon
              style={{ marginLeft: "5px", paddingTop: "3px" }}
              icon={faCaretRight}
            />
          </button>
        </a>
      </ScrollAnimation>
    </div>
  )
}
