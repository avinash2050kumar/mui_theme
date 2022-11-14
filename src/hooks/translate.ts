import React, { useEffect, useState } from 'react'
import { useSettings } from '../context/settings'
import * as locales from '../locales'

type LangKey = keyof locales.Localization['other']

const formatString = (str: string, arg: any) => {
	let tempString = str
	let symbol = ''
	while (tempString.indexOf('{') !== -1) {
		symbol = tempString
			.substring(tempString.indexOf('{') + 1, tempString.indexOf('}'))
			.trim()
		tempString = tempString.replace('{' + symbol + '}', arg[symbol] || '')
		symbol = ''
	}

	return tempString
}

const useTranslate = () => {
	const [localeStrings, setLocaleStrings] = useState<locales.Localization>(
		locales.en
	)
	const { locale } = useSettings()

	useEffect(() => {
		setLocaleStrings(locales[locale])
	}, [locale])

	return (key: LangKey, arg?: any) => {
		const str = localeStrings?.other[key]

		if (str && arg) {
			return formatString(str, arg)
		}

		return str
	}
}

export { useTranslate }
