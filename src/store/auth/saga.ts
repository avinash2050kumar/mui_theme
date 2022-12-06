import { call, fork, put, take } from 'redux-saga/effects'
import { setSession } from 'store/user/actions'
import { HYDRATE_SESSION } from 'store/user/types'
import { RESTORE_STATE } from './types'

function* restoreAppState() {
	try {
		const token: string = yield call(
			async () => await localStorage.getItem('token')
		)

		if (token) {
			// Validate token 

			yield put(setSession(token, { name: 'Avinash' })) // TODO: Replace user here
		}
	} catch (e) {
		console.log('we got some error', e)
	} finally {
		// do something at the end
	}
}

function* restoreAppStateWatcher() {
	yield take([RESTORE_STATE])
	yield fork(restoreAppState)
}

function* authWatcher() {
	while (true) {
		// @ts-ignore
		const { payload, type, action, data }: any = yield take([
			HYDRATE_SESSION
		])

		let task
		switch (type) {
			case HYDRATE_SESSION:
				// no need to do anything else here
				break
		}
	}
}

export default [restoreAppStateWatcher(), authWatcher()]
