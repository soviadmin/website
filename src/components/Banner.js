import React from "react"
import Carousel from "react-bootstrap/Carousel"

// import Img from "gatsby-image";
import banner1 from "../assets/images/banner1.jpg"
import banner2 from "../assets/images/banner2.jpg"
import banner4 from "../assets/images/banner4.jpg"
import ScrollAnimation from "react-animate-on-scroll"

export default function Banner(props) {
  let content = {
    EN: {
      heading1: "Welcome",
      heading2: "Meet Song Viet Logistics Corporation",//"Meet Vietnam's Leading Logistics Corporation",
    },

    VI: {
      heading1: "Chào mừng",
      heading2: "Tìm hiểu tập đoàn logistics Sóng Việt",
    },
  }

  props.language === "en" ? (content = content.EN) : (content = content.VI)

  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <Carousel id="banner">
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 banner-image"
            src={banner4}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <p className="heading1">{content.heading1}</p>
            <h3 className="heading2">{content.heading2}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 banner-image"
            src={banner1}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 banner-image"
            src={banner2}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </ScrollAnimation>
  )
}
