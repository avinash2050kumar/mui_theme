import { ComponentsPropsList } from '@mui/material'
import { DirectionProps } from '../context/settings'

export interface Localization {
	components?: {
		MuiAlert?: {
			defaultProps: Pick<ComponentsPropsList['MuiAlert'], 'closeText'>
		}
		MuiBreadcrumbs?: {
			defaultProps: Pick<
				ComponentsPropsList['MuiBreadcrumbs'],
				'expandText'
			>
		}
		MuiTablePagination?: {
			defaultProps: Pick<
				ComponentsPropsList['MuiTablePagination'],
				'labelRowsPerPage' | 'labelDisplayedRows' | 'getItemAriaLabel'
			>
		}
		MuiRating?: {
			defaultProps: Pick<
				ComponentsPropsList['MuiRating'],
				'emptyLabelText' | 'getLabelText'
			>
		}
		MuiAutocomplete?: {
			defaultProps: Pick<
				ComponentsPropsList['MuiAutocomplete'],
				| 'clearText'
				| 'closeText'
				| 'loadingText'
				| 'noOptionsText'
				| 'openText'
			>
		}
		MuiPagination?: {
			defaultProps: Pick<
				ComponentsPropsList['MuiPagination'],
				'aria-label' | 'getItemAriaLabel'
			>
		}
	}
	other: {
		home: string
		ordercenter: string
		contacts: string
		inventory: string
		quotation: string
		invoices: string
		analytics: string
		creditbook: string
		logout: string
		menu: string
	}
}

export type SupportedLocales = 'en' | 'pa' | 'ur' | 'pu' | 'rur' | 'uen'

export type SupportedLanguageProps = {
	title: string
	value: SupportedLocales
	direction: DirectionProps
}
