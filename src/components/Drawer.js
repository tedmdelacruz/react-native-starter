import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { block, components, font, color } from '../styles'
import DrawerItem from './DrawerItem'


export default class Drawer extends Component {
    render() {
        return (
            <ScrollView style={ components.drawer }>
                <DrawerItem>
                    <Text style={{ ...font.default, flex: 2 }}>
                        Settings
                    </Text>
                    <View style={{ ...block, backgroundColor: color.PRIMARY }}/>
                </DrawerItem>
            </ScrollView>
        )
    }
}
