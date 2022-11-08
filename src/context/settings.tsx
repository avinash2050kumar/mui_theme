import React, { useContext, useMemo } from 'react'
import { useLocalStorage } from '../hooks/useMakeStorage'

type SettingsContextProps = {
	theme: 'light' | 'dark'
	switchTheme: (theme: any) => {}
}

const SettingsContext = React.createContext<SettingsContextProps>(
	{} as SettingsContextProps
)

export const SettingProvider = ({ children, setting }: any) => {
	const [theme, setTheme] = useLocalStorage('theme', setting.theme || 'light')

	const value = useMemo(() => {
		return {
			...setting,
			theme,
			switchTheme: (theme: any) => {
				setTheme(theme)
			}
		}
	}, [setting, theme, setTheme])

	return (
		<SettingsContext.Provider value={value}>
			{children}
		</SettingsContext.Provider>
	)
}

export const useSettings = () => useContext(SettingsContext)
