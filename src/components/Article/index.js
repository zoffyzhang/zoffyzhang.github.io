import React, { Component } from 'react'
import axios from 'axios'
import './index.styl'
import Loading from '../Loading/index'

const articleInfo = require('../../blogData/articleInfo.json')

class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isArticleRender: false,
        }

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
            this.setState({
                isArticleRender: true,
            })
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
                `<div class="post-datetime"> 发布于：${this.currentArticle.birthDate} ${this.currentArticle.birthTime} </div>`
            )
        }
    }

    render() {
        return (
            <div>
                <div ref="articleContent" className="article">
                    <Loading />
                </div>

                {this.state.isArticleRender && (
                    <div className="license">
                        本站内容遵循「
                        <a href="http://creativecommons.org/licenses/by/4.0/deed.zh">署名 4.0 国际 (CC BY 4.0)</a>
                        」协议
                    </div>
                )}
            </div>
        )
    }
}

export default Article
