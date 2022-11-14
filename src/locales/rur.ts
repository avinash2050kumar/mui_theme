import { Localization } from './typing'

export const rur: Localization = {
	components: {
		MuiBreadcrumbs: {
			defaultProps: {
				expandText: 'रास्ता दिखायें'
			}
		},
		MuiTablePagination: {
			defaultProps: {
				getItemAriaLabel: type => {
					if (type === 'first') {
						return 'पहले पृष्ठ पर जाएँ'
					}
					if (type === 'last') {
						return 'अंतिम पृष्ठ पर जाएँ'
					}
					if (type === 'next') {
						return 'अगले पृष्ठ पर जाएँ'
					}
					// if (type === 'previous') {
					return 'पिछले पृष्ठ पर जाएँ'
				},
				labelRowsPerPage: 'صفحو في صفحو:',
				labelDisplayedRows: ({ from, to, count }) =>
					`${from}-${to === -1 ? count : to} कुल ${count} में`
			}
		},
		MuiRating: {
			defaultProps: {
				getLabelText: value => `${value} तार${value !== 1 ? 'े' : 'ा'}`,
				emptyLabelText: 'रिक्त'
			}
		},
		MuiAutocomplete: {
			defaultProps: {
				clearText: 'हटायें',
				closeText: 'बंद करें',
				loadingText: 'लोड हो रहा है…',
				noOptionsText: 'कोई विकल्प नहीं',
				openText: 'खोलें'
			}
		},
		MuiAlert: {
			defaultProps: {
				closeText: 'बंद करें'
			}
		},
		MuiPagination: {
			defaultProps: {
				'aria-label': 'पृस्ठानुसार संचालन',
				getItemAriaLabel: (type, page, selected) => {
					if (type === 'page') {
						return `पृष्ठ ${page} ${selected ? '' : ' पर जाएँ'}`
					}
					if (type === 'first') {
						return 'पहले पृष्ठ पर जाएँ'
					}
					if (type === 'last') {
						return 'अंतिम पृष्ठ पर जाएँ'
					}
					if (type === 'next') {
						return 'अगले पृष्ठ पर जाएँ'
					}
					// if (type === 'previous') {
					return 'पिछले पृष्ठ पर जाएँ'
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

		name: 'Naam',
		iso: 'ISO\u00a0Code',
		population: 'Janasankhya'
	}
}
