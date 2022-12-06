import { IAPIError } from 'typings/standard'

export const RESTORE_STATE = 'RESTORE_STATE'
export const RESTORE_STATE_DONE = 'RESTORE_STATE_DONE' 
export const AUTH_EXISTING = 'AUTH_EXISTING'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_ERROR = 'AUTH_ERROR'
export const LOGOUT = 'LOGOUT'

interface IRestoreState {
	type: typeof RESTORE_STATE
}

interface IRestoreStateDone {
	type: typeof RESTORE_STATE_DONE
	introComplete: boolean
}

interface IAuthExisting {
	type: typeof AUTH_EXISTING
}

interface IAuthSuccess {
	type: typeof AUTH_SUCCESS
}

interface IAuthError {
	type: typeof AUTH_ERROR
	errors: IAPIError[]
}

interface ILogout {
	type: typeof LOGOUT
}

export type AuthActionsTypes =
	| IRestoreState
	| IRestoreStateDone
	| IAuthExisting
	| IAuthSuccess
	| IAuthError
	| ILogout
