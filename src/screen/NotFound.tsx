import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
	const navigate = useNavigate()
	setTimeout(() => {
		// You can also pass -1 if you want to go back
		navigate('/', { replace: true })
	}, 3000)

	// Please design the page it's important
	return (
		<div>
			<p>You took a wrong turn, mate.</p>
		</div>
	)
}

export { NotFound }
