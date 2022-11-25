
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { TextInput } from '../TextInput/index'


export const LoginForm = () => (
  <div>
    <h1>Form</h1>
    <Formik
      initialValues={{ fname: '', lname: '' }}
      validate={values => {
        const errors : any = {}
        if (!values.fname) {
          errors.fname = 'First name Required'
        }
        if (!values.lname) {
          errors.lname = 'Last name Required'
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
      {({ isSubmitting }) => (
        <Form>
          <Field name="fname" component={TextInput} label="First name"/>
          <ErrorMessage name="fname" component="div" />
          <Field name="lname" />
          <ErrorMessage name="lname" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
)


const CustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
} : any) => (
  <div>
    <input type="text" {...field} {...props} />
    {touched[field.name] &&
      errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </div>
)
