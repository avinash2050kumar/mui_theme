import { fork, put, take } from 'redux-saga/effects'
import { setSomeText } from './actions'
import { FETCH_SOME_VARIABLE } from './types'

function* doSomething(arg: string) {
	yield put(setSomeText('Some text goes here blah blah'))
}

function* testingWatcher() {
	while (true) {
		const { payload, type } = yield take([FETCH_SOME_VARIABLE])

		switch (type) {
			case FETCH_SOME_VARIABLE:
				yield fork(doSomething, payload)
				break
		}
	}
}

export default [testingWatcher()]
