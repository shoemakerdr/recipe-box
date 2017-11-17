import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Modal extends Component {
    constructor (props) {
        super(props)
        this.redirectHome = this.redirectHome.bind(this)
        this.state = {
            shouldRedirect: props.escapePressed
        }
    }

    componentWillReceiveProps (nextProps) {
        this.setState({shouldRedirect: nextProps.escapePressed})
    }

    redirectHome (event) {
        if (event.target.id === 'Modal' || event.target.id === 'x-escape') {
            this.setState({shouldRedirect: true})
        }
    }

    render () {
        const { shouldRedirect } = this.state
        return (
            <div
                id='Modal'
                onClick={this.redirectHome}
                className='Modal modal-wrapper'
            >
                <div className='modal-card'>
                    <div
                        id='x-escape'
                        onClick={this.redirectHome}
                        className='x-button'
                    >
                        ×
                    </div>
                    {this.props.children}
                </div>
                {shouldRedirect &&
                    <Redirect to='/' />}
            </div>
        )
    }
}
export default Modal