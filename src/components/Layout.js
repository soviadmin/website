import React, { useState, useEffect } from "react"
import "../assets/scss/main.scss"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout(props) {
  // const handleSetLanguage = newlanguage => {
  //   setLanguage(newlanguage)
  // }

  let childrenWithProps = React.Children.map(props.children, child =>
    React.cloneElement(child, {
      language: language,
    })
  )

  // useEffect(() => {
  //   setLanguage(localStorage.getItem("language"))
  // }, [language])

  return (
    <div>
      <Header />
      {childrenWithProps.map(childrenElement => childrenElement)}
      <Footer language={language} />
    </div>
  )
}
