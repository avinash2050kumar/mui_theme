import { PaletteMode } from '@mui/material'

const lightPalette = {
	primary: {
		main: '#267755',
		contrastText: '#000'
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
		secondary: '#fff',

	}
}

const darkPalette = {
	primary: {
		main: '#267755',
		contrastText: '#ffffff'
	},
	divider: '#999',
	background: {
		default: '#222',
		paper: '#333'
	},
	customColor: {
		light: '',
		dark: '',
		contrastText: '#ffcc00'
	},
	text: {
		primary: '#fff',
		secondary: '#9e9e9e'
	}
}

const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === 'light' ? lightPalette : darkPalette)
	}
})

export { getDesignTokens }
