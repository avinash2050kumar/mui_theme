import { PaletteMode } from '@mui/material'

declare module '@mui/material/styles' {
	interface Palette {
		customPaletteColor: Palette['primary']
	}
	interface PaletteOptions {
		customPaletteColor: PaletteOptions['primary']
	}

	interface Theme {
		customThemeColor: {
			sampleColor: React.CSSProperties['color']
		}
	}

	interface ThemeOptions {
		customThemeColor: {
			sampleColor: React.CSSProperties['color']
		}
	}

	interface PaletteColor {
		customColor?: string
	}
	interface SimplePaletteColorOptions {
		customColor?: string
	}
}

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

	text: {
		primary: '#000',
		secondary: '#222'
	},
	customPaletteColor: {
		main: '#FF0000',
		light: '#ffebee',
		dark: '#b71c1c',
		customColor: '#ff1744'
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

	text: {
		primary: '#fff',
		secondary: '#9e9e9e'
	},
	customPaletteColor: {
		main: '#FF0000',
		light: '#A52A2A',
		dark: '#913831',
		customColor: '#ffcdd2'
	}
}

const getDesignTokens = (mode: PaletteMode) => ({
	customThemeColor: {
		sampleColor: '#f06292'
	},
	palette: {
		mode,
		...(mode === 'light' ? lightPalette : darkPalette)
	}
})

export { getDesignTokens }
