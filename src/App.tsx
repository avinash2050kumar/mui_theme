import React from 'react'
import '@fontsource/poppins'
import './App.css'
import { SettingProvider } from './context/settings'
import { Root } from './screen/root'

function App() {
	return (
		<SettingProvider
			setting={{ theme: 'light', locale: 'en', direction: 'ltr' }}
		>
			<Root />
		</SettingProvider>
	)
}

export default App
