import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { useTranslate } from '../hooks/translate'

interface Column {
	id: 'name' | 'code' | 'population'
	label: string
	minWidth?: number
	align?: 'right'
	format?: (value: number) => string
}

const columns: readonly Column[] = [
	{ id: 'name', label: 'name', minWidth: 170 },
	{ id: 'code', label: 'iso', minWidth: 100 },
	{
		id: 'population',
		label: 'population',
		minWidth: 170,
		align: 'right',
		format: (value: number) => value.toLocaleString('en-US')
	}
]

interface Data {
	name: string
	code: string
	population: number
}

function createData(name: string, code: string, population: number): Data {
	return { name, code, population }
}

const rows = [
	createData('india', 'IN', 13241713543),
	createData('china', 'CN', 14035003651),
	createData('italy', 'IT', 60483973),
	createData('unitedStates', 'US', 3271674340),
	createData('canada', 'CA', 376021030),
	createData('australia', 'AU', 254754004),
	createData('germany', 'DE', 83019200),
	createData('ireland', 'IE', 4857000),
	createData('mexico', 'MX', 1265776910),
	createData('japan', 'JP', 126317000),
	createData('france', 'FR', 67022000),
	createData('unitedKingdom', 'GB', 67545757),
	createData('russia', 'RU', 14679374446),
	createData('nigeria', 'NG', 200962417),
	createData('brazil', 'BR', 2101471257)
]

export default function StickyHeadTable() {
	const [page, setPage] = React.useState(0)
	const [rowsPerPage, setRowsPerPage] = React.useState(10)
	const translate = useTranslate()

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(+event.target.value)
		setPage(0)
	}

	return (
		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
			<TableContainer sx={{ maxHeight: 300 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map(column => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
								>
									{translate(column.label as any)}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows
							.slice(
								page * rowsPerPage,
								page * rowsPerPage + rowsPerPage
							)
							.map(row => {
								return (
									<TableRow
										hover
										role="checkbox"
										tabIndex={-1}
										key={row.code}
									>
										{columns.map((column: Column) => {
											const value = row[column.id]
											return (
												<TableCell
													key={column.id}
													align={column.align}
												>
													{column.format &&
													typeof value === 'number'
														? column.format(value)
														: value}
												</TableCell>
											)
										})}
									</TableRow>
								)
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	)
}
