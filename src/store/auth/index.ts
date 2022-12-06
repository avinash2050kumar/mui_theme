import produce from 'immer'
import { IAPIError } from 'typings/standard'
import { AuthActionsTypes } from 'store/auth/types'

interface AuthState {
	isRestoring: boolean
	requesting: boolean
	successful: boolean
	messages: any
	errors: IAPIError[]
}

const initialState: AuthState = {
	isRestoring: true,
	requesting: false,
	successful: false,
	messages: [],
	errors: []
}

const reducer = produce((draft: AuthState, action: AuthActionsTypes) => {
	switch (action.type) {
		case 'RESTORE_STATE':
			draft.isRestoring = true
			return
		case 'RESTORE_STATE_DONE':
			draft.isRestoring = false
			return
		case 'AUTH_SUCCESS':
			draft.requesting = false
			draft.successful = true
			draft.errors = []
			return
		case 'AUTH_ERROR':
			draft.requesting = false
			draft.successful = false
			draft.errors = action.errors
			return
		default:
			return
	}
}, initialState)

export default reducer
