import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { reducer } from './src/reducer'
import { AppContainer } from './src/containers'

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
)

export class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <AppContainer />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('App', () => App)