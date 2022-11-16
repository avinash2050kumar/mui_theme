import React, { useState } from 'react'
import { useSettings } from '../context/settings'
import {
	Autocomplete,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	TextField,
	Typography
} from '@mui/material'
import Button from '@mui/material/Button'
import { SupportedLocales } from '../locales'
import { SupportedLanguage } from '../data/locale'
import { useTranslate } from '../hooks/translate'
import { WbSunny, DarkMode } from '@mui/icons-material'
import DenseTable from '../components/table'
import { OtpInput } from '../components/OtpInput'

// It's only for demo purpose
// It's not a reusable component
const MaterialUIComponents = () => {
	const [value, setValue] = useState('')
	const { switchTheme, setLocale, locale, setDirection, theme } =
		useSettings()
	const translate = useTranslate()

	return (
		<div
			style={{
				display: 'flex',
				height: '100vh',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<Card sx={{ maxWidth: 500, padding: 4 }}>
				<Button
					size="small"
					color="primary"
					onClick={() => switchTheme()}
				>
					{theme === 'light' ? (
						<WbSunny color={'primary'} />
					) : (
						<DarkMode color={'primary'} />
					)}
				</Button>
				<CardActionArea>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{translate('title')}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{translate('description')}
						</Typography>
					</CardContent>
				</CardActionArea>
				<div style={{ height: 20 }} />
				<Autocomplete
					options={SupportedLanguage}
					getOptionLabel={key => `${key.title}`}
					style={{ width: 300 }}
					disableClearable
					onChange={(event: any, newValue: any) => {
						// change the locale and
						setLocale(newValue.value as SupportedLocales)
						setDirection(newValue.direction)
					}}
					renderInput={params => (
						<TextField
							{...params}
							label={translate('language')}
							fullWidth
						/>
					)}
					lang={locale}
				/>
				<div style={{ height: 20 }} />
				{/*<DenseTable />*/}
				<OtpInput
					value={value}
					onChange={val => setValue(val)}
					length={6}
					error
				/>
				<CardActions></CardActions>
			</Card>
		</div>
	)
}

export { MaterialUIComponents }
