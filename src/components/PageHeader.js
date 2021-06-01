import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

export default function PageHeader(props) {
    let content = {
        EN: {
          home: "Home",
          homeLink: "/"
        },
        VI: {
            home: "Trang chủ",
            homeLink: "/"
        },
      }
    props.language === "en" ? (content = content.EN) : (content = content.VI)
    return (
        <header className="header">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href={content.homeLink}>{content.home}</a></li>
                {props.breadcrumbList.map((item, i) => {
                    if(i == (props.breadcrumbList.length-1)) {
                        return <li className="breadcrumb-item active">{item.name}</li>
                    }
                    else {
                        return <li className="breadcrumb-item"><a href={item.link ? item.link : "/"}>{item.name}</a></li>
                    }})}
              </ol>
            </nav>
            <h1 className="title">{props.heading? props.heading : props.title}</h1>
          </ScrollAnimation>
        </header>
    )
}
