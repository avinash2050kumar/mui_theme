import {
	FETCH_SOME_VARIABLE,
	SET_SOME_VARIABLE,
	TestingActionsType
} from './types'

export const setSomeText = (payload: string): TestingActionsType => ({
	type: SET_SOME_VARIABLE,
	payload
})

export const fetchSomeText = (): TestingActionsType => ({
	type: FETCH_SOME_VARIABLE
})
