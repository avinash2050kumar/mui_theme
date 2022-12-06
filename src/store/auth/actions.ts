import {
	AUTH_ERROR,
	AUTH_SUCCESS,
	AuthActionsTypes,
	LOGOUT,
	RESTORE_STATE,
	RESTORE_STATE_DONE
} from 'store/auth/types'
import { IAPIError } from 'typings/standard'

export const restoreState = (): AuthActionsTypes => ({
	type: RESTORE_STATE
})

export const restoreStateDone = (introComplete: boolean): AuthActionsTypes => ({
	type: RESTORE_STATE_DONE,
	introComplete
})

export const authSuccess = (): AuthActionsTypes => ({
	type: AUTH_SUCCESS
})

export const authError = (errors: IAPIError[]): AuthActionsTypes => ({
	type: AUTH_ERROR,
	errors
})

export const logout = (): AuthActionsTypes => ({
	type: LOGOUT
})
