import * as React from 'react';
import { ReportContext } from '../../utils/context/ReportProvider';
import { useContext } from 'react';
import { IReport } from '../../interafaces/IReport';
import { Modal, Box, Typography, Grid } from '@mui/material'
import ReportCard from './Card';
import ReportModal from './Modal';
import { GetNewReports } from '../../services/reportSvc';
import { useGet } from '../../utils/hook';
import { Loader } from '../styledComponent';

export default function Data() {
    // State
    const { data, isLoading, error } = useGet(GetNewReports)
    const [open, setOpen] = React.useState(false);
    const [report, setReport] = React.useState<IReport>()
    // Function
    const handleOpen = (report: IReport): void => {
        setReport(report)
        setOpen(true)
    }
    const handleClose = () => setOpen(false);
    // Style
    const modalStl = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        overflow: "hidden",
        height: "90%",
        width: "70%",
        bgcolor: 'background.paper',
        border: '2px rgb(90, 160, 221)',
        boxShadow: 24,
        borderRadius: 5,
        p: 4,
    };
    const loaderStl = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
    return (
        <Grid container sx={{ ml: 5 }}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Grid sx={modalStl}>
                    {typeof report != "undefined" ?
                        <>
                            <ReportModal report={report}> </ReportModal>
                        </>
                        :
                        <>
                            <Typography variant="h5" color="initial">Report not found       </Typography>
                        </>}
                </Grid>
            </Modal>
            <Grid container spacing={2}>
                {
                    !isLoading ?
                        <>
                            {
                                typeof data != "undefined" ?
                                    <>
                                        {
                                            data.map((rep, index) => {
                                                return (
                                                    <div
                                                        style={{ marginLeft: 10, marginTop: 10, borderRadius: 25 }}
                                                        key={index} onClick={() => { handleOpen(rep) }
                                                        } >
                                                        <ReportCard
                                                            report={rep}
                                                        ></ReportCard>
                                                    </div>
                                                )
                                            })
                                        }
                                    </> : <></>
                            }
                        </> :
                        <div style={loaderStl}>
                            <Loader></Loader>
                        </div>
                }

            </Grid>
        </Grid >
    );
}

