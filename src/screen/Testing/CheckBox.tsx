import React, { FC, ReactElement } from 'react'
import FormGroup from '@mui/material/FormGroup'
import { Formik, Form, Field } from 'formik'
import Button from '@mui/material/Button'
import { CheckboxWithLabel } from 'formik-material-ui'
import { OtpInput } from 'components/OtpInput'
import { useState } from 'react'

export const FormikWithCheckBox: FC = (): ReactElement => {
	const [state, setState] = useState<string>('')
	return (
		<Formik
			initialValues={{ checkBoxArray: [] }}
			onSubmit={values => {
				console.log(JSON.stringify(values))
			}}
		>
			{({ submitForm, resetForm }) => (
				<Form>
					<OtpInput
						value={state}
						onChange={e => {
							setState(e)
						}}
						error
					/>
					<FormGroup row={true}>
						<Field
							sx={{ marginLeft: 2 }}
							type="checkbox"
							component={CheckboxWithLabel}
							name="checkBoxArray"
							value="Option1"
						/>
						<p>
							Please accept our{' '}
							<a
								href="https://www.youtube.com/"
								style={{ color: 'green' }}
							>
								terms
							</a>{' '}
							and{' '}
							<a
								href="https://www.youtube.com/"
								style={{ color: 'green' }}
							>
								conditions
							</a>{' '}
						</p>
					</FormGroup>

					<Button
						variant="contained"
						onClick={submitForm}
						sx={{ margin: 2 }}
					>
						Submit
					</Button>
					<Button
						sx={{ margin: 2 }}
						variant="contained"
						onClick={() => {
							resetForm()
						}}
					>
						Reset
					</Button>
				</Form>
			)}
		</Formik>
	)
}
