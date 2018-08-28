import React, { Component } from 'react'
import axios from 'axios'
import axiosConfig from '../../api/axiosConfig'
import './index.styl'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { article: '' }

        axios({
            ...axiosConfig,
            url: 'https://raw.githubusercontent.com/zoffyzhang/zoffyzhang.github.io/master/articles/The%20Joshua%20Trees%20In%20Computer%20Science.html',
            responseType: 'text',
        }).then(res => {
            // this.setState({ article: res.data })
            this.refs.articleContent.innerHTML = res.data;
        })
    }

    render() {
        return <div ref='articleContent'></div>
    }
}

export default Home
