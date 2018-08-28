import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router'
import registerServiceWorker from './registerServiceWorker'

import 'normalize.css/normalize.css'
import './globalStyle/index.styl'

ReactDOM.render(<Router />, document.getElementById('root'))
registerServiceWorker()
