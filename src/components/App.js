import React, { Component } from 'react'
import { DrawerLayoutAndroid, View, Text } from 'react-native'

import TopBar from './TopBar'
import Drawer from './Drawer'
import { components, font } from '../styles'

export class App extends Component {
    render() {
        return (
            <DrawerLayoutAndroid
                style={ components.container }
                drawerWidth={ 300 }
                drawerPosition={ DrawerLayoutAndroid.positions.Left }
                renderNavigationView={ () => <Drawer/> }>

                <TopBar />

                <View style={ components.content }>
                    <Text style={ font.default }>Hello World!</Text>
                </View>

            </DrawerLayoutAndroid>
        )
    }
}
