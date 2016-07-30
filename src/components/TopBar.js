import React, { Component } from 'react'
import { ToolbarAndroid, View, Text } from 'react-native'
import { settings } from '../config'
import { colors, components, font } from '../styles'

export default class TopBar extends Component {
    render() {
        const toolbarFont = {
            fontSize: font.BASE_FONT_SIZE * 0.85,
            textAlignVertical: 'bottom',
            color: colors.FG_COLOR
        }

        return(
            <ToolbarAndroid
                style={ components.toolbar }   
                title={ settings.APP_NAME }
                titleColor={ colors.FG_COLOR }>
                <Text style={ toolbarFont }>{ settings.APP_DESC }</Text>
            </ToolbarAndroid>
        )
    }
}
