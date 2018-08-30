import React, { Component } from 'react'
import './index.styl'
import { Link } from 'react-router-dom'

let articleInfo = require('../../blogData/articleInfo.json')

class Home extends Component {
    render() {
        articleInfo.sort((a, b) => {
            const aTime = new Date(a.cdate + ' ' + a.ctime).getTime()
            const bTime = new Date(b.cdate + ' ' + b.ctime).getTime()
            return bTime - aTime
        })
        const titleList = articleInfo.map(item => {
            const title = item.file.replace(/\.html$/, '')
            return (
                <li key={title}>
                    <Link to={'/article/' + item.file}>
                        <span>{title}</span>
                        <span>{item.cdate}</span>
                    </Link>
                </li>
            )
        })

        return (
            <div className="home">
                <h4>全部文章</h4>
                <ul>{titleList}</ul>
            </div>
        )
    }
}

export default Home
