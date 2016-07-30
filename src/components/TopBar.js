import React, { Component } from 'react'
import { ToolbarAndroid, View, Text } from 'react-native'
import { config } from '../config'
import { color, components, font } from '../styles'


export default class TopBar extends Component {
    render() {
        const toolbarFont = {
            fontSize: font.BASE_FONT_SIZE * 0.85,
            textAlignVertical: 'bottom',
            color: color.SECONDARY
        }

        return(
            <ToolbarAndroid
                style={ components.toolbar }   
                title={ config.APP_NAME }
                titleColor={ color.SECONDARY }>

                <Text style={ toolbarFont }>{ config.APP_DESC }</Text>
                
            </ToolbarAndroid>
        )
    }
}
