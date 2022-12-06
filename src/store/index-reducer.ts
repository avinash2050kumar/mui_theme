import { combineReducers } from 'redux'

import user from 'store/user'
import auth from 'store/auth'

const rootReducer = combineReducers({
	user,
	auth
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
