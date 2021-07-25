import React, { useState } from "react"
import emailjs from "emailjs-com"
import { Alert } from "react-bootstrap"

const EmailForm = props => {
  const [state, setState] = useState({
    clientSubject: "",
    clientName: "",
    clientEmail: "",
    clientMobile: "",
    clientBody: "",
  })
  // const [showSuccess, setShowSuccess] = useState(false)
  // const [showError, setShowError] = useState(false)

  function handleChange(event) {
    event.preventDefault()
    const { name, value } = event.target
    setState(state => ({ ...state, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const data = {
      subject: state.clientSubject,
      // from_name: state.clientName,
      sender_email: state.clientEmail,
      // phone: state.clientMobile,
      message: state.clientBody,
    }
    try {
      emailjs
        .send(
          process.env.GATSBY_EMAILJS_SERVICE_ID,
          process.env.GATSBY_EMAILJS_TEMPLATE_ID,
          data,
          process.env.GATSBY_EMAILJS_USER_ID
        )
        .then(res => {
          console.log("Email successfully sent!")
          // setShowSuccess(true)
          setState(state => ({
            ...state,
            clientSubject: "",
            // clientName: "",
            clientEmail: "",
            // clientMobile: "",
            clientBody: "",
          }))
        }) // Handle errors
        .catch(err => {
          console.error("Unable to send email due to error:", err)
          // setShowError(true)
        })
    } catch (error) {
      console.log(error)
    }

    event.target.reset()
  }

  let content = {
    EN: {
      subject: "Subject*",
      // name: "Full Name*",
      email: "Email*",
      // phone: "Mobile Phone",
      message: "Message*",
      // successAlert: "Your email has been sent!",
      // failAlert: "Failed to send email. Please try again.",
      submitBtn: "Send",
    },

    VI: {
      subject: "Chủ đề*",
      // name: "Họ và Tên*",
      email: "Email*",
      // phone: "Số điện thoại",
      message: "Nội dung*",
      // successAlert: "Email của bạn đã gửi đi thành công!",
      // failAlert: "Lỗi xảy ra. Hãy vui lòng thử lại",
      submitBtn: "Xác nhận và gửi",
    },
  }

  props.language === "en" ? (content = content.EN) : (content = content.VI)

  return (
    <div className="email-form">
      <form className="test-mailing">
        <div>
          <input
            className={props.type}
            onChange={handleChange}
            value={state.clientSubject}
            type="text"
            name="clientSubject"
            placeholder={content.subject}
            maxLength={200}
            required
            autoComplete="off"
          />
          {/* <input
            className={props.type}
            onChange={handleChange}
            value={state.clientName}
            type="text"
            name="clientName"
            placeholder={content.name}
            maxLength={50}
            required
            autoComplete="off"
          /> */}
          <input
            className={props.type}
            onChange={handleChange}
            value={state.clientEmail}
            type="text"
            name="clientEmail"
            placeholder={content.email}
            maxLength={50}
            required
            autoComplete="off"
          />
          {/* <input
            className={props.type}
            onChange={handleChange}
            value={state.clientMobile}
            type="text"
            name="clientMobile"
            placeholder={content.phone}
            maxLength={50}
            autoComplete="off"
          /> */}
          <textarea
            className={props.type}
            name="clientBody"
            onChange={handleChange}
            placeholder={content.message}
            required
            rows="10"
            maxLength="4000"
            value={state.clientBody}
            style={{ width: "100%", height: "150px" }}
          />
        </div>
        {/* <Alert
          show={showSuccess}
          variant="success"
          onClose={() => setShowSuccess(false)}
          dismissible
        >
          <p className="mb-0">{content.successAlert}</p>
        </Alert>
        <Alert
          show={showError}
          variant="danger"
          onClose={() => setShowError(false)}
          dismissible
        >
          <p className="mb-0">{content.failAlert}</p>
        </Alert> */}
        <a className="btn btn-primary my-btn contact-btn" 
            href={`mailto:sovi@sovi.vn?subject=${state.clientSubject}&body=${state.clientBody}`}>
          {content.submitBtn}
        </a>
      </form>
    </div>
  )
}

export default EmailForm
