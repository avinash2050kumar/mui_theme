import React, { FC, ReactElement } from 'react'
import * as yup from 'yup'
import { Formik, useFormik, Form } from 'formik'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'

type userValidation = {
	firstName: string
	lastName: string
}

const userValidationSchema: yup.SchemaOf<userValidation> = yup.object().shape({
	firstName: yup.string().required('First Name is required'),
	lastName: yup.string().required('Last Name is required')
})

export const FormHandler: FC = (): ReactElement => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: ''
		},
		validationSchema: userValidationSchema,
		onSubmit: values => {
			console.log(values)
		}
	})
	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<TextField
					sx={{ margin: 10 }}
					id="firstName"
					name="firstName"
					label="First Name"
					value={formik.values.firstName}
					onChange={formik.handleChange}
					error={
						formik.touched.firstName &&
						Boolean(formik.errors.firstName)
					}
					helperText={
						formik.touched.firstName && formik.errors.firstName
					}
				/>
				<TextField
					title="Hello World"
					sx={{ margin: 10 }}
					id="lastName"
					name="lastName"
					label="Last Name"
					value={formik.values.lastName}
					onChange={formik.handleChange}
					error={
						formik.touched.lastName &&
						Boolean(formik.errors.lastName)
					}
					helperText={
						formik.touched.lastName && formik.errors.lastName
					}
				/>

				<Button
					color="primary"
					variant="contained"
					type="submit"
					sx={{ margin: 10 }}
				>
					Submit
				</Button>
			</form>
		</div>
	)
}
