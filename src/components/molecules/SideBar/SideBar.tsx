import React, { useCallback, useState } from 'react'
import { styled } from '@mui/system'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { SIDEBAR_DATASOURCE } from 'data/sidebar'
import { useTranslate } from 'hooks/translate'
import MenuIcon from '@mui/icons-material/Menu'
import LogoutIcon from '@mui/icons-material/Logout'

const MainContainer = styled('div')`
	display: flex;
`

const Sections = styled('section')`
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

const Icons = styled('div')`
	display: flex;
`

const LinkText = styled(motion.div)`
	white-space: nowrap;
`

const StyledNavLink = styled(NavLink)`
	text-decoration-line: none;
	padding: 10px 0 10px 10px;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
	width: 100%;
	transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
	color: white;

	:hover {
		background-color: white;
		color: ${({ theme }) => theme.palette.primary.main};
		transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
	}
`

const IconWrapper = styled('div')`
	padding: 10px;
	width: 45px;
	height: 45px;

	:hover {
		cursor: pointer;
	}
`

const MotionDiv = styled(motion.div)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.text.secondary,
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around'
}))

const ShowAnimation = {
	hidden: {
		width: 0,
		opacity: 0,
		transition: {
			duration: 0.2
		}
	},
	show: {
		width: 'auto',
		opacity: 1,
		transition: {
			duration: 0.2
		}
	}
}

const isActiveStyle = {
	backgroundColor: 'white',
	color: '#267755'
}

const SideBar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const translate = useTranslate()

	const toggle = useCallback(() => {
		setIsOpen(!isOpen)
	}, [isOpen])

	return (
		<MainContainer>
			<MotionDiv
				animate={{
					width: isOpen ? '200px' : '45px',
					transition: {
						duration: 0.5,
						type: 'spring',
						damping: 12
					}
				}}
			>
				<IconWrapper>
					<MenuIcon onClick={toggle} />
				</IconWrapper>
				<Sections>
					{SIDEBAR_DATASOURCE.map(item => (
						<StyledNavLink
							style={({ isActive }) => {
								return isActive ? isActiveStyle : {}
							}}
							to={item.path}
							key={item.name}
						>
							<Icons>{<item.icon />}</Icons>
							<AnimatePresence>
								{isOpen && (
									<LinkText
										variants={ShowAnimation}
										initial={'hidden'}
										animate={'show'}
										exit={'hidden'}
									>
										{translate(item.name)}
									</LinkText>
								)}
							</AnimatePresence>
						</StyledNavLink>
					))}
				</Sections>
				<IconWrapper>
					<LogoutIcon />
				</IconWrapper>
			</MotionDiv>
		</MainContainer>
	)
}

export { SideBar }
