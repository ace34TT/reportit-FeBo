import React, { useContext } from 'react'
import OverviewCard from './OverviewCard'
import Grid from '@mui/material/Grid'
import "./index.css"

import { ReportContext } from '../../utils/context/ReportProvider'
import { IReport } from '../../interafaces/IReport'
import { StatusChart } from './StatusChart'
import { Divider, Typography } from '@mui/material'
import { SolvedChart } from './SolvedChart'
import { GetAssignedReports, GetNewReports, GetProcessingReports, GetSolvedReports } from '../../services/reportSvc'
import { useGet } from '../../utils/hook'
import { RegionChart } from './RegionChart'

export default function Dashboard() {
    // State
    const { reports, updateReports } = useContext(ReportContext)
    const { ...newReport } = useGet(GetNewReports)
    const { ...assigned } = useGet(GetAssignedReports)
    const { ...processing } = useGet(GetProcessingReports)
    const { ...solved } = useGet(GetSolvedReports)
    // const { data, isLoading, error } = useGet()
    // Data
    const l = reports.map((plant: IReport) => (
        <li key={plant.id} >{plant.created_at}</li>
    ))

    const data = [
        {
            "name": "Jour 1",
            "uv": 4000,
        },
        {
            "name": "Jour 2",
            "uv": 5000,
        },
        {
            "name": "Jour 3",
            "uv": 6000,
        },
        {
            "name": "Jour 4",
            "uv": 7000,
        },
        {
            "name": "Jour 5",
            "uv": 8000,
        },
        {
            "name": "Jour 6",
            "uv": 4500,
        },
        {
            "name": "Jour 7",
            "uv": 3490,
        }
    ]
    // 
    // Style
    const titleStl = {
        fontSize: 50,
        margin: 0,
        color: "rgb(44, 60, 75)"
    }

    return (
        <Grid container spacing={0}>
            <Typography variant="h4" marginTop={2} marginBottom={3} color="black" align="center" >
                {"Report Overview"}
            </Typography>
            <Grid container spacing={2}>
                <Grid item lg={8}>
                    <Grid container spacing={2}>
                        <Grid item lg={6}>
                            <OverviewCard total={typeof newReport.data != "undefined" ? newReport.data.length : 0}
                                title={'Pending'}
                                cardNumber={1}
                                data={data} />
                        </Grid>
                        <Grid item lg={6}>
                            <OverviewCard total={typeof assigned.data != "undefined" ? assigned.data.length : 0}
                                title={'Assigned'}
                                cardNumber={2}
                                data={data} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} mt={1}>
                        <Grid item lg={6}>
                            <OverviewCard total={typeof processing.data != "undefined" ? processing.data.length : 0} 
                                title={'Processing'} 
                                cardNumber={3} 
                                data={data} />
                        </Grid>
                        <Grid item lg={6}>
                            <OverviewCard total={typeof solved.data != "undefined" ? solved.data.length : 0} 
                                title={'Solved'} 
                                cardNumber={4} 
                                data={data} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={4}>
                    <Grid container lg>
                        <StatusChart />
                    </Grid>
                </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={2} mt={5}>
                <Grid item lg={4}>
                    {/* <CountUser total={0} title={'User count'} cardNumber={4} data={data} /> */}
                    <StatusChart />
                </Grid>
                <Grid item lg={8} mt={1}>
                    <SolvedChart />
                </Grid>
            </Grid>
            <Grid container mt={5}>
                <Grid item lg={12}>
                    <RegionChart />
                </Grid>
            </Grid>
        </Grid>
    )
}
