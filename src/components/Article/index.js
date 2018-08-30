import React, { Component } from 'react'
import axios from 'axios'
import './index.styl'
import Loading from '../Loading/index'

const articleInfo = require('../../blogData/articleInfo.json')

class Article extends Component {
    constructor(props) {
        super(props)

        const urlFile = this.props.match.url
        this.currentArticle = articleInfo.find(item => new RegExp(item.file).test(urlFile))

        // 请求github raw html文件
        axios({
            ...axios.defaults,
            url: this.currentArticle.file,
            responseType: 'text',
        }).then(res => {
            // 删除<!-- TOC -->标识符
            let html = res.data.replace(/&lt;!--\s\/?TOC\s--&gt;/gm, '')
            this.refs.articleContent.innerHTML = html
            setTimeout(() => {
                this.addPostDate()
            }, 0)
        })
    }
    // 添加发布时间
    addPostDate() {
        const el = document.querySelector('h1[id]')
        if (el) {
            el.insertAdjacentHTML(
                'afterend',
                `<div class="post-datetime"> 发布于：${this.currentArticle.file.cdate} ${
                    this.currentArticle.file.ctime
                } </div>`
            )
        }
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
