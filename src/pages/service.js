import React, { useState, useEffect, useRef } from "react"
import Helmet from "react-helmet"
import { Tab, Row, Col, Nav } from "react-bootstrap"
import Layout from "../components/Layout.js"
import ScrollAnimation from "react-animate-on-scroll"
import { useImage } from "../hooks/useImage"
import Img from "gatsby-image"
import PageHeader from "../components/PageHeader.js"

const Service = () => {
  const [language, setLang] = useState(null)

  useEffect(() => {
    setLang(localStorage.getItem("language")) // en or vi
  })

  let content = {
    EN: {
      title: "Service",
      breadcrumb: [{ name: "Service" }],
      heading: "Our Services",
      ser1: {
        name: "Ocean & Air Freight",
        subheading:
          "With years of operations in forwarding/logistics " +
          "industry, we have established long-term relationship " +
          "and cooperation with major airlines and shipping lines. " +
          "Therefore, we are able to provide competitive RATE, priority " +
          "in EQUIPMENT supply and SPACE reservation to our clients.",
        //"Over the past few years, we have partnered with reputable airlines and transport companies to support the following routes:", //"SOVI specializes in two major freight types",
        // item1: "Air Freight",
        // item2: "Ocean Freight",
      },
      ser2: {
        name: "OOG Solutions",
        subheading:
          "At SOVI, we offer a variety of premier OOG solutions with Flat Rack and Open Top as our most well-known specialties",
      },
      ser3: {
        name: "Custom Clearance",
        subheading1:
          "To insure consistent fluidity of the logistics chain, " +
          "SOVI provides customs clearance services to our clients " +
          "from documentation preparation and submission, customs " +
          "examination and duty payment.",
        subheading2:
          "With years of experience, SOVI also advises on reducing the risk and how to optimize duty payables.",
        subheading3: "We hold certification on Customs, Safety and Security.",
        //"Our custom clearance services center in 2 major types",
        // item1: "Customs transit formalities",
        // item2: "Customs clearance for import-export cargo",
      },
      // ser4: {
      //   name: "Trucking",
      //   subheading: "Please contact us for more details.",
      // },
      ser5: {
        name: "Supporting Services",
        // subheading: "Please contact us for more details.",
        item1: "Stuffing & Unstuffing",
        item2: "Lashing/Unlashing",
        item3: "Inspection & Certificate",
      },
    },

    VI: {
      title: "D???ch v???",
      breadcrumb: [{ name: "D???ch v???" }],
      heading: "D???ch v??? c???a ch??ng t??i",
      ser1: {
        name: "C?????c v???n chuy???n ???????ng bi???n/h??ng kh??ng",
        subheading:
          "Nhi???u n??m tham gia v??o th??? tr?????ng v???n t???i h??ng h??a " +
          "xu???t nh???p kh???u, ch??ng t??i ???? li??n k???t ch???t ch??? v?? h???p " +
          "t??c v???i c??c h??ng h??ng kh??ng, t??u bi???n l???n. Nh??? ????, ch??ng " +
          "t??i c?? th??? cung c???p cho kh??ch h??ng c???a m??nh c??c l???i th??? v???: " +
          "GI??, THI???T B???, GI??? CH??????",
        // "Trong nh???ng n??m qua, ch??ng t??i ???? thi???t l???p m???i quan h??? v???i c??c ????n v??? h??ng kh??ng, v???n t???i uy t??n ????? h??? tr??? c??c tuy???n ???????ng sau:",
        // item1: "???????ng h??ng kh??ng: (l???p b???ng c??c tuy???n)",
        // item2: "???????ng bi???n: (l???p b???ng c??c tuy???n)",
      },
      ser2: {
        name: "Gi???i ph??p h??ng qu?? kh???",
        subheading:
          "T???i Sovi, ch??ng t??i cung c???p nhi???u gi???i ph??p h??ng ?????u v??? x??? l?? h??ng qu?? kh???, trong ???? Flat Rack v?? Open Top l?? m???t trong nh???ng s???n ph???m n???i b???t nh???t.",
      },
      ser3: {
        name: "Khai b??o h???i quan",
        subheading1:
          "????? ?????m b???o t??nh l??u ?????ng nh???t qu??n c???a chu???i " +
          "logistics, SOVI cung c???p d???ch v??? ho??n t???t th??? " +
          "t???c h???i quan cho c??c kh??ch h??ng t??? vi???c cung c???p " +
          "ch???ng t???, ki???m tra v?? n???p thu???.",
        subheading2:
          "V???i nhi???u n??m kinh nghi???m v?? am hi???u to??n di???n " +
          "trong l??nh v???c logistics, ch??ng t??i c??ng t?? v???n " +
          "cho c??c kh??ch h??ng vi???c gi???m thi???u r???i ro v?? t???i " +
          "??u h??a c??c kho???n ph???i n???p thu???.",
        subheading3: "SOVI ???????c ch???ng nh???n v??? H???i quan, An to??n v?? B???o m???t.",
        //"Ch??ng t??i cung c???p d???ch v??? khai b??o h???i quan theo 2 lo???i h??nh ch??nh:",
        // item1: "Th??? t???c qu?? c???nh",
        // item2: "Th??? t???c khai b??o h??ng ho?? xu???t nh???p kh???u",
      },
      // ser4: {
      //   name: "V???n chuy???n ???????ng b???",
      //   subheading:
      //     "Th??ng tin ??ang ???????c b??? sung, vui l??ng li??n h??? ????? bi???t th??m chi ti???t.",
      // },
      ser5: {
        name: "C??c d???ch v??? h??? tr???", //"Ph??t chuy???n nhanh",
        item1: "????ng v?? D??? h??ng",
        item2: "Ch???ng bu???c v?? Th??o g??? h??ng",
        item3: "Ki???m ?????nh v?? Ch???ng nh???n",
        // subheading:
        //   "Th??ng tin ??ang ???????c b??? sung, vui l??ng li??n h??? ????? bi???t th??m chi ti???t.",
      },
    },
  }

  language === "vi" ? (content = content.VI) : (content = content.EN)

  return (
    <Layout>
      <Helmet title={content.title}></Helmet>
      <div className="service-page">
        <PageHeader
          language={language}
          breadcrumbList={content.breadcrumb}
          title={content.title}
          heading={content.heading}
        />
        <div className="intro">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="freight">
              <Row>
                <Col sm={4}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="freight">
                        {content.ser1.name}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="oog">{content.ser2.name}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="cc">{content.ser3.name}</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                        <Nav.Link
                          eventKey="trucking"
                          href="/service#target=trucking"
                        >
                          {content.ser4.name}
                        </Nav.Link>
                      </Nav.Item> */}
                    <Nav.Item>
                      <Nav.Link eventKey="ss">{content.ser5.name}</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={8}>
                  <Tab.Content>
                    <Tab.Pane id="tab1" eventKey="freight">
                      <h1>{content.ser1.name}</h1>
                      <p>{content.ser1.subheading}</p>
                    </Tab.Pane>
                    <Tab.Pane id="tab2" eventKey="oog">
                      <h1>{content.ser2.name}</h1>
                      <p>{content.ser2.subheading}</p>
                      <OOGSolution />
                    </Tab.Pane>
                    <Tab.Pane id="tab3" eventKey="cc">
                      <h1>{content.ser3.name}</h1>
                      <p>{content.ser3.subheading1}</p>
                      <p>{content.ser3.subheading2}</p>
                      <p>{content.ser3.subheading3}</p>
                    </Tab.Pane>
                    {/* <Tab.Pane id="tab4" eventKey="trucking">
                        <h1>{content.ser4.name}</h1>
                        <p>
                          <em>{content.ser4.subheading}</em>
                        </p>
                      </Tab.Pane> */}
                    <Tab.Pane path="/tab5" eventKey="ss">
                      <h1>{content.ser5.name}</h1>
                      <p className="ml-5">
                        <ul
                          style={{ listStyle: "inherit", display: "inherit" }}
                        >
                          <li>{content.ser5.item1}</li>
                          <li>{content.ser5.item2}</li>
                          <li>{content.ser5.item3}</li>
                        </ul>
                      </p>

                      {/* <p>
                          <em>{content.ser5.subheading}</em>
                        </p> */}
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </ScrollAnimation>
        </div>
      </div>
    </Layout>
  )
}
export const OOGSolution = () => {
  const imgContainer = useImage()
  const [itemKey, setKey] = useState(0)

  function randomKey() {
    let rand = 1 + Math.random() * 100
    if (rand === itemKey) {
      rand = rand + 100
      setKey(rand)
    }
    return rand
  }
  const oogImg = [
    [imgContainer.oog46.childImageSharp.fluid, "0"],
    [imgContainer.oog07.childImageSharp.fluid, "1"],
    [imgContainer.oog18.childImageSharp.fluid, "2"],
    [imgContainer.oog25.childImageSharp.fluid, "3"],
    [imgContainer.oog29.childImageSharp.fluid, "4"],
    [imgContainer.oog04.childImageSharp.fluid, "5"],
    [imgContainer.oog06.childImageSharp.fluid, "6"],
    [imgContainer.oog08.childImageSharp.fluid, "7"],
    [imgContainer.oog09.childImageSharp.fluid, "8"],
    [imgContainer.oog17.childImageSharp.fluid, "9"],
    [imgContainer.oog20.childImageSharp.fluid, "10"],
    [imgContainer.oog31.childImageSharp.fluid, "11"],
    [imgContainer.oog36.childImageSharp.fluid, "12"],
    [imgContainer.oog45.childImageSharp.fluid, "13"],
    [imgContainer.oog49.childImageSharp.fluid, "14"],
  ]

  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div
            id="custCarousel"
            class="carousel slide"
            data-ride="carousel"
            align="center"
          >
            <div className="carousel-inner">
              {oogImg.map(item => {
                return (
                  <div
                    className={`carousel-item ${
                      item[1] === "0" ? "active" : ""
                    }`}
                  >
                    <Img key={randomKey()} fluid={item[0]} />
                  </div>
                )
              })}
            </div>
            <a
              className="carousel-control-prev"
              href="#custCarousel"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a
              class="carousel-control-next"
              href="#custCarousel"
              data-slide="next"
            >
              <span class="carousel-control-next-icon"></span>
            </a>
            <ol className="carousel-indicators list-inline">
              {oogImg.map(item => {
                return (
                  <li
                    className={`list-inline-item ${
                      item[1] === "0" ? "active" : ""
                    }`}
                  >
                    <a
                      id="carousel-selector"
                      class="selected"
                      data-slide-to={item[1]}
                      data-target="#custCarousel"
                    >
                      <Img key={randomKey()} fluid={item[0]} />
                    </a>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Service
