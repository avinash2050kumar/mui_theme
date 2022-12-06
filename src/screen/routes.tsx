import { Typography } from '@mui/material'
import { Layout } from 'components/app/Layout'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { restoreState } from 'store/auth/actions'
import { RootState } from 'store/index-reducer'
import { Analytics } from './Analytics/Analytics'
import { Contacts } from './Contacts/Contacts'
import { Inventory } from './Inventory/Inventory'
import { Invoices } from './Invoices/Invoices'
import { NotFound } from './NotFound'
import { OrderCenter } from './OrderCenter/OrderCenter'
import { Quotations } from './Quotations/Quotations'
import { PrivateRoute } from './Routes/PrivateRoutes'

function AppRoutes() {
	const isRestoringState = useSelector(
		(state: RootState) => state.auth.isRestoring
	)
	const dispatch = useDispatch()

	if (isRestoringState) {
		dispatch(restoreState())
	}

	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route
						path={'/'}
						element={
							<div>
								<Typography variant={'h4'}>
									{' '}
									Welcome to CreditBook WebApp
								</Typography>
							</div>
						}
					/>
					<Route element={<PrivateRoute />}>
						<Route path={'/analytics'} element={<Analytics />} />
						<Route path={'/contacts'} element={<Contacts />} />
						<Route path={'/inventory'} element={<Inventory />} />
						<Route path={'/invoices'} element={<Invoices />} />
						<Route
							path={'/ordercenter'}
							element={<OrderCenter />}
						/>
						<Route path={'/quotation'} element={<Quotations />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default AppRoutes
