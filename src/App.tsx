import React from 'react'
import '@fontsource/poppins'
import './App.css'
import { SettingProvider } from './context/settings'
import { Root } from './screen/root'
import { Form } from './components/Form/Form'
import {LoginForm} from './components/Form/LoginForm'

function App() {
	return (
		<SettingProvider
			setting={{ theme: 'light', locale: 'en', direction: 'ltr' }}
		>
			<Root />
			{/* <Form /> */}
			<LoginForm />
			<br />
			<br />
			<br />
			<br />
			<br />
		</SettingProvider>
	)
}

export default App
