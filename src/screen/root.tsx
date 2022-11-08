import { useSettings } from '../context/settings'
import React from 'react'
import { createTheme } from '@mui/material/styles'
import { getDesignTokens } from '../theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { MaterialUIComponents } from './muicomponents'

const Root = () => {
	const { theme } = useSettings()

	const themeMode = React.useMemo(
		() => createTheme(getDesignTokens(theme)),
		[theme]
	)

	return (
		<ThemeProvider theme={themeMode}>
			<CssBaseline />
			<MaterialUIComponents />
		</ThemeProvider>
	)
}

export { Root }
