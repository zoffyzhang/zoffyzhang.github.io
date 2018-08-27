import React, { Component } from 'react'
import logo from '../../imgs/logo/logo.svg'
import './index.styl'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                {this.props.children}
            </div>
        )
    }
}

export default App
