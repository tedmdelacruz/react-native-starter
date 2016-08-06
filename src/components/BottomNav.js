import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { components, font, color } from '../styles'


export default class BottomNav extends Component {
    render() {
        return(
            <View style={ components.bottomNav }>
                <View style={ components.bottomNavItem } />
                <View style={ components.bottomNavItem } />
                <View style={ components.bottomNavItem } />
            </View>
        )
    }
}