import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// import SOVI logo 

const Header = (props) => (
    <header>
        {/* <Link to="/" className="logo"><img src = {logo}/></Link> */}
        {/* <nav id="header-nav">
            <PrimaryMenu/>
            <div id="tobehide">
                <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;"><p id="menu-name">Menu</p></a>
            </div>
        </nav> */}
        <p>Nav bar</p>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
