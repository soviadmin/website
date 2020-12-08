import React from "react"
import { useImage } from "../hooks/useImage"
import Carousel from "react-bootstrap/Carousel"

// import Img from "gatsby-image";
import banner1 from "../assets/images/banner5.png"
import banner2 from "../assets/images/banner1.png"
import banner3 from "../assets/images/banner2.png"
import ScrollAnimation from "react-animate-on-scroll"

export default function Banner() {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <Carousel id="banner">
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 banner-image"
            src={banner1}
            alt="First slide"
          />
          {/* <Carousel.Caption>
                        <h2>COMPANY HEADER 1</h2>
                        <p>Nulla vitae elit libero, a phacetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 banner-image"
            src={banner2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 banner-image"
            src={banner3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </ScrollAnimation>
  )
}
