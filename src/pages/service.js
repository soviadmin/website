import React, { useState, useEffect, useRef } from "react"
import Helmet from "react-helmet"
import { Tab, Row, Col, Nav } from "react-bootstrap"
import Layout from "../components/Layout.js"
import ScrollAnimation from "react-animate-on-scroll"
import { useImage } from "../hooks/useImage"
import Img from "gatsby-image"
import PageHeader from "../components/PageHeader.js"

const Service = () => {
  const [language, setLanguage] = useState(window.localStorage.getItem("language"))

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
      title: "Dịch vụ",
      breadcrumb: [{ name: "Dịch vụ" }],
      heading: "Dịch vụ của chúng tôi",
      ser1: {
        name: "Cước vận chuyển đường biển/hàng không",
        subheading:
          "Nhiều năm tham gia vào thị trường vận tải hàng hóa " +
          "xuất nhập khẩu, chúng tôi đã liên kết chặt chẽ và hợp " +
          "tác với các hãng hàng không, tàu biển lớn. Nhờ đó, chúng " +
          "tôi có thể cung cấp cho khách hàng của mình các lợi thế về: " +
          "GIÁ, THIẾT BỊ, GIỮ CHỖ…",
        // "Trong những năm qua, chúng tôi đã thiết lập mối quan hệ với các đơn vị hàng không, vận tải uy tín để hỗ trợ các tuyến đường sau:",
        // item1: "Đường hàng không: (lập bảng các tuyến)",
        // item2: "Đường biển: (lập bảng các tuyến)",
      },
      ser2: {
        name: "Giải pháp hàng quá khổ",
        subheading:
          "Tại Sovi, chúng tôi cung cấp nhiều giải pháp hàng đầu về xử lý hàng quá khổ, trong đó Flat Rack và Open Top là một trong những sản phẩm nổi bật nhất.",
      },
      ser3: {
        name: "Khai báo hải quan",
        subheading1:
          "Để đảm bảo tính lưu động nhất quán của chuỗi " +
          "logistics, SOVI cung cấp dịch vụ hoàn tất thủ " +
          "tục hải quan cho các khách hàng từ việc cung cấp " +
          "chứng từ, kiểm tra và nộp thuế.",
        subheading2:
          "Với nhiều năm kinh nghiệm và am hiểu toàn diện " +
          "trong lĩnh vực logistics, chúng tôi cũng tư vấn " +
          "cho các khách hàng việc giảm thiểu rủi ro và tối " +
          "ưu hóa các khoản phải nộp thuế.",
        subheading3: "SOVI được chứng nhận về Hải quan, An toàn và Bảo mật.",
        //"Chúng tôi cung cấp dịch vụ khai báo hải quan theo 2 loại hình chính:",
        // item1: "Thủ tục quá cảnh",
        // item2: "Thủ tục khai báo hàng hoá xuất nhập khẩu",
      },
      // ser4: {
      //   name: "Vận chuyển đường bộ",
      //   subheading:
      //     "Thông tin đang được bổ sung, vui lòng liên hệ để biết thêm chi tiết.",
      // },
      ser5: {
        name: "Các dịch vụ hỗ trợ", //"Phát chuyển nhanh",
        item1: "Đóng và Dỡ hàng",
        item2: "Chằng buộc và Tháo gỡ hàng",
        item3: "Kiểm định và Chứng nhận",
        // subheading:
        //   "Thông tin đang được bổ sung, vui lòng liên hệ để biết thêm chi tiết.",
      },
    },
  }

  language === "en" ? (content = content.EN) : (content = content.VI)

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
