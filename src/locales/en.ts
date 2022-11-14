import { Localization } from './typing'

export const en: Localization = {
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
				labelRowsPerPage: 'Rows per page:',
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
				loadingText: 'Loading',
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
		language: 'Language',
		title: 'Demo',
		description:
			'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
		darkMode: 'Dark',
		lightMode: 'Light',

		name: 'Name',
		iso: 'ISO\u00a0Code',
		population: 'Population'
	}
}
