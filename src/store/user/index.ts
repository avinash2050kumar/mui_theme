import produce from 'immer'
import { ISession } from 'typings/auth'

import {
	HYDRATE_SESSION,
	LOGOUT,
	SET_TOKEN,
	SET_USER,
	UserActionsTypes
} from 'store/user/types'

type UserState = {} & Partial<ISession>

const initialState: UserState = {
	token: undefined,
	user: undefined
}

const reducer = produce((draft: UserState, action: UserActionsTypes) => {
	switch (action.type) {
		case SET_TOKEN:
			draft.token = action.token
			return
		case SET_USER:
			draft.user = action.user
			return
		case HYDRATE_SESSION:
			draft.user = action.user
			draft.token = action.token
			return
		case LOGOUT:
			draft.user = undefined
			draft.token = undefined
			return
		default:
			return
	}
}, initialState)

export default reducer
