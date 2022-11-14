import { Localization } from './typing'

export const pu: Localization = {
	components: {
		MuiBreadcrumbs: {
			defaultProps: {
				expandText: 'Show path'
			}
		},
		MuiTablePagination: {
			defaultProps: {
				getItemAriaLabel: type => {
					if (type === 'first') {
						return 'Go to first page'
					}
					if (type === 'last') {
						return 'Go to last page'
					}
					if (type === 'next') {
						return 'Go to next page'
					}
					// if (type === 'previous') {
					return 'Go to previous page'
				},
				labelRowsPerPage: 'ਪ੍ਰਤੀ ਪੰਨਾ ਕਤਾਰਾਂ:',
				labelDisplayedRows: ({ from, to, count }) =>
					`${from}–${to} of ${
						count !== -1 ? count : `more than ${to}`
					}`
			}
		},
		MuiRating: {
			defaultProps: {
				getLabelText: value => `${value} Star${value !== 1 ? 's' : ''}`,
				emptyLabelText: 'Empty'
			}
		},
		MuiAutocomplete: {
			defaultProps: {
				clearText: 'Clear',
				closeText: 'Close',
				loadingText: 'Loading…',
				noOptionsText: 'No options',
				openText: 'Open'
			}
		},
		MuiAlert: {
			defaultProps: {
				closeText: 'Close'
			}
		},
		MuiPagination: {
			defaultProps: {
				'aria-label': 'Pagination navigation',
				getItemAriaLabel: (type, page, selected) => {
					if (type === 'page') {
						return `${selected ? '' : 'Go to '}page ${page}`
					}
					if (type === 'first') {
						return 'Go to first page'
					}
					if (type === 'last') {
						return 'Go to last page'
					}
					if (type === 'next') {
						return 'Go to next page'
					}
					// if (type === 'previous') {
					return 'Go to previous page'
				}
			}
		}
	},
	other: {
		language: 'ਭਾਸ਼ਾ',
		title: 'ਡੈਮੋ',
		description:
			'ਪ੍ਰਕਾਸ਼ਨ ਅਤੇ ਗ੍ਰਾਫਿਕ ਡਿਜ਼ਾਈਨ ਵਿੱਚ, Lorem ipsum ਇੱਕ ਪਲੇਸਹੋਲਡਰ ਟੈਕਸਟ ਹੈ ਜੋ ਆਮ ਤੌਰ ਤੇ ਅਰਥਪੂਰਨ ਸਮੱਗਰੀ ਤੇ ਨਿਰਭਰ ਕੀਤੇ ਬਿਨਾਂ ਇੱਕ ਦਸਤਾਵੇਜ਼ ਜਾਂ ਟਾਈਪਫੇਸ ਦੇ ਵਿਜ਼ੂਅਲ ਰੂਪ ਨੂੰ ਪ੍ਰਦਰਸ਼ਿਤ ਕਰਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ। ਅੰਤਿਮ ਕਾਪੀ ਉਪਲਬਧ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ Lorem ipsum ਨੂੰ ਪਲੇਸਹੋਲਡਰ ਵਜੋਂ ਵਰਤਿਆ ਜਾ ਸਕਦਾ ਹੈ।',
		darkMode: 'ਡਾਰਕ',
		lightMode: 'ਲਾਈਟ',

		name: 'ਨਾਮ',
		iso: 'ISO\u00a0Code',
		population: 'ਜਨਸੰਖਿਆ'
	}
}
