import { Localization } from './typing'

export const uen: Localization = {
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
		language: 'Bhasha',
		title: 'Demo Deakhe',
		description:
			'prakaashan aur graaphik dijain mein, lorem ipsam ek plesaholdar tekst hai jisaka upayog aamataur par kisee dastaavez ya taipaphes ke drshy roop ko saarthak saamagree par bharosa kie bina pradarshit karane ke lie kiya jaata hai. antim prati upalabdh hone se pahale lorem ipsam ko plesaholdar ke roop mein istemaal kiya ja sakata hai.',
		darkMode: 'Andhera',
		lightMode: 'Ujala',

		name: 'Naam',
		iso: 'ISO\u00a0Code',
		population: 'Janasankhya'
	}
}
