import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { block, components, font, color } from '../styles'
import DrawerItem from './DrawerItem'

export default class Drawer extends Component {
    render() {
        return (
            <ScrollView style={ components.drawer }>
                <DrawerItem>Profile</DrawerItem>
                <DrawerItem>Settings</DrawerItem>
            </ScrollView>
        )
    }
}
