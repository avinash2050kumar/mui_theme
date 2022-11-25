import React from 'react'
import { TextField, Typography } from '@mui/material'
import type { TextFieldProps } from '@mui/material'
import { useField } from 'formik'

type FormTextInputProps = {
	name: string
} & Omit<TextFieldProps, 'onChange' | 'onBlur'>

const FormTextInput: React.ComponentType<FormTextInputProps> = ({
	name,
	...props
}) => {
	const [, meta, helpers] = useField(name)
	const { setValue, setTouched } = helpers

	const error = meta.touched && meta.error

	return (
		<>
			<TextField
				value={meta.value}
				onBlur={() => setTouched(true)}
				onChange={e => setValue(e.target.value)}
				{...props}
			/>
			{error && (
				<Typography mt={2} color={'error'}>
					{error}
				</Typography>
			)}
		</>
	)
}

export { FormTextInput }
