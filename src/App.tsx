import React from 'react'
import '@fontsource/poppins'
import './App.css'
import { Root } from 'screen/root'
import { SettingProvider } from 'context/settings'

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
