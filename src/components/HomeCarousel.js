import React from 'react';
import { useImage } from "../hooks/useImage";
// import Img from "gatsby-image";
import h1 from '../assets/images/h3.jpg';
import Carousel from "react-bootstrap/Carousel";

export default function BakingCarousel(props) {
    // const imgContainer = useImage();
    return (
        <div className="baking-carousel-container" id="baking-part-1">
           <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={h1}/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item interval={1000}>
                <img className="d-block w-100" src={h1}/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className="d-block w-100" src={h1}/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
        </div>
    )
}