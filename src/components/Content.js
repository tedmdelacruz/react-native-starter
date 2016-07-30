import React, { Component } from 'react'
import { View } from 'react-native'
import { block, components } from '../styles'

export default class Content extends Component {
    render() {
        return (
            <View style={{ ...components.content, ...block, }}>
                { this.props.children }
            </View>
        )
    }
}