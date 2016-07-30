import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { block, components, font, color } from '../styles'


export default class BottomNav extends Component {
    render() {
        return(
            <View style={{ ...components.bottomNav }}>
                { this.props.children }
            </View>
        )
    }
}