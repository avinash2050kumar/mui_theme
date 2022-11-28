import { useSettings } from 'context/settings'
import React from 'react'
import { createTheme } from '@mui/material/styles'
import { getDesignTokens } from 'theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import * as locales from 'locales'

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
			</div>
		</ThemeProvider>
	)
}

export { Root }
