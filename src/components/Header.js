import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// import SOVI logo 

const Header = (props) => (
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand ml-lg-5 ml-sm-0" href="#">Logo</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item mr-5">
                        <Link class="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item mr-5">
                        <Link class="nav-link" to="/about">About</Link>
                    </li>
                    <li class="nav-item mr-5">
                        <Link class="nav-link" to="/service">Service</Link>
                    </li>
                    <li class="nav-item mr-5">
                        <Link class="nav-link" to="/equipment">Equipment</Link>
                    </li>
                    <li class="nav-item mr-5">
                        <Link class="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Request a Quote</button>
            </div>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
