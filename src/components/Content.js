import React, { Component } from 'react'
import { View } from 'react-native'
import { util } from '../styles'

export default class Content extends Component {
    render() {
        return (
            <View style={styles.content}>
                {this.props.children}
            </View>
        )
    }
}

const styles = {
    content: {}
}