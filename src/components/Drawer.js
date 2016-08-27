import React, { Component } from 'react'
import { ScrollView, TouchableHighlight, View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { util } from '../styles'
import Button from './Button'

export default class Drawer extends Component {
    render() {
        return (
            <ScrollView style={styles.drawer}>
                <TouchableHighlight style={styles.drawerItem} onPress={Actions.index}>
                    <Text>
                        Dashboard
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.drawerItem} onPress={Actions.settings}>
                    <Text>
                        Settings
                    </Text>
                </TouchableHighlight>
            </ScrollView>
        )
    }
}

const styles = {
    drawer: {},
    drawerItem: {},
}
