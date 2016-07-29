import React, { Component } from 'react'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { reducer } from './reducer'
import { AppContainer } from './containers'

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
