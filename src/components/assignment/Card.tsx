import * as React from 'react';
import MuiCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IReport } from '../../interafaces/IReport';
import { Box, Paper } from '@mui/material';
import { height, width } from '@mui/system';

import './index.css'
import { useFormatDate } from '../../utils/hook';

interface Props {
    report: IReport,
    onClick?: () => void
}


const ReportCard: React.FC<Props> = ({ report, onClick }) => {
    // Style
    const styles = {
        paperContainer: {
            backgroundImage: `url(${"https://picsum.photos/200/300"})`,
            height: "300px",
            width: "250px"
        },
        details: {
            color: "#fff"
        }
    };
    return (
        <MuiCard sx={{ maxWidth: 345 }}>
            <Paper className="parent" style={styles.paperContainer}>
                <Box className="child">
                    <Box className="description" sx={{ ml: 2 }} >
                        <Typography variant="h6" color="white">
                            {report.type.name}
                        </Typography>
                        <Typography variant="h6" color="white">
                            lev <b>{report.id} </b>
                        </Typography>
                        <Typography variant="h6" color="white">
                            {report.created_at}
                            {/* {typeof (report.created_at) == "string" ? report.created_at : useFormatDate(report.created_at)} */}
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </MuiCard >
    );
}
export default ReportCard