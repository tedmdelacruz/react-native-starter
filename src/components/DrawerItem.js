import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { components, font } from '../styles'

export default class DrawerItem extends Component {
    render() {
        return (
            <View style={ components.drawerItem }>
                <Text style={ font.default }>
                    { this.props.children }
                </Text>
                { this.props.icon }
            </View>
        )
    }
}