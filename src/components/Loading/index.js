import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.styl'

export class Loading extends Component {
    static propTypes = {
        msg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }

    render() {
        return (
            <div className="loading">
                <div className="loading-animator">
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
                <div className="loading-msg">{this.props.msg}</div>
            </div>
        )
    }
}

export default Loading
