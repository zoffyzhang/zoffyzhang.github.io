import React, { Component } from 'react'
import axios from 'axios'
import axiosConfig from '../../api/axiosConfig'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { article: '' }

        axios({
            ...axiosConfig,
            url: 'https://raw.githubusercontent.com/zoffyzhang/zoffyzhang.github.io/master/blog/index.html',
            responseType: 'text',
        }).then(res => {
            this.setState({ article: res.data })
        })
    }

    render() {
        return <div>{window.marked(this.state.article)}</div>
    }
}

export default Home
