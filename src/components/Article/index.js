import React, { Component } from 'react'
import axios from 'axios'
import './index.styl'
import Loading from '../Loading/index'
const articleInfo = require('../../blogData/articleInfo.json')

class Article extends Component {
    constructor(props) {
        super(props)

        axios({
            ...axios.defaults,
            url: articleInfo[0].file,
            responseType: 'text',
        }).then(res => {
            this.refs.articleContent.innerHTML = res.data
            setTimeout(() => {
                this.addPostDate()
            }, 0)
        })
    }

    addPostDate() {
        const el = document.querySelector('h1[id]')
        if (el) {
            el.insertAdjacentHTML(
                'afterend',
                `<div class="post-datetime"> 发布于：${articleInfo[0].cdate} ${articleInfo[0].ctime} </div>`
            )
        }
    }

    componentDidMount() {
        this.addPostDate()
    }

    render() {
        return (
            <div ref="articleContent" className="article">
                <Loading />
            </div>
        )
    }
}

export default Article
