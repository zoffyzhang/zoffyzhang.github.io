import React, { Component } from 'react'
import './index.styl'
import Sidebar from './../Sidebar/index'

class App extends Component {
    render() {
        return (
            <div className="app">
                <Sidebar className="app-left"/>
                <div className="app-main"> {this.props.children}</div>
            </div>
        )
    }
}

export default App
