import React, { Component } from 'react'
import { ToolbarAndroid, View, Text } from 'react-native'
import { settings } from '../config'
import { colors, components } from '../styles'

export default class TopBar extends Component {
    render() {
        return(
            <ToolbarAndroid
                style={ components.toolbar }   
                title={ settings.APP_NAME }
                titleColor={ colors.FG_COLOR }/>
        )
    }
}
