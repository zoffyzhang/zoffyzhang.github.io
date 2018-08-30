import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.styl'

class Sidebar extends Component {
    render() {
        const logo = require('../../imgs/logo/full-logo.svg')

        return (
            <nav className="sidebar">
                <div className="sidebar-content">
                    <img src={logo} className="sidebar-logo" alt="logo" />
                    <ul>
                        <li>
                            <Link to="/">首页</Link>
                        </li>
                        <li>
                            <Link to="/">实验室</Link>
                        </li>
                        <li>
                            <Link to="/">关于我</Link>
                        </li>
                        <li>
                            <Link to="/">简历下载</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Sidebar
