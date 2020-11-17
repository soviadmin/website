import React from "react"
import { useImage } from "../hooks/useImage"

export default function ContactSection() {
  // const imgContainer = useImage();
  return (
    <div className="get-quote">
      <div className="container">
        <h3 className="contact-heading">Contact Us</h3>
        <p className="contact-para">
          Find aute irure dolor in reprehend in voluptate velit esse cillu
          voluptate velit esse cillu.
        </p>
        <a href="mailto:abc@example.com">
          <button class="btn btn-primary email-btn">Request for Quote</button>
        </a>
      </div>
    </div>
  )
}
