import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { useGet } from '../../utils/hook';
import { getAllUser } from '../../services/userSvc';
import { HeadTable } from './TableHead';
import { ITableHeader } from '../../interafaces/Models';
import { Grid, Typography } from '@mui/material';

export default function UserList() {
    const { ...users } = useGet(getAllUser)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    const Table_header: ITableHeader[] = [
        { id: 'lastname', label: 'Lastname', alignRight: false },
        { id: 'firstname', label: "Firstname", alignRight: false },
        { id: 'dateOfBirth', label: 'Date of Birth', alignRight: false },
        { id: 'gender', label: 'Gender', alignRight: false },
        { id: 'province', label: 'Province', alignRight: false },
        { id: 'region', label: 'Region', alignRight: false },
        { id: 'phone', label: 'Phone', alignRight: true }
    ];


    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <Grid container>
                <Typography variant="h4" marginTop={2} marginBottom={3} color="black" align="center" >
                    {"User List"}
                </Typography>
            </Grid>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <HeadTable table_header={Table_header} />
                        <TableBody>
                            {
                                typeof users.data != "undefined" ?
                                    <>
                                        {
                                            users.data
                                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                .map((user) => {
                                                    return (
                                                        <TableRow hover role="checkbox" tabIndex={-1} key={user.id}>
                                                            <TableCell>
                                                                {user.lastname}
                                                            </TableCell>
                                                            <TableCell>
                                                                {user.firstname}
                                                            </TableCell>
                                                            <TableCell>
                                                                {user.dateOfBirth}
                                                            </TableCell>
                                                            <TableCell>
                                                                {user.gender}
                                                            </TableCell>
                                                            <TableCell>
                                                                {user.province}
                                                            </TableCell>
                                                            <TableCell>
                                                                {user.region}
                                                            </TableCell>
                                                            <TableCell>
                                                                {user.phone}
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
                    count={typeof users.data != "undefined" ? users.data.length : 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
}
