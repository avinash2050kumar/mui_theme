import { PaletteMode } from '@mui/material'

const lightPalette = {
	primary: {
		main: '#267755'
	},
	divider: '#555',
	background: {
		default: '#FFFFFF',
		paper: '#E9F1EE'
	},
	text: {
		primary: '#000',
		secondary: '#222'
	}
}

const darkPalette = {
	primary: {
		main: '#206347'
	},
	divider: '#999',
	background: {
		default: '#222',
		paper: '#333'
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
