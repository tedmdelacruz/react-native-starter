import React, { Component } from 'react'
import { View } from 'react-native'
import { block } from '../../styles'

export default class Block extends Component {
    render() {
        return (
            <View style={{ ...block, ...this.props.style }} >
                { this.props.children }
            </View>
        )
    }
}
