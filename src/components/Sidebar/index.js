import React, { Component } from 'react'
import './index.styl'

class Sidebar extends Component {
    render() {
        return (
            <div className={`sidebar ${this.props.className}`}>
                <div className="sidebar-holder" />
                <div className="sidebar-content">sadsad</div>
            </div>
        )
    }
}

export default Sidebar
