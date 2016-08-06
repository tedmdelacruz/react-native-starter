import React, { Component } from 'react'
import { TouchableHighlight } from 'react-native'

export default class Button extends Component {
    handlePress() {
        this.props.onPress()
    }

    render() {
        return (
            <TouchableHighlight style={ this.props.style }
                onPress={ this.handlePress.bind(this) }>

                { this.props.children }
            </TouchableHighlight>
        )
    }
}
