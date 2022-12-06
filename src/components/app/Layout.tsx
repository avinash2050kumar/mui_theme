import styled from '@emotion/styled'
import { SideBar } from 'components/molecules/SideBar/SideBar'
import React from 'react'

const Wrapper = styled.div`
	display: flex;
`

const Col = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`

const Bar = styled.div`
	display: flex;
	width: 100%;
	height: 60px;
	background-color: beige;
`

type SideBarProps = {
	children?: any
}

const Layout: React.ComponentType<SideBarProps> = ({ children }) => {
	return (
		<Wrapper>
			<SideBar />
			<Col>
				<Bar />
				<main>{children}</main>
			</Col>
		</Wrapper>
	)
}

export { Layout }
