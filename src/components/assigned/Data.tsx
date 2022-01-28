import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { useGet } from '../../utils/hook';
import { GetAssignedReports, GetNewReports } from '../../services/reportSvc';

interface Column {
    id: 'id' | 'user' | 'type' | 'region' | 'date' | 'level';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'id', label: 'ID', minWidth: 170 },
    { id: 'user', label: 'User', minWidth: 100 },
    {
        id: 'type',
        label: 'Type',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'level',
        label: 'Level',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'region',
        label: 'Region',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'date',
        label: 'Date',
        minWidth: 170,
        align: 'right',
    },


];

interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
}

function createData(
    name: string,
    code: string,
    population: number,
    size: number,
): Data {
    const density = population / size;
    return { name, code, population, size, density };
}

export default function StickyHeadTable() {
    const { data, isLoading, error } = useGet(GetAssignedReports)
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            typeof data != "undefined" ?
                                <>
                                    {
                                        data
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                        <TableCell>
                                                            {row.id}
                                                        </TableCell>
                                                        <TableCell>
                                                            {row.user.lastname}
                                                        </TableCell>
                                                        <TableCell>
                                                            {row.type.name}
                                                        </TableCell>
                                                        <TableCell>
                                                            {row.region.name}
                                                        </TableCell>
                                                        <TableCell>
                                                            {row.date}
                                                        </TableCell>
                                                        <TableCell>
                                                            {row.levle}
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })
                                    }
                                </> :
                                <></>

                        }

                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={typeof data != "undefined" ? data.length : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
