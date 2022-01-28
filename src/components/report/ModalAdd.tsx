import { Typography, Grid, Modal, Autocomplete, TextField, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Button, Box } from '@mui/material'
import React, { FC, useContext, useEffect, useState } from 'react'
import { IReport } from '../../interafaces/IReport'
import { useFormatDate } from '../../utils/hook';
import "./index.css"
import { getGeocodeInf } from '../../services/regionSvc';
import { RegiontContext } from '../../utils/context/RegionProvider';
import { IRegion } from '../../interafaces/IRegion';
import { ReportContext } from '../../utils/context/ReportProvider';
import { UpdateReport } from '../../services/reportSvc';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 3
};

const textFieldStyle = {
    padding : 10
}

const TypeModal = (props: { open: boolean, onClose: () => void }) => {
    return (
        <div>
            <Modal open={props.open} onClose={props.onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                <Grid sx={style}>
                    <TextField id="outlined-basic" label="Nom" variant="outlined" />
                    <Button style={textFieldStyle} >{"Ajouter"}</Button>
                </Grid>
            </Modal>
        </div>
    );
}

export { TypeModal }