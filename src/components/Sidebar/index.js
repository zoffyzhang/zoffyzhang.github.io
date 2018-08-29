import React, { Component } from 'react'
import './index.styl'

class Sidebar extends Component {
    render() {
        const logo = require('../../imgs/logo/full-logo.svg')

        return (
            <div className="sidebar">
                <img src={logo} className="sidebar-logo" alt="logo" />
            </div>
        )
    }
}

export default Sidebar
