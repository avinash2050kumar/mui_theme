import React from 'react'
import { useSettings } from '../context/settings'
import { Badge, Card, Slider, Switch, TextField } from '@mui/material'
import Button from '@mui/material/Button'

const MaterialUIComponents = () => {
	const { theme, switchTheme } = useSettings()

	return (
		<Card sx={{ maxWidth: 275 }}>
			<Switch
				checked={theme === 'dark'}
				onClick={() =>
					theme === 'dark'
						? switchTheme('light')
						: switchTheme('dark')
				}
			/>
			<br />
			<br />
			<Button variant="contained">Hello World</Button>
			<br />
			<br />
			<TextField
				id="outlined-basic"
				label="Outlined"
				variant="outlined"
			/>
			<br />
			<br />
			<Badge badgeContent={4} color="primary">
				Avinash
			</Badge>
			<br />
			<br />
			<Slider defaultValue={30} aria-label="Disabled slider" />
		</Card>
	)
}

export { MaterialUIComponents }
