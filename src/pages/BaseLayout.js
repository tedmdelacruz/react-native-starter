import React, { Component } from 'react'
import { DrawerLayoutAndroid, View, Text } from 'react-native'

import { util } from '../styles'
import TopBar from '../components/TopBar'
import Drawer from '../components/Drawer'
import Content from '../components/Content'
import BottomNav from '../components/BottomNav'

export default class BaseLayout extends Component {
    constructor() {
        super()
        this.openDrawer = this.openDrawer.bind(this)
    }

    openDrawer() {
        this.drawer.openDrawer()
    }

    render() {
        return (
            <DrawerLayoutAndroid
                ref={(_drawer) => this.drawer = _drawer}
                style={styles.container}
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => <Drawer/>}>

                <TopBar openDrawer={this.openDrawer} />

                <Content>
                    {this.props.children}
                </Content>

                <BottomNav/>

            </DrawerLayoutAndroid>
        )
    }
}

const styles = {
    container: {},
}
