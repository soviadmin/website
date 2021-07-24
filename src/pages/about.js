import React, { useState, useEffect, useRef } from "react"
import Helmet from "react-helmet"
import SafetyClaim from "../svg/safety.svg"
import AnimatedNumber from "react-animated-number"
import useOnScreen from "../hooks/useOnScreen"
import ScrollAnimation from "react-animate-on-scroll"
import Layout from "../components/Layout.js"
import groupImg from "../assets/images/group.jpg"
import PageHeader from "../components/PageHeader"

const About = () => {
  const [state, setState] = useState({
    perc_customer: 0,
    num_tasks: 0,
    num_hours: 0,
  })

  const [language, setLanguage] = useState(localStorage.getItem("language"))
  const ref = useRef()
  const isVisible = useOnScreen(ref)

  useEffect(() => {
    if (isVisible === true) {
      setState({
        ...state,
        perc_customer: 97,
        perc_tasks: 95,
        num_hours: 210000,
      })
    }
  }, 
  [isVisible]
  )

  let content = {
    EN: {
      title: "About",
      breadcrumb: [{name: "About"}],
      heading: "About us",
      sec1: {
        heading: "We are dedicated providers",
        text1: "Established since 2011, SOVI company focuses on two key " + 
                "services: providing specialized containers (Flat-rack and " + 
                "Open-top) and providing solutions in oversized cargoes transportation.",
        text2: "With the team of experts applying deep expertise and experience " + 
                "in the maritime and logistics industry, we aim to deliver high-quality " + 
                "and cost-effective services to our clients.",
        text3: "Our motto is:",
        text4: "SAFE – COST-EFFECTIVE - EFFICIENT"
      },
      sec2: {
        heading: "Over 1,500 customers have used SOVI services",
        subheading1: "Customers satisfied with the service",
        subheading2: "Tasks completed",
        subheading3: "Hours of work",
      },
      sec3: {
        heading: "At SOVI, safety is our first priority",
        text:
        "As a safety-driven company, we made sure to strictly follow safety procedures at all times. Our team is committed to using completely safe tools and equipment while taking prompt actions to report dangerous situations."
      },
    },

    VI: {
      title: "Giới thiệu",
      breadcrumb: [{name: "Giới thiệu"}],
      heading: "Về chúng tôi",
      sec1: {
        heading: "Chúng tôi là nhà cung cấp dịch vụ chu đáo và tận tâm",
        text1: "Được thành lập năm 2011, công ty SOVI đã định hướng tập " + 
              "trung kinh doanh vào việc cung cấp các container đặc biệt " + 
              "(OT/FR) và các giải pháp vận chuyển các lô hàng quá khổ, quá tải.",
        text2: "Bằng đội ngũ nhân viên có kinh nghiệm lâu năm trong lĩnh " + 
                "vực hàng hải, logistics và khai thác hàng quá khổ, quá tải, chúng " + 
                "tôi đã, đang và tiếp tục cam đoan làm hài lòng khách hàng bởi chất " + 
                "lượng dịch vụ cũng như giá cả hợp lý.",
        text3: "Phương châm hoạt động của chúng tôi là",
        text4: "AN TOÀN – TIẾT KIỆM – HIỆU QUẢ"
      },
      sec2: {
        heading: "SOVI đã cung ứng dịch vụ cho các công ty logistics hàng đầu thế giới", //"Hơn 1500 khách hàng đã dùng dịch vụ tại SOVI",
        subheading1: "Khách hàng hài lòng với dịch vụ",
        subheading2: "Số nhiệm vụ đã hoàn thành",
        subheading3: "Giờ làm việc",
      },
      sec3: {
        heading: "An toàn là ưu tiên hàng đầu tại SOVI",
        text:
          "Chúng tôi luôn chủ động thực hiện nghiêm ngặt các biện pháp an toàn lao động. Đội ngũ nhân viên SOVI cam kết chỉ sử dụng thiết bị và công cụ đã được đảm bảo an toàn tuyệt đối và báo cáo mọi tình huống nguy hiểm nhanh nhất có thể.",
      },
    },
  }

  language === "en" ? (content = content.EN) : (content = content.VI)

  return (
    <Layout>
      <Helmet title={content.title}></Helmet>
      <div className="about-page">
        <PageHeader language={language} 
                    breadcrumbList={content.breadcrumb} 
                    title={content.title} 
                    heading={content.heading}/>
        <div>
          <div className="intro row">
            <div className="col-md-6 about-content">
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <h2 className="mb-4">{content.sec1.heading}</h2>
                <p>{content.sec1.text1}</p>
                <br></br>
                <p>{content.sec1.text2}</p>
                <br></br>
                <p>{content.sec1.text3}</p>
                <br></br>
                <p>{content.sec1.text4}</p>
              </ScrollAnimation>
            </div>
            <div className="col-md-6">
              <ScrollAnimation animateIn="bounceIn" animateOnce={true}>
                <img src={groupImg} className="intro-image" alt="People" />
              </ScrollAnimation>
            </div>
          </div>
          <div className="stats">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <h2 className="stats-heading">{content.sec2.heading}</h2>
            </ScrollAnimation>
            <div className="row" ref={ref}>
              <div className="col-sm-4">
                <AnimatedNumber
                  value={state.perc_customer}
                  className="numbers"
                  formatValue={v => v.toFixed(0)}
                  duration={1000}
                  component={"text"}
                  frameStyle={perc => ({ opacity: perc / 100 })}
                />
                <span className="numbers">%</span>
                <p>{content.sec2.subheading1}</p>
              </div>
              <div className="col-sm-4">
                <AnimatedNumber
                  value={state.perc_tasks}
                  className="numbers"
                  formatValue={v => v.toFixed(0)}
                  duration={1000}
                  frameStyle={perc => ({ opacity: perc / 100 })}
                />
                <span className="numbers">%</span>
                <p>{content.sec2.subheading2}</p>
              </div>
              <div className="col-sm-4">
                <AnimatedNumber
                  value={state.num_hours}
                  className="numbers"
                  formatValue={v => v.toLocaleString("en-US", { minimumFractionDigits: 0 })}
                  duration={1000}
                  frameStyle={perc => ({ opacity: perc / 100 })}
                />
                <span className="numbers">+</span>
                <p>{content.sec2.subheading3}</p>
              </div>
            </div>
          </div>
          <div className="claim">
            <ScrollAnimation animateIn="pulse" animateOnce={true}>
              <h2 className="claim-heading">{content.sec3.heading}</h2>
              <p>{content.sec3.text}</p>
              <SafetyClaim className="claim-image" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
