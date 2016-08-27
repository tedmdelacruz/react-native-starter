import React, { Component } from 'react'
import { ScrollView, RefreshControl, Text } from 'react-native'

import { util } from '../styles'
import BaseLayout from './BaseLayout'
import Button from '../components/Button'

export default class Home extends Component {
    store

    constructor(props) {
        super()
        this.store = props.store
    }

    fetchData() {
        this.store.fetchData()
    }

    render() {
        return (
            <BaseLayout>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.store.isLoading}
                            onRefresh={this.fetchData.bind(this)} />
                        }>
                    
                    <Button style={[ util.BG_PRIMARY, util.PUSH_BOTTOM ]} onPress={this.fetchData.bind(this)}>
                        <Text>
                            {this.store.isLoading 
                                ? 'Fetching data...'
                                : 'Fetch data from an external API'}
                            {this.store.message ? "\n" + this.store.message : null}
                        </Text>
                    </Button>
                    
                </ScrollView>
            </BaseLayout>
        )
    }
}
