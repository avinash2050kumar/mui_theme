import { useCallback, useState } from 'react'

const makeUseStorage = () =>
	function (key: string, initialValue: any) {
		// A getter function that execute once
		const [storedValue, setStoredValue] = useState(() => {
			try {
				const item = localStorage.getItem(key)
				return item ? JSON.parse(item) : initialValue
			} catch (e) {
				return initialValue
			}
		})

		// A Setter function
		const setValue = useCallback(
			(value?: any) => {
				try {
					const valueToStore =
						value instanceof Function ? value(storedValue) : value

					setStoredValue(valueToStore)
					localStorage.setItem(key, JSON.stringify(valueToStore))
				} catch (e) {
					console.log('setting error', e)
				}
			},
			[storedValue, key]
		)

		return [storedValue, setValue]
	}

export const useLocalStorage = makeUseStorage()
