import React, { useState } from 'react'
import { SubmitButton } from '../SubmitButton/Button'
import { TextInput } from '../TextInput/index'
import {Stack} from '@mui/material'
import { Formik } from 'formik'


export const Form = () => {

    const handleClick = () => {
        console.log('button clicked')
    }

    return(
        <Formik 
            initialValues={{fname : '', lname : ''}}
            onSubmit = {({fname, lname}) => {
                console.log('no val')
                
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <div>
                    <TextInput 
                        label='first name' 
                        helperText='Enter your first name' 
                        onChangeText={handleChange('fname')}
                        onBlur={handleBlur('fname')}
                    />

                    <TextInput 
                        label='last name' 
                        helperText='Enter your last name' 
                        onChangeText={handleChange('lname')}
                        onBlur={handleBlur('lname')}
                    />

                    <SubmitButton type="submit" color='success' variant="outlined" onClick={handleClick}>
                        Submit
                    </SubmitButton>
                    
                </div>
            )}
        </Formik>
        
    )
}

