import { Localization } from './typing'

export const pa: Localization = {
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
				labelRowsPerPage: 'पंक्तियाँ प्रति पृष्ठ:',
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
		language: 'भाषा',
		title: 'डेमो',
		description:
			'प्रकाशन और ग्राफिक डिजाइन में, लोरेम इप्सम एक प्लेसहोल्डर टेक्स्ट है जिसका उपयोग आमतौर पर किसी दस्तावेज़ या टाइपफेस के दृश्य रूप को सार्थक सामग्री पर भरोसा किए बिना प्रदर्शित करने के लिए किया जाता है। अंतिम प्रति उपलब्ध होने से पहले लोरेम इप्सम को प्लेसहोल्डर के रूप में इस्तेमाल किया जा सकता है।',
		darkMode: 'डार्क',
		lightMode: 'लाइट',

		name: 'नाम',
		iso: 'आईएसओ\u00a0कोड',
		population: 'जनसंख्या'
	}
}
