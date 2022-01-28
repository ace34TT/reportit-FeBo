import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Data from './Data'
import styled from 'styled-components'

export default function PendingReport() {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h3" color="rgb(44, 60, 75)">
                        Pending reports
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ mt: 5 }}>
                    <Data></Data>
                </Grid>
            </Grid>
        </div>
    )
}
