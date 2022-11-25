import React from 'react'
import {TextField} from '@mui/material'


export const TextInput = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  } : any) => {

    return(
        <>
            <TextField 
                // label={props.label}
                // helperText={props.helperText}
                {...field} {...props}
            />
            {touched[field.name] &&
                errors[field.name] && <div className="error">{errors[field.name]}</div>}
        </>
    )
}