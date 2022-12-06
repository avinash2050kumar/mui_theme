import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import axios from 'utils/axios'
import setupAxiosInterceptor from 'utils/axios/AxiosInterceptor'

import IndexReducer from './index-reducer'
import IndexSaga from './index-saga'

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}

const sagaMiddleware = createSagaMiddleware()

const composeSetup = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = [sagaMiddleware]

const store = createStore(
	IndexReducer,
	composeSetup(applyMiddleware(...middleware))
)

setupAxiosInterceptor(axios, store)
sagaMiddleware.run(IndexSaga)

export { store, axios }
