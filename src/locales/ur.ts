import { Localization } from './index'

export const ur: Localization = {
	components: {
		MuiBreadcrumbs: {
			defaultProps: {
				expandText: 'Pokaži putanju'
			}
		},
		MuiTablePagination: {
			defaultProps: {
				getItemAriaLabel: type => {
					if (type === 'first') {
						return 'Idi na prvu stranicu'
					}
					if (type === 'last') {
						return 'Idi na posljednju stranicu'
					}
					if (type === 'next') {
						return 'Idi na sljedeću stranicu'
					}
					// if (type === 'previous') {
					return 'Idi na prethodnu stranicu'
				},
				labelRowsPerPage: 'قطار فی صفحہ',
				labelDisplayedRows: ({ from, to, count }) =>
					`${from}–${to} od ${
						count !== -1 ? count : `više nego ${to}`
					}`
			}
		},
		MuiRating: {
			defaultProps: {
				getLabelText: value => {
					const lastDigit = value % 10
					const lastTwoDigits = value % 100
					if (
						[2, 3, 4].includes(lastDigit) &&
						![12, 13, 14].includes(lastTwoDigits)
					) {
						return 'Zvijezde'
					}
					return 'Zvijezda'
				},
				emptyLabelText: 'Prazno'
			}
		},
		MuiAutocomplete: {
			defaultProps: {
				clearText: 'Briši',
				closeText: 'Zatvori',
				loadingText: 'Učitavanje…',
				noOptionsText: 'Nema opcija',
				openText: 'Otvori'
			}
		},
		MuiAlert: {
			defaultProps: {
				closeText: 'Zatvori'
			}
		},
		MuiPagination: {
			defaultProps: {
				'aria-label': 'Navigacija po stranicama',
				getItemAriaLabel: (type, page, selected) => {
					if (type === 'page') {
						return `${selected ? '' : 'Idi na '}stranicu ${page}`
					}
					if (type === 'first') {
						return 'Idi na prvu stranicu'
					}
					if (type === 'last') {
						return 'Idi na zadnju stranicu'
					}
					if (type === 'next') {
						return 'Idi na sljedeću stranicu'
					}
					// if (type === 'previous') {
					return 'Idi na prethodnu stranicu'
				}
			}
		}
	},
	other: {
		language: 'زبان',
		title: 'ڈیمو',
		description:
			'پبلشنگ اور گرافک ڈیزائن میں، Lorem ipsum ایک پلیس ہولڈر ٹیکسٹ ہے جو عام طور پر بامعنی مواد پر انحصار کیے بغیر کسی دستاویز یا ٹائپ فیس کی بصری شکل کو ظاہر کرنے کے لیے استعمال ہوتا ہے۔ حتمی کاپی دستیاب ہونے سے پہلے Lorem ipsum کو بطور پلیس ہولڈر استعمال کیا جا سکتا ہے۔',
		darkMode: 'ڈارک',
		lightMode: 'لائٹ',

		name: 'نام',
		iso: ' کوڈ' + '\u00a0ISO',
		population: 'آبادی'
	}
}
