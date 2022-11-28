import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchSomeText, setSomeText } from 'store/testing/actions'

const Testing = () => {
	const dispatch = useDispatch()
	return (
		<div>
			<Button
				variant="outlined"
				onClick={() => {
					dispatch(fetchSomeText())
				}}
			>
				Text
			</Button>
		</div>
	)
}

export { Testing }
