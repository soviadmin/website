import React, { useState } from "react"
import Carousel from "react-bootstrap/Carousel"
import ScrollAnimation from "react-animate-on-scroll"
import { useImage } from "../hooks/useImage"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

export default function EquipmentSection(props) {
  const imgContainer = useImage()
  const [itemKey, setKey] = useState(0)

  let content = {
    EN: {
      //Slide 1
      title: "Featured Equipment",
      eq1: "20' General Purpose Container",
      eq2: "40' High Cube Container",
      eq3: "45' General Purpose Container",
      //Slide 2
      eq4: "20' Reefer Container",
      eq5: "20' Open Top Container",
      eq6: "40' Open Top Container",
      //Slide 3
      eq7: "20' Flat Rack Container",
      eq8: "40' Flat Rack Container",
      eq9: "40' Super Rack Container",
      button: "See all equipment",
    },

    VI: {
      //Slide 1
      title: "Các thiết bị nổi bật",
      eq1: "Container thường 20'",
      eq2: "Container cao 40'",
      eq3: "Container thường 45'",
      //Slide 2
      eq4: "Container lạnh 20'",
      eq5: "Container Open Top 20'",
      eq6: "Container Open Top 40'",
      //Slide 3
      eq7: "Container Flat Rack 20'",
      eq8: "Container Flat Rack 40'",
      eq9: "Container Super Rack 40'",
      button: "Xem tất cả thiết bị",
    },
  }

  props.language === "en" ? (content = content.EN) : (content = content.VI)

  function randomKey() {
    let rand = 1 + Math.random() * 100
    if (rand === itemKey) {
      rand = rand + 100
      setKey(rand)
    }
    return rand
  }
  //Featuring Special Containers only
  const eqImages = [
    // [
    //   [imgContainer.equipment20_02.childImageSharp.fluid, content.eq1,
    //   "general-purpose/eq-20"],
    //   [imgContainer.equipment40_01.childImageSharp.fluid, content.eq2,
    //   "general-purpose/eq-40-hq"],
    //   [imgContainer.equipment40_01.childImageSharp.fluid, content.eq3,
    //   "general-purpose/eq-45"],
    // ],
    [
      [imgContainer.equipment20_reefer.childImageSharp.fluid, content.eq4,
      "reefer/eq-20-rf"],
      [imgContainer.equipment20_04.childImageSharp.fluid, content.eq5,
      "special/eq-20-ot"],
      [imgContainer.equipment40_07.childImageSharp.fluid, content.eq6,
      "special/eq-40-ot"],
    ],
    [
      [imgContainer.equipment20_03.childImageSharp.fluid, content.eq7,
      "special/eq-20-fr"],
      [imgContainer.equipment40_06.childImageSharp.fluid, content.eq8,
      "special/eq-40-fr"],
      [imgContainer.equipment40_04.childImageSharp.fluid, content.eq9,
      "special/eq-40-sr"],
    ],
  ]
  return (
    <div className="feature-eq">
      <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
        <h1 className="heading">{content.title}</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <Carousel id="banner">
          {eqImages.map(group => {
            return (
              <Carousel.Item interval={1000} key={randomKey()}>
                <div className="container">
                  <div className="row justify-content-center">
                    {group.map(groupItem => {
                      return (
                        <div
                          className="col-lg-4 col-xs-12 eq-image"
                          key={randomKey()}
                        > 
                          <Link to={`/equipment/${groupItem[2]}`}>
                            <Img key={randomKey()} fluid={groupItem[0]} />
                            <p className="eq-name">{groupItem[1]}</p>
                          </Link>
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
          <button
            type="button"
            className="btn btn-primary my-btn filled-btn mt-4"
          >
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
