import React, { Component } from 'react'
import axios from 'axios'
import './index.styl'
const articleInfo = require('../../blogData/articleInfo.json')

class Home extends Component {
    constructor(props) {
        super(props)

        axios({
            url: articleInfo[0].file,
            responseType: 'text',
        }).then(res => {
            this.refs.articleContent.innerHTML = res.data
        })
    }

    render() {
        return <div ref="articleContent">正在加载文章</div>
    }
}

export default Home
