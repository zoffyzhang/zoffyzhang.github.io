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
                        <li>
                            <a href="https://github.com/zoffyzhang/zoffyzhang.github.io/raw/master/blog/%E5%BC%A0%E5%80%AC%E8%BE%89%2BWeb%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%88%2B2%E5%B9%B4%E7%BB%8F%E9%AA%8C.pdf" download="张倬辉+Web前端工程师+2年经验.pdf">
                                简历下载
                            </a>
                        </li>
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
