import React, { Component } from 'react'
import { View } from 'react-native'
import { Block } from './common'
import { components } from '../styles'

export default class Content extends Component {
    render() {
        return (
            <Block style={ components.content }>
                { this.props.children }
            </Block>
        )
    }
}