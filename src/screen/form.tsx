import React, { FC, ReactElement } from 'react'
import { Formik } from 'formik'
import { TextField } from '@mui/material'
import Button from '@mui/material'
export const Basic = () => (
	<div>
		<h1>Anywhere in your app!</h1>
		<Formik
			initialValues={{ firstName: '', lastName: '' }}
			validate={values => {
				if (!values.firstName || !values.lastName) {
					console.log('Fields are required')
				}
			}}
			onSubmit={(values, { setSubmitting }) => {
				// setTimeout(() => {
				// 	alert(JSON.stringify(values, null, 2))
				// 	setSubmitting(false)
				// }, 400)
				console.log('submit button pressed')
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting
				/* and other goodies */
			}) => (
				<CustomForm
					handleSubmit={() => {
						console.log('hello world')
					}}
				>
					<CreateField
						title="First Name"
						required={true}
						datatype="string"
					/>

					{/* <FormSubmitButton /> */}
				</CustomForm>
			)}
		</Formik>
	</div>
)

interface fieldProps {
	title: string
	datatype: string
	required: boolean
}

export const CreateField: FC<fieldProps> = (
	props: fieldProps
): ReactElement => {
	return (
		<TextField
			label={props.title}
			type={props.datatype}
			required={props.required}
		/>
	)
}

interface formProps {
	handleSubmit(): any
	children: ReactElement
	// submitButton: ReactElement
}

export const CustomForm: FC<formProps> = ({
	children,
	...props
}: formProps): ReactElement => {
	return <form onSubmit={props.handleSubmit}>{children}</form>
}

export default Basic
