import React, { Component } from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { util } from '../styles'

export default class BottomNav extends Component {
    render() {
        return(
            <View style={styles.bottomNav}>
                <TouchableHighlight style={styles.bottomNavItem} onPress={Actions.index}>
                    <Text>Dashboard</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.bottomNavItem} onPress={Actions.settings}>
                    <Text>Settings</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = {
    bottomNav: {},
    bottomNavItem: {},
}