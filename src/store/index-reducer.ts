import { combineReducers } from 'redux'

import testing from 'store/testing'
import user from 'store/user'
import auth from 'store/auth'

const rootReducer = combineReducers({
	testing,
	user,
	auth
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
