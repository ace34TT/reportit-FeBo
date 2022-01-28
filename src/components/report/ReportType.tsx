import { Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { ITableHeader } from '../../interafaces/Models';
import { getAllUser } from '../../services/userSvc';
import { useGet } from '../../utils/hook';
import { HeadTable } from '../user/TableHead';
import { TypeModal } from './ModalAdd';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function ReportType() {
    const { data, isLoading, error } = useGet(getAllUser)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    const Table_header: ITableHeader[] = [
        { id: 'id', label: 'id', alignRight: false },
        { id: 'name', label: "name", alignRight: false },
    ];


    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleClose = () => setOpen(false)

    const [open, setOpen] = useState(false);

    const btnStyle = {
        backgroundColor: 'rgba(0, 151, 255, 1)',
        color: 'white'
    }

    return (
        <Grid container>
            <Grid container>
                <Typography variant="h3" color="rgb(44, 60, 75)">
                    {"Report Type"}
                </Typography>
            </Grid>
            <Grid container mb={2} mt={2}>
                <Button style={btnStyle} onClick={() => setOpen(true)}>
                    {"Add Type"}
                </Button>
            </Grid>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TypeModal open={open} onClose={handleClose} />
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <HeadTable table_header={Table_header} />
                        <TableBody>
                            {
                                typeof data != "undefined" ?
                                    <>
                                        {
                                            data
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
        </Grid>
    );
}
