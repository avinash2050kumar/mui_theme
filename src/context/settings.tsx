import React, { useContext, useMemo } from 'react'
import { useLocalStorage } from '../hooks/useMakeStorage'

export const SettingsContext = React.createContext({})

export const SettingProvider = ({ children, setting }: any) => {
	const [theme, setTheme] = useLocalStorage('theme', false)

	const value = useMemo(() => {
		return {
			...setting,
			theme,
			switchTheme: (theme: any) => {
				setTheme(theme)
			}
		}
	}, [setting])

	return (
		<SettingsContext.Provider ></SettingsContext.Provider>
	)
}

export const useSettings = () => useContext(SettingsContext)
