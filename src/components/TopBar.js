import React, { Component } from 'react'
import { ToolbarAndroid, TouchableHighlight, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from './Button'
import { color, util } from '../styles'

export default class TopBar extends Component {
    openDrawer() {
        this.props.openDrawer()
    }

    render() {
        return (
            <View style={styles.topbar}>
                <Button style={styles.icon}
                    onPress={this.openDrawer.bind(this)}>
                    
                    <Icon name="menu" size={30} color={color.SECONDARY}
                        style={{ textAlign: 'center' }}/>
                </Button>

                <ToolbarAndroid
                    style={styles.toolbar}   
                    title="App"
                    titleColor={color.SECONDARY} />
            </View>
        )
    }
}

const styles = {
    topbar: {},
    icon: {},
    toolbar: {},
}
