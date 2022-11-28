import React, { useContext, useMemo } from 'react'
import { useLocalStorage } from 'hooks/useMakeStorage'
import { SupportedLocales } from 'locales'

export type ThemeProps = 'light' | 'dark'
export type DirectionProps = 'ltr' | 'rtl'

type SettingsContextProps = {
	theme: ThemeProps
	switchTheme: () => void
	locale: SupportedLocales
	setLocale: (locale: SupportedLocales) => void
	direction: DirectionProps
	setDirection: (dir: DirectionProps) => void
}

const SettingsContext = React.createContext<SettingsContextProps>(
	{} as SettingsContextProps
)

export const SettingProvider = ({ children, setting }: any) => {
	const [theme, setTheme] = useLocalStorage('theme', setting.theme || 'light')
	const [locale, setLocale] = useLocalStorage(
		'locale',
		setting.locale || 'en'
	)
	const [direction, setDirection] = useLocalStorage(
		'direction',
		setting.locale || 'ltr'
	)

	const value = useMemo(() => {
		return {
			...setting,
			theme,
			switchTheme: () => {
				setTheme(theme === 'light' ? 'dark' : 'light')
			},
			locale,
			setLocale: (locale: SupportedLocales) => {
				setLocale(locale)
			},
			direction,
			setDirection: (dir: DirectionProps) => {
				setDirection(dir)
			}
		}
	}, [setting, theme, setTheme, setLocale, locale, direction, setDirection])

	return (
		<SettingsContext.Provider value={value}>
			{children}
		</SettingsContext.Provider>
	)
}

export const useSettings = () => useContext(SettingsContext)
