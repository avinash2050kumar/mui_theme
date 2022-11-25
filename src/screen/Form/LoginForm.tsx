import React from 'react'
import { Formik, Form } from 'formik'
import { FormTextInput } from './FormTextInput'

export const LoginForm = () => (
	<div>
		<h1>Form</h1>
		<Formik
			initialValues={{ fname: 'adsfgssagfd', lname: 'asdf', otp: '2342' }}
			validate={values => {
				const errors: any = {}
				if (!values.fname) {
					errors.fname = 'First name Required'
				}
				if (!values.lname) {
					errors.lname = 'Last name Required'
				}
				if (!values.otp) {
					errors.otp = 'Missing'
				}
				return errors
			}}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2))
					setSubmitting(false)
				}, 400)
			}}
		>
			{({ isSubmitting,dirty }) => {
				return (
					<Form>
						<FormTextInput name={'fname'} variant={'standard'} />

						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)
			}}
		</Formik>
	</div>
)
