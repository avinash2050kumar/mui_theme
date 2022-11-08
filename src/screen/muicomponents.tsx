import React from 'react'
import { useSettings } from '../context/settings'
import { Switch } from '@mui/material'
import Button from '@mui/material/Button'

const MaterialUIComponents = () => {
	const { theme, switchTheme } = useSettings()

	return (
		<div className="App">
			<Switch
				checked={theme === 'dark'}
				onClick={() =>
					theme === 'dark'
						? switchTheme('light')
						: switchTheme('dark')
				}
			/>
			<Button variant="contained">Hello World</Button>
		</div>
	)
}

export { MaterialUIComponents }
