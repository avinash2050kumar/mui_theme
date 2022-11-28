import React from 'react'
import Box from '@mui/material/Box'
import OtpTextField from './OtpTextField'
import { KEYBOARD_KEY } from 'data/event'
import {
	getFilledArray,
	joinArrayStrings,
	mergeArrayStringFromIndex,
	updateIndex
} from 'helpers/array'
import { split } from 'helpers/string'
import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField/TextField'
import { BoxProps as MuiBoxProps } from '@mui/material/Box/Box'

type ValueSplitted = {
	character: string
	inputReference: React.RefObject<HTMLInputElement>
}[]

type TextFieldProps = Omit<
	MuiTextFieldProps,
	'onChange' | 'select' | 'multiline' | 'defaultValue' | 'value'
>

type BoxProps = Omit<MuiBoxProps, 'onChange'>

export type OtpProps = {
	value?: string
	length?: number
	TextFieldsProps?: TextFieldProps
	onComplete?: (value: string) => void
	onChange?: (value: string) => void
	error?: boolean
}

export type Props = BoxProps & OtpProps

const OtpInput = React.forwardRef((props: Props, propRef: Props['ref']) => {
	const {
		value = '',
		length = 4,
		onChange = value => {
			console.log('onChange', value)
		},
		TextFieldsProps,
		onComplete = value => {
			console.log('onComplete', value)
		},
		className,
		error,
		...boxProps
	} = props

	const {
		onPaste,
		onFocus,
		onKeyDown,
		className: TextFieldClassName,
		...restTextFieldsProps
	} = TextFieldsProps || {}

	const valueSplitted: ValueSplitted = getFilledArray(
		length,
		(val: number, index: number) => {
			return {
				character: value[index] || '',
				inputReference: React.createRef<HTMLInputElement>()
			}
		}
	)

	const getIndex = (inputElement: HTMLInputElement) => {
		return valueSplitted.findIndex(({ inputReference }) => {
			return inputReference.current === inputElement
		})
	}

	const getCharSplitted = () => {
		return valueSplitted.map(({ character }) => {
			return character
		})
	}

	const onInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		e.preventDefault()
		e.target.select()
		onFocus?.(e)
	}

	const onInputPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
		e.preventDefault()
		// get copied item
		const content = e.clipboardData.getData('text/plain')
		const inputEle = e.target as HTMLInputElement
		const currentInputIdx = getIndex(inputEle)
		const currentChar = getCharSplitted()
		const chars = mergeArrayStringFromIndex(
			currentChar,
			split(content),
			currentInputIdx
		)
		const charIdxEmpty = chars.findIndex((char, index) => {
			return index > currentInputIdx && char === ''
		})

		const newVal = joinArrayStrings(chars)
		onChange?.(newVal)
		if (newVal.length === length) {
			onComplete?.(newVal)
		}

		if (charIdxEmpty !== -1) {
			focusInputByIdx(charIdxEmpty)
		} else {
			blurInputByIdx(currentInputIdx)
		}
		onPaste?.(e)
	}

	const focusInputByIdx = (inputIndex: number) => {
		valueSplitted[inputIndex]?.inputReference.current?.focus()
	}

	const blurInputByIdx = (inputIndex: number) => {
		valueSplitted[inputIndex]?.inputReference.current?.blur()
	}

	const selectInputByIdx = (inputIndex: number) => {
		valueSplitted[inputIndex]?.inputReference.current?.select()
	}

	const nextInput = (currentInputIndex: number) => {
		if (currentInputIndex + 1 === length) {
			blurInputByIdx(currentInputIndex)
		} else if (valueSplitted[currentInputIndex + 1].character) {
			selectInputByIdx(currentInputIndex + 1)
		} else {
			focusInputByIdx(currentInputIndex + 1)
		}
	}

	const prevInput = (currentInputIndex: number) => {
		if (currentInputIndex > 0) {
			selectInputByIdx(currentInputIndex - 1)
		}
	}

	const mergeInputValues = (charIndex: number, charValue: string) => {
		const newValueSplitted = updateIndex(
			getCharSplitted(),
			charIndex,
			charValue
		)
		return joinArrayStrings(newValueSplitted)
	}

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// Every input box has either one value or empty string
		const char = e.target.value[0] || ''
		// get current active input box
		const currentInputIdx = getIndex(e.target)

		// it merge all input value into one
		const newVal = mergeInputValues(currentInputIdx, char)
		// also pass to the onChange function if it's available
		onChange?.(newVal)

		if (newVal.length === length) {
			onComplete?.(newVal)
		}

		if (char !== '') {
			if (newVal.length < length) {
				nextInput(newVal.length - 1)
			} else {
				nextInput(currentInputIdx)
			}
		} else if (newVal[currentInputIdx]) {
			selectInputByIdx(currentInputIdx)
		} else {
			prevInput(currentInputIdx)
		}
	}

	// Detect the keyboard button press,and move the cursor accordingly
	const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const inputEle = e.target as HTMLInputElement
		const currentInputIdx = getIndex(inputEle)

		if (inputEle.value === e.key) {
			// when user press some value
			e.preventDefault()
			nextInput(currentInputIdx)
		} else if (!inputEle.value && KEYBOARD_KEY.backspace === e.key) {
			// when user press backspace, move input focus back by 1
			e.preventDefault()
			selectInputByIdx(currentInputIdx - 1)
		} else if (KEYBOARD_KEY.left === e.key) {
			// when user press left, move input focus back by 1
			e.preventDefault()
			selectInputByIdx(currentInputIdx - 1)
		} else if (KEYBOARD_KEY.right === e.key) {
			// when user press left, move input focus forward by 1
			e.preventDefault()
			selectInputByIdx(currentInputIdx + 1)
		}
		// call on keydown function
		onKeyDown?.(e)
	}

	return (
		<Box
			display="flex"
			gap="20px"
			alignItems="center"
			ref={propRef}
			className={`MuiOtpInput-Box ${className || ''}`}
			{...boxProps}
		>
			{valueSplitted.map(({ character, inputReference }, index) => {
				return (
					<OtpTextField
						// We use index as the order can't be moved
						key={index}
						error={error}
						autoComplete="one-time-code"
						value={character}
						inputRef={inputReference}
						className={`MuiOtpInput-TextField MuiOtpInput-TextField-${
							index + 1
						} ${TextFieldClassName || ''}`}
						onPaste={onInputPaste}
						onFocus={onInputFocus}
						onChange={onInputChange}
						onKeyDown={onInputKeyDown}
						{...restTextFieldsProps}
					/>
				)
			})}
		</Box>
	)
})

// Add display name to avoid display name error
OtpInput.displayName = 'Otp_Input'

export { OtpInput }
