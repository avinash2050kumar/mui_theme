import { useSettings } from '../context/settings'
import React from 'react'
import { createTheme } from '@mui/material/styles'
import { getDesignTokens } from '../theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { MaterialUIComponents } from './muicomponents'
import * as locales from '../locales'
import { Basic } from './form'

const Root = () => {
	const { theme, locale, direction } = useSettings()

	const themeMode = React.useMemo(
		() => createTheme(getDesignTokens(theme), locales[locale]),
		[theme, locale]
	)

	return (
		<ThemeProvider theme={themeMode}>
			<div dir={direction}>
				<CssBaseline />
				{/* <MaterialUIComponents /> */}
				<Basic />
			</div>
		</ThemeProvider>
	)
}

export { Root }
