import React from "react";
import Grid from '@mui/material/Grid'
//import { Label, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { useTheme } from '@mui/material'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { GetNewReports, GetAssignedReports, GetProcessingReports, GetSolvedReports } from "../../services/reportSvc";
import { useGet } from "../../utils/hook";

ChartJS.register(ArcElement, Tooltip, Legend);


const StatusChart = () => {

    const theme = useTheme();

    const { ...newReport } = useGet(GetNewReports)
    const { ...assigned } = useGet(GetAssignedReports)
    const { ...processing } = useGet(GetProcessingReports)
    const { ...solved } = useGet(GetSolvedReports)

    const data_pi = {
         labels: ['Pending', 'Assigned', 'Processing', 'Solved'],
         datasets: [
             {
                 label: '# of Votes',
                 // data: [newReport.data?.length, assigned.data?.length, processing.data?.length, solved.data?.length],
                 data: [10, 5, 3, 4],
                 backgroundColor: [
                    'rgba(247, 114, 104, 1) ',
                    'rgba(0, 151, 255, 1) ',
                    'rgba(223, 255, 140, 1)',
                    'rgba(208, 247, 104, 1)',
                 ],
                 borderColor: 'black',
                 borderWidth: 1,
             },
         ],
     };

    const containerStl = {
        display: 'flex',
        alignItems: 'center',   
        bgcolor: 'background.paper',
        color: "rgb(255,255,255)",
        height: 520,
        width: 520,
        overflow: "hidden",
    }


    return (
        /*<Grid container style={containerStl} boxShadow={6} borderRadius={2} >
            <Grid item xs={12} >
                <ResponsiveContainer width="100%" height={500}>
                    <PieChart width={800} height={800}>
                        <Pie width="100%" height={500} data={data02} dataKey="value"   nameKey="reportType" cx="50%" cy="50%" outerRadius={50} fill={"red"} label/>
                        <Label color="red"></Label>
                    </PieChart>
                </ResponsiveContainer>
            </Grid>
        </Grid >*/
        <Grid container style={containerStl} boxShadow={6} borderRadius={5} >
             <Grid item lg padding={3}  >
                 <Pie data={data_pi} />
             </Grid>
        </Grid >
    )
}

export { StatusChart }

