import React, { useState, useEffect, useRef } from "react"
import Helmet from "react-helmet"
import SafetyClaim from "../svg/safety.svg"
import AnimatedNumber from "react-animated-number"
import useOnScreen from "../hooks/useOnScreen"
import ScrollAnimation from "react-animate-on-scroll"
import Layout from "../components/Layout.js"
import groupImg from "../assets/images/group.jpg"

const About = () => {
  const [state, setState] = useState({
    perc_customer: 0,
    num_tasks: 0,
    num_hours: 0,
  })
  const ref = useRef()
  const isVisible = useOnScreen(ref)

  useEffect(() => {
    if (isVisible === true) {
      setState({
        ...state,
        perc_customer: 97,
        num_tasks: 1000000,
        num_hours: 4000000,
      })
    }
  }, [isVisible])

  let content = {
    EN: {
      title: "About",
      breadcrumb1: "Home",
      breadcrumb2: "About",
      heading: "About us",
      sec1: {
        heading: "We are dedicated providers",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
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
        "As a safety-driven company, we made sure to strictly follow safety procedures before work at all times. Our team are committed to using completely safe tools and equipment while taking prompt actions to report dangerous situations."
      },
    },

    VI: {
      title: "Giới thiệu",
      breadcrumb1: "Trang chủ",
      breadcrumb2: "Giới thiệu",
      heading: "Về chúng tôi",
      sec1: {
        heading: "Chúng tôi là nhà cung cấp dịch vụ chu đáo và tận tâm",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
      },
      sec2: {
        heading: "Hơn 1500 khách hàng đã dùng dịch vụ tại SOVI",
        subheading1: "Khách hàng hài lòng với dịch vụ",
        subheading2: "Số nhiệm vụ đã hoàn thành",
        subheading3: "Giờ làm việc",
      },
      sec3: {
        heading: "An toàn là ưu tiên hàng đầu tại SOVI",
        text:
          "Chúng tôi luôn chủ động thực hiện nghiêm ngặt các biện pháp an toàn lao động. Đội ngũ nhận viên SOVI cam kết chỉ sử dụng thiết bị và công cụ đã được đảm bảo an toàn tuyệt đối và báo cáo mọi tình huống nguy hiểm nhanh nhất có thể."
      },
    },
  }

  let languageStoredInLocalStorage = localStorage.getItem("language")
  languageStoredInLocalStorage === "en"
    ? (content = content.EN)
    : (content = content.VI)

  return (
    <Layout>
      <Helmet title={content.title}></Helmet>
      <div className="about-page">
        <header className="header">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/">{content.breadcrumb1}</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {content.breadcrumb2}
                </li>
              </ol>
            </nav>
            <h1 className="title">{content.heading}</h1>
          </ScrollAnimation>
        </header>

        <div>
          <div className="intro row">
            <div className="col-md-6">
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <h2>{content.sec1.heading}</h2>
                <p>{content.sec1.text}</p>
              </ScrollAnimation>
            </div>
            <div className="col-md-6">
              <ScrollAnimation animateIn="bounceIn" animateOnce={true}>
                <img src={groupImg} className="intro-image" />
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
                  value={state.num_tasks}
                  className="numbers"
                  formatValue={v =>
                    v.toLocaleString("en-US", { minimumFractionDigits: 0 })
                  }
                  duration={1000}
                  frameStyle={perc => ({ opacity: perc / 100 })}
                />
                <span className="numbers">+</span>
                <p>{content.sec2.subheading2}</p>
              </div>
              <div className="col-sm-4">
                <AnimatedNumber
                  value={state.num_hours}
                  className="numbers"
                  formatValue={v => v.toLocaleString()}
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
