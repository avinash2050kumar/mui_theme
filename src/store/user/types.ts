import { ISession, IUser } from 'typings/auth'

export const SET_USER = 'SET_USER'
export const SET_TOKEN = 'SET_TOKEN'
export const HYDRATE_SESSION = 'HYDRATE_SESSION'
export const LOGOUT = 'LOGOUT'

type SetToken = {
	type: typeof SET_TOKEN
	token: string
}

type SetUser = {
	type: typeof SET_USER
	user: IUser
}

type HydrateSession = {
	type: typeof HYDRATE_SESSION
} & ISession

interface ILogout {
	type: typeof LOGOUT
}

export type UserActionsTypes = SetToken | SetUser | HydrateSession | ILogout
