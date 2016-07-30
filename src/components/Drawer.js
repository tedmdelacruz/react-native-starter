import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { block, components, font, colors } from '../styles'


class DrawerItem extends Component {
    render() {
        return (
            <View style={{ ...block }}>
                { this.props.children }
            </View>
        )
    }
}

export default class Drawer extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <DrawerItem>
                        <Text style={{ ...font.default, fontWeight: 'bold' }}>
                            This is the Drawer
                        </Text>
                    </DrawerItem>
                </ScrollView>
            </View>
        )
    }
}
