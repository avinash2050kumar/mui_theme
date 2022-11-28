import { combineReducers } from 'redux'

import testing from 'store/testing'

const rootReducer = combineReducers({
	testing
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
