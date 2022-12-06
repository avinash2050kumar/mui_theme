import { all } from 'redux-saga/effects'

import testingSaga from 'store/testing/saga'
import authSaga from 'store/auth/saga'

export default function* () {
	yield all([...authSaga,...testingSaga])
}
