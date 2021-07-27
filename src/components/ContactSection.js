import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import EmailForm from "./EmailForm"

export default function ContactSection(props) {
  let content = {
    EN: {
      title: "Contact us",
      text:
        "Send us your message by filling out this form. Our staff will be happy to get in touch with you",
      button: "Request for Quote",
    },

    VI: {
      title: "Liên hệ với chúng tôi",
      text:
        "Gửi thông tin yêu cầu của bạn bằng cách điền vào biểu mẫu. Nhân viên của chúng tôi sẽ phản hồi nhanh nhất có thể",
      button: "Liên hệ",
    },
  }

  props.language === "vi" ? (content = content.VI) : (content = content.EN)

  return (
    <div className="get-quote">
      <ScrollAnimation animateIn="pulse" animateOnce={true}>
        <div className="container">
          <h1 className="contact-heading">{content.title}</h1>
          <p className="contact-para m-5">{content.text}.</p>

          <EmailForm type="home" language={props.language} />
          {/* <a href="/contact">
            <button class="btn btn-primary my-btn outlined-btn mt-2 mb-3">
              {content.button}
            </button>
          </a> */}
        </div>
      </ScrollAnimation>
    </div>
  )
}
