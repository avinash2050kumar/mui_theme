export const SET_SOME_VARIABLE = 'SOME_TEXT_GOES_HERE'
export const FETCH_SOME_VARIABLE = 'FETCH_TEXT_GOES_HERE'

interface setSomeText {
	type: typeof SET_SOME_VARIABLE
	payload: string
}

interface fetchSomeText {
	type: typeof FETCH_SOME_VARIABLE
}

export type TestingActionsType = setSomeText | fetchSomeText
