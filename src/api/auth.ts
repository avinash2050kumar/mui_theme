import { axios } from 'store'
import { ISession } from 'typings/auth'
import { AxiosError } from 'axios'

export const auth = async (action: any, payload: any) => {
	const url = `/api/auth/local/${action}`

	try {
		let { data } = await axios.post<ISession>(url, payload)

		return data
	} catch (error: any) {
		throw error.response.data
	}
}

export const requestPasswordReset = async (email: string) => {
	if (!email) {
		return
	}

	try {
		const url = '/api/auth/local/send-password-reset-code'

		await axios.post(url, {
			email
		})
	} catch (error: any) {
		throw error.response.data
	}
}

export const attemptResetPassword = async (
	email: string,
	code: string,
	newPassword: string
) => {
	try {
		const url = '/api/auth/local/reset-password'

		await axios.post(url, {
			email,
			code,
			newPassword
		})
	} catch (error: any) {
		throw error.response.data
	}
}
