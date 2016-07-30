import React, { Component } from 'react'
import { DrawerLayoutAndroid, View, Text } from 'react-native'

import { block, components, font } from '../styles'
import TopBar from './TopBar'
import Drawer from './Drawer'
import Content from './Content'
import BottomNav from './BottomNav'


export class App extends Component {
    render() {
        return (
            <DrawerLayoutAndroid
                style={ components.container }
                drawerWidth={ 300 }
                drawerPosition={ DrawerLayoutAndroid.positions.Left }
                renderNavigationView={ () => <Drawer/> }>

                <TopBar />

                <Content>
                    <Text style={ font.default }>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum rerum iure, totam. Soluta sequi molestias vero dignissimos eligendi, aliquam, ducimus omnis, laborum quidem perspiciatis incidunt enim ad, vitae praesentium doloribus.
                    </Text>
                </Content>

                <BottomNav>
                    <View style={{ ...block, flex: 1, backgroundColor: 'red'}}>
                    </View>
                    <View style={{ ...block, flex: 1, backgroundColor: 'yellow'}}>
                    </View>
                    <View style={{ ...block, flex: 1, backgroundColor: 'blue'}}>
                    </View>
                </BottomNav>
            </DrawerLayoutAndroid>
        )
    }
}
