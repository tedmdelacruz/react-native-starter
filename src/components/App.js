import React, { Component } from 'react'
import { DrawerLayoutAndroid, View, Text } from 'react-native'

import TopBar from './TopBar'
import Drawer from './Drawer'
import { block, components, font } from '../styles'

export class App extends Component {
    render() {

        return (
            <DrawerLayoutAndroid
                style={ components.container }
                drawerWidth={ 300 }
                drawerPosition={ DrawerLayoutAndroid.positions.Left }
                renderNavigationView={ () => <Drawer/> }>

                <TopBar />

                <View style={{ ...components.content, ...block, }}>
                    <Text style={ font.default }>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum rerum iure, totam. Soluta sequi molestias vero dignissimos eligendi, aliquam, ducimus omnis, laborum quidem perspiciatis incidunt enim ad, vitae praesentium doloribus.
                    </Text>
                </View>

            </DrawerLayoutAndroid>
        )
    }
}
