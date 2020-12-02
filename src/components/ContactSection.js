import React from "react"
import { useImage } from "../hooks/useImage"

export default function ContactSection() {
  // const imgContainer = useImage();
  return (
    <div className="get-quote">
      <div className="container">
        <h3 className="contact-heading">Contact Us</h3>
        <p className="contact-para m-5">
          Find aute irure dolor in reprehend in voluptate velit esse cillu
          voluptate velit esse cillu.
        </p>
        <a href="/contact">
          <button class="btn btn-primary my-btn outlined-btn mt-2 mb-3">Request for Quote</button>
        </a>
      </div>
    </div>
  )
}
