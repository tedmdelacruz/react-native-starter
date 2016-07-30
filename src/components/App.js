import React, { Component } from 'react'
import { View, Text } from 'react-native'

import TopBar from './TopBar'
import { components, text } from '../styles'

export class App extends Component {
    render() {
        return (
            <View style={ components.container }>
                <TopBar />
                <View style={ components.content }>
                    <Text style={ text.default }>Hello World!</Text>
                </View>
            </View>
        )
    }
}
