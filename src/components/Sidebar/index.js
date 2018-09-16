import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.styl'

class Sidebar extends Component {
    render() {
        const myLogo = require('../../imgs/logo/full-logo.svg')
        const githubLogo = require('../../imgs/sidebar/github.svg')

        return (
            <div className="sidebar">
                <div className="sidebar-content">
                    <img src={myLogo} className="sidebar-logo" alt="logo" />
                    <ul>
                        <li>
                            <Link to="/blog">首页</Link>
                        </li>
                        {/*
                            <li>
                                <Link to="/blog>关于我</Link>
                            </li>
                        */}
                    </ul>

                    <div className="find-me">
                        {
                            // eslint-disable-next-line
                            <a href="https://github.com/zoffyzhang" target="_blank">
                                <img src={githubLogo} alt="GitHub" />
                            </a>
                        }
                    </div>
                </div>

                <div className="color-overlay" />
            </div>
        )
    }
}

export default Sidebar
