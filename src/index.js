import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router'
import registerServiceWorker from './registerServiceWorker'
import axios from 'axios'
import axiosConfig from './api/axiosConfig'

import 'normalize.css/normalize.css'
import './globalStyle/index.styl'

// 全局配置axios
axios.defaults = { ...axios.defaults, ...axiosConfig }

ReactDOM.render(<Router />, document.getElementById('root'))
registerServiceWorker()
