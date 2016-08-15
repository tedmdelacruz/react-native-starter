import React, { Component } from 'react'
import { DrawerLayoutAndroid, View, Text } from 'react-native'

import { block, components, font } from '../styles'
import TopBar from '../components/TopBar'
import Drawer from '../components/Drawer'
import Content from '../components/Content'
import BottomNav from '../components/BottomNav'

export default class Settings extends Component {
    render() {
        return (
            <DrawerLayoutAndroid
                style={ components.container }
                drawerWidth={ 300 }
                drawerPosition={ DrawerLayoutAndroid.positions.Left }
                renderNavigationView={ () => <Drawer/> }>

                <TopBar />

                <Content>
                    <Text style={ font.default }>Settings</Text>
                </Content>

                <BottomNav/>

            </DrawerLayoutAndroid>
        )
    }
}
