import produce from 'immer'
import { SET_SOME_VARIABLE, TestingActionsType } from './types'

type InitialState = {
	name: string
}

const initialState: InitialState = {
	name: 'Testing'
}

const reducer = produce((draft: InitialState, action: TestingActionsType) => {
	switch (action.type) {
		case SET_SOME_VARIABLE:
			draft.name = action.payload
			return
		default:
			return
	}
}, initialState)

export default reducer
