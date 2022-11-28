import { all } from 'redux-saga/effects'

import testingSaga from 'store/testing/saga'

export default function* () {
	yield all([...testingSaga])
}
