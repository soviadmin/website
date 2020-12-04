import React, {useState} from "react"
import Carousel from "react-bootstrap/Carousel";
import ScrollAnimation from 'react-animate-on-scroll'
import { useImage } from "../hooks/useImage"
import Img from "gatsby-image"

export default function EquipmentSection() {
  const imgContainer = useImage();
  const [itemKey, setKey] = useState(0);
  
  function randomKey() {
    const rand = 1 + Math.random() * (100);
    if (rand === itemKey) {
      rand = rand + 100;
      setKey(rand);
    }
    console.log(rand);
    return rand;
  }
  const eqImages = [
    [
      [imgContainer.equipment40_02.childImageSharp.fluid, "40' High Cube Flat Rack"],
      [imgContainer.equipment40_07.childImageSharp.fluid, "40' High Cube Hard Top Open Top"],
      [imgContainer.equipment20_03.childImageSharp.fluid, "20' Flat Rack with 31 MT Pay Load"]
    ],
    [
      [imgContainer.equipment40_05.childImageSharp.fluid, "40' Flat Rack with 47 MT Pay Load"],
      [imgContainer.equipment40_03.childImageSharp.fluid, "40' High Cube Super Rack"],
      [imgContainer.equipment40_04.childImageSharp.fluid, "40' Super Rack"]
    ],
    [
      [imgContainer.equipment20_04.childImageSharp.fluid, "20' High Cube Hard Top"],
      [imgContainer.equipment40_01.childImageSharp.fluid, "40' Open Top Container"],
      [imgContainer.equipment40_06.childImageSharp.fluid, "40' Flat Rack with Collapsible Ends"]
    ],
  ];

  return (
    <div className="feature-eq">
      <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <h1 className="heading">Featured Equipment.</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <Carousel id="banner">
            {eqImages.map((group)=> { 
            return (
              <Carousel.Item interval={2000} key={randomKey()}>
                <div className="container">
                  <div className="row">
                    {group.map((groupItem) => {
                        return (
                          <div className="col-lg-4 col-xs-12 eq-image" key={randomKey()}>
                            <Img key={randomKey()} fluid={groupItem[0]} />
                            <p className="eq-name">{groupItem[1]}</p>
                          </div>
                        )})}
                      </div>
                </div>
              </Carousel.Item>
            )})}
        </Carousel>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="pulse" animateOnce={true}>
          <a href="/equipment">
            <button type="button" className="btn btn-primary my-btn filled-btn">
              See all equipment
            </button>
          </a>
        </ScrollAnimation>
    </div>
  )
}
