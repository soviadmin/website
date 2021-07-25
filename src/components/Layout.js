import React, { useState, useEffect } from "react"
import "../assets/scss/main.scss"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout(props) {
  const [language, setLang] = useState(null)

  useEffect(() => {
    setLang(localStorage.getItem("language")) // en or vi
  })

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
      <Header toggleLang={(newLang) => setLang(newLang)}/>
      {childrenWithProps.map(childrenElement => childrenElement)}
      <Footer language={language} />
    </div>
  )
}
