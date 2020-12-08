import React, { Component } from "react"
import "../assets/scss/main.scss"
import Header from "./Header"
import Footer from "./Footer"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: "en",
    }
    this.handleSetLanguage = this.handleSetLanguage.bind(this)
  }

  handleSetLanguage(lang) {
    this.setState(state => ({
      language: lang,
    }))
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        language: this.state.language,
      })
    )

    return (
      <div>
        {/* <div id="wrapper"> */}
        <Header toggleLanguage={this.handleSetLanguage} />
        {childrenWithProps.map(childrenElement => childrenElement)}
        <Footer language={this.state.language} />
        {/* </div> */}
      </div>
    )
  }
}

export default Layout
