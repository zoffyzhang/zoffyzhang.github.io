import React, { Component } from 'react'
import axios from 'axios'
import './index.styl'
import Loading from '../Loading/index'
const articleInfo = require('../../blogData/articleInfo.json')

class Home extends Component {
    constructor(props) {
        super(props)

        axios({
            ...axios.defaults,
            url: articleInfo[0].file,
            responseType: 'text',
        }).then(res => {
            this.refs.articleContent.innerHTML = res.data
        })
    }

    render() {
        return (
            <div ref="articleContent" className="article">
                <Loading />
            </div>
        )
    }
}

export default Home
