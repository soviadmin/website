import React from "react"
import AboutIllustration from "../svg/illustration1.svg"
import ScrollAnimation from "react-animate-on-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"

export default function AboutSection(props) {
  // const imgContainer = useImage();
  let content = {
    EN: {
      title1: "From Ocean to Air",
      title2: "We've got your back",
      link: "More about us",
    },

    VI: {
      title1: "Từ biển đến hàng không",
      title2: "Chúng tôi luôn hỗ trợ bạn",
      link: "Tìm hiểu thêm về công ty SOVI",
    },
  }

  props.language === "en" ? (content = content.EN) : (content = content.VI)

  return (
    <div className="about-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xs-12 header">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
              <h2 className="heading-one">{content.title1},</h2>
              <h2 className="heading-two">{content.title2}</h2>
              <p className="mr-5 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas fermentum, lorem at egestas gravida, tortor ex
                tincidunt felis, quis molestie turpis sem nec ex. Praesent
                laoreet magna in suscipit volutpat. In euismod metus at sem
                lacinia gravida. Suspendisse porta molestie arcu, eu maximus
                mauris tincidunt hendrerit.
              </p>
              <a href="/about" className="about-link">
                {content.link}{" "}
                <FontAwesomeIcon
                  style={{ paddingTop: "3px" }}
                  icon={faCaretRight}
                />
              </a>
            </ScrollAnimation>
          </div>
          <div className="col-lg-6 col-xs-12">
            <ScrollAnimation animateIn="pulse" animateOnce={true}>
              <AboutIllustration className="illustration" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  )
}
