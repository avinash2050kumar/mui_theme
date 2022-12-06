import {
	HYDRATE_SESSION,
	SET_TOKEN,
	SET_USER,
	UserActionsTypes
} from 'store/user/types'
import { IUser } from 'typings/auth'

export const setToken = (token: string): UserActionsTypes => ({
	type: SET_TOKEN,
	token
})

export const setUser = (user: IUser): UserActionsTypes => ({
	type: SET_USER,
	user
})

export const setSession = (token: string, user: IUser): UserActionsTypes => ({
	type: HYDRATE_SESSION,
	token,
	user
})
