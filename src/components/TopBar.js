import React, { Component } from 'react'
import { ToolbarAndroid, View, Text } from 'react-native'
import { settings } from '../config'
import { colors, styles } from '../styles'

export default class TopBar extends Component {
    render() {
        console.log(settings.APP_NAME)
        return(
            <View>
                <ToolbarAndroid
                    style={ styles.toolbar }
                    title={ settings.APP_NAME }
                    titleColor={ colors.FG_COLOR }/>
            </View>
        )
    }
}
