import { useSettings } from 'context/settings'
import React from 'react'
import { createTheme } from '@mui/material/styles'
import { getDesignTokens } from 'theme'
import { Provider as StateProvider } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material'
import * as locales from 'locales'
import { store } from 'store'
import AppRoutes from './routes'

const Root = () => {
	const { theme, locale, direction } = useSettings()

	const themeMode = React.useMemo(
		() => createTheme(getDesignTokens(theme), locales[locale]),
		[theme, locale]
	)

	return (
		<StateProvider store={store}>
			<ThemeProvider theme={themeMode}>
				<div dir={direction}>
					<CssBaseline />
					<AppRoutes />
				</div>
			</ThemeProvider>
		</StateProvider>
	)
}

export { Root }
