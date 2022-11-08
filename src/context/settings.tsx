import React, { useContext, useMemo } from 'react'
import { useLocalStorage } from '../hooks/useMakeStorage'

type ThemeProps = 'light' | 'dark'

type SettingsContextProps = {
	theme: ThemeProps
	switchTheme: (theme: ThemeProps) => {}
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
			switchTheme: (theme: ThemeProps) => {
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
