import React from 'react'
import TextField, { type TextFieldProps } from '@mui/material/TextField'
import { styled } from '@mui/material/styles'

const TextFieldStyled = styled(TextField)`
	input {
		text-align: center;
	}
`

const OtpTextField = (props: TextFieldProps) => {
	return <TextFieldStyled {...props} />
}

export default OtpTextField
