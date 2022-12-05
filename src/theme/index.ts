import { PaletteMode } from '@mui/material'

const lightPalette = {
	primary: {
		main: '#267755',
		contrastText: '#000',
		light: '#26875e'
	},
	secondary: {
		main: '#6d8726',
		light: '#9fc92a'
	},
	error: {
		main: '#d32f2f',
		light: '#ef5350'
	},
	warning: {
		main: '#ed6c02',
		light: '#ff9800'
	},
	info: {
		main: '#0288d1',
		light: '#03a9f4'
	},
	success: {
		main: '#2e7d32',
		light: '#4caf50'
	},
	divider: '#555',
	background: {
		default: '#FFFFFF',
		paper: '#fff'
	},
	customColor: {
		light: '',
		dark: '',
		main: '#267755',
		contrastText: '#fff'
	},
	text: {
		primary: '#000',
		secondary: '#222'
	}
}

const darkPalette = {
	primary: {
		main: '#267755',
		contrastText: '#000',
		light: '#26875e'
	},
	secondary: {
		main: '#6d8726',
		light: '#9fc92a'
	},
	error: {
		main: '#d32f2f',
		light: '#ef5350'
	},
	warning: {
		main: '#ed6c02',
		light: '#ff9800'
	},
	info: {
		main: '#0288d1',
		light: '#03a9f4'
	},
	success: {
		main: '#2e7d32',
		light: '#4caf50'
	},
	divider: '#555',
	background: {
		default: '#FFFFFF',
		paper: '#fff'
	},
	customColor: {
		light: '',
		dark: '',
		main: '#267755',
		contrastText: '#fff'
	},
	text: {
		primary: '#000',
		secondary: '#222'
	}
}

const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === 'light' ? lightPalette : darkPalette)
	}
})

export { getDesignTokens }
