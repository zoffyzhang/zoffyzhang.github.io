import React, { Component } from 'react'
import './index.styl'
import Sidebar from './../Sidebar/index'

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="app-left">
                    <Sidebar />
                </div>
                <div className="app-main"> {this.props.children}</div>
            </div>
        )
    }
}

export default App
