import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
	// Replace with redux logic
	const [auth, setAuth] = useState<boolean>(true)

	return auth ? <Outlet /> : <Navigate to={'/'} />
}

export { PrivateRoute }
