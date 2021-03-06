import React, { useState, useEffect, useRef } from "react"
import Helmet from "react-helmet"

const Notfound = () => {
  const [language, setLang] = useState(null)

  useEffect(() => {
    setLang(localStorage.getItem("language")) // en or vi
  })

  let content = {
    EN: {
      title: "Page Not Found",
      alert: "Page Not Found",
      message1:
        "The page you are looking for doesn't exist or another error occured. Go back, or head over to ",
      message2: " to choose a new direction.",
      link: "Home Page",
    },

    VI: {
      title: "Không tìm thấy trang",
      alert: "Không tìm thấy trang",
      message1:
        "Trang bạn đang tìm kiếm không tồn tại hoặc một lỗi khác đã xảy ra. Quay lại hoặc trở về ",
      message2: " để thực hiện thao tác mới.",
      link: "Trang chủ",
    },
  }

  language === "vi" ? (content = content.VI) : (content = content.EN)

  return (
    <div id="notfound">
      <Helmet title={content.title}></Helmet>
      <div className="page">
        <h1 className="status">404</h1>
        <h1 className="alert">{content.alert}</h1>
        <p className="message">
          {content.message1}
          <a href="/" className="link">
            {content.link}
          </a>
          {content.message2}
        </p>
      </div>
    </div>
  )
}

export default Notfound
