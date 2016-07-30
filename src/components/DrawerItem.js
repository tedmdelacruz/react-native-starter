import React, { Component } from 'react'
import { View } from 'react-native'
import { block } from '../styles'

export default class DrawerItem extends Component {
    render() {
        return (
            <View style={{ ...block, flex: 1, flexDirection: 'row' }}>
                { this.props.children }
            </View>
        )
    }
}