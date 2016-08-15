import React, { Component } from 'react'
import { DrawerLayoutAndroid, View, Text } from 'react-native'

import { block, components, font } from '../styles'
import TopBar from '../components/TopBar'
import Drawer from '../components/Drawer'
import Content from '../components/Content'
import BottomNav from '../components/BottomNav'

export default class Home extends Component {
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

                <BottomNav/>

            </DrawerLayoutAndroid>
        )
    }
}
