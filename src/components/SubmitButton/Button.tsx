import { Button } from '@mui/material'
import React from 'react'

// export enum variants{
//     "outlined",
//     "Contained",
//     "text"
// }

// export type submitButtonProps = {
//     variant? : variants | null,
//     color : string,
//     children : any
// }

export const SubmitButton = (props: any) => {
	return (
		<Button
			variant={props.variant || 'contained'}
			color={props.color || 'success'}
			onClick={props.onClick || console.log('no function')}
			type={props.type || 'password'}
		>
			{props.children}
		</Button>
	)
}
