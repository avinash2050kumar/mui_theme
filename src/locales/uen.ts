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
		home: 'Home',
		ordercenter: 'Order Center',
		contacts: 'Contacts',
		inventory: 'Inventory',
		quotation: 'Quotation',
		invoices: 'Invoices',
		analytics: 'Analytics',
		creditbook: 'Creditbook',
		logout: 'Logout',
		menu: 'Menu'
	}
}
