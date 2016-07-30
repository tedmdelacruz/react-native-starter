import React, { Component } from 'react'
import { View, Text } from 'react-native'
import TopBar from './TopBar'

export class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TopBar />
                <Text>Hello World!</Text>
            </View>
        )
    }
}
