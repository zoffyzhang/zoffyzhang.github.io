import React, { Component } from 'react'
import axios from 'axios'
import axiosConfig from '../../api/axiosConfig'
import './index.styl'
const articleInfo = require('../../blogConfig/articleInfo.json')
const blogConfig = require('../../blogConfig/blog.json')

class Home extends Component {
    constructor(props) {
        super(props)

        axios({
            ...axiosConfig,
            url: blogConfig.articleBaseUrl + articleInfo[0].file,
            responseType: 'text',
        }).then(res => {
            this.refs.articleContent.innerHTML = res.data
        })
    }

    render() {
        return <div ref="articleContent" />
    }
}

export default Home
