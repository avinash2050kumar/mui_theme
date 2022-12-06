import {
	AxiosError,
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse
} from 'axios'
import { Store } from 'redux'
import { IAPIErrorResponse } from 'typings/standard'
import { RootState } from 'store/index-reducer'

export default (axiosClient: AxiosInstance, store: Store) => {
	axiosClient.interceptors.request.use((config: AxiosRequestConfig) => {
		const state: RootState = store.getState()
		const { token } = state.user

		if (token && !config.url?.includes('auth')) {
			if (!config.headers) {
				config.headers = {}
			}

			config.headers.Authorization = `Bearer ${token}`
		}

		return config
	})

	axiosClient.interceptors.response.use(
		(response: AxiosResponse<any>) => response,
		(error: AxiosError) => {
			if (error?.message === 'Network Error') {
				const networkError: IAPIErrorResponse = {
					errors: [
						{ message: 'Please check your internet connection' }
					]
				}

				return Promise.reject({
					response: {
						data: networkError
					}
				})
			}

			return Promise.reject(error)
		}
	)
}
