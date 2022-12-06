import InventoryIcon from '@mui/icons-material/Inventory'
import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import LocalBarIcon from '@mui/icons-material/LocalBar'
import ContactsIcon from '@mui/icons-material/Contacts'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import ReceiptIcon from '@mui/icons-material/Receipt'

type NameProps =
	| 'invoices'
	| 'quotation'
	| 'inventory'
	| 'analytics'
	| 'ordercenter'
	| 'contacts'

type SideBarDataSourcesProps = {
	path: string
	name: NameProps
	icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string }
}

export const SIDEBAR_DATASOURCE: SideBarDataSourcesProps[] = [
	{
		path: '/ordercenter',
		name: 'ordercenter',
		icon: BusinessCenterIcon
	},
	{
		path: '/contacts',
		name: 'contacts',
		icon: ContactsIcon
	},
	{
		path: '/inventory',
		name: 'inventory',
		icon: InventoryIcon
	},
	{
		path: '/quotation',
		name: 'quotation',
		icon: LocalBarIcon
	},
	{
		path: '/invoices',
		name: 'invoices',
		icon: ReceiptIcon
	},
	{
		path: '/analytics',
		name: 'analytics',
		icon: AutoGraphIcon
	}
]
