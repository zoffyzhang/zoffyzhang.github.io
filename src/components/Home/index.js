import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.styl'

let articleInfo = require('../../blogData/articleInfo.json')

class Home extends Component {
    render() {
        articleInfo.sort((a, b) => {
            const aTime = new Date(a.birthDate + ' ' + a.birthTime).getTime()
            const bTime = new Date(b.birthDate + ' ' + b.birthTime).getTime()
            return bTime - aTime
        })
        const titleList = articleInfo.map(item => {
            const title = item.file.replace(/\.html$/, '')
            return (
                <li key={title}>
                    <Link to={'/blog/article/' + item.file}>
                        <span>{title}</span>
                        <span>{item.birthDate}</span>
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
