import { Typography, Grid, Modal, Autocomplete, TextField, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Button } from '@mui/material'
import React, { FC, useContext, useEffect, useState } from 'react'
import { IReport } from '../../interafaces/IReport'
import { useFormatDate } from '../../utils/hook';
import Slider from './Slider';
import "./index.css"
import { getGeocodeInf } from '../../services/regionSvc';
import { RegiontContext } from '../../utils/context/RegionProvider';
import { IRegion } from '../../interafaces/IRegion';
import { ReportContext } from '../../utils/context/ReportProvider';
import { UpdateReport } from '../../services/reportSvc';
interface Props {
    report: IReport
}

const ReportModal: FC<Props> = ({ report }) => {
    const { reports, updateReports } = useContext(ReportContext)
    const { regions } = useContext(RegiontContext)
    console.log(regions);
    const [region, setRegion] = useState<IRegion>();
    const [regionName, setRegionName] = useState<string>("");
    // Function 
    const getinf = async () => {
        setGeocode(await getGeocodeInf(report.latitude + ", " + report.longitude))
    }
    const setType = (status: number) => {
        switch (status) {
            case 0:
                return "unassigned"
            case 1:
                return "affected"
            case 2:
                return "in process"
            case 3:
                return "solved"
            default:
                return "unassigned";
        }
    }
    const handleChange = async (event: SelectChangeEvent) => {
        // console.log("handle change");
        let reg = await regions.find(element => element.name == event.target.value as string)
        if (typeof reg !== "undefined") {
            setRegion(
                reg
            );
            setRegionName(reg.name)
            console.log(region);
        }
    };
    const updateRegion = () => {
        if (typeof region !== "undefined") {
            report.region = region
            report.state = 1
            UpdateReport(report)
            updateReports()
            console.log(report);
        }
    }

    // State
    const [geocode, setGeocode] = useState<any>({});
    useEffect(() => {
        getinf()
    }, []);

    // Data 
    const items = report.images.map((item, index) => {
        const style = { height: 200 + index * 10 };
        return <div className="item" style={style} data-value={index + 1} >
            <img src={"https://picsum.photos/200/300"} alt="" />
        </div>;
    });
    // style

    return (
        <Grid style={{ borderRadius: 2 }} sx={{ borderColor: 'red', borderRadius: "20%" }} container spacing={2}>
            <Grid item xs={6}  >
                <div className="scroll">
                    <Typography variant="h3" color="#3a556b">Assingment</Typography>
                    <Typography variant="subtitle1" color="#29333b"><b>ID : </b>{report.id} </Typography>
                    <Typography variant="subtitle1" color="#29333b">
                        <b>Sender : </b>{report.user.lastname + " " + report.user.firstname}
                    </Typography>
                    <Typography variant="subtitle1" color="#29333b"><b>Date : </b>
                        {report.created_at}
                        {/* {typeof (report.created_at) == "string" ? report.created_at : useFormatDate(report.created_at)} */}
                    </Typography>
                    <Typography variant="subtitle1" color="#29333b"><b>Latitude : </b>{report.latitude} </Typography>
                    <Typography variant="subtitle1" color="#29333b"><b>Longitude : </b>{report.longitude} </Typography>
                    <Typography variant="subtitle1" color="#29333b"><b>Type : </b>{report.type.name} </Typography>
                    <Typography variant="subtitle1" color="#29333b"><b>Level : </b>{report.level} </Typography>
                    <Typography variant="subtitle1" color="#29333b">
                        <b>Status : </b>
                        {setType(report.state)}
                    </Typography>
                    <Typography variant="subtitle1" color="#29333b">
                        <b>Description : </b>
                        {report.description}
                    </Typography>
                    <Grid container>
                        <Typography variant="h6" color="#29333b">
                            <b>Suggested region </b> :
                            {geocode.region}
                        </Typography>
                        <form action="">

                        </form>
                        <FormControl fullWidth sx={{ mt: 2 }}>
                            <InputLabel id="demo-simple-select-label">Region</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={regionName}
                                label="Region"
                                onChange={handleChange}
                            >
                                {regions.map((reg) => {
                                    return (
                                        <MenuItem key={reg.name} value={reg.name}>{reg.name}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                        <Button onClick={updateRegion} sx={{ mt: 4 }} variant="contained">Contained</Button>
                    </Grid>
                </div>
            </Grid >
            <Grid item xs={6}   >
                <Slider images={report.images}></Slider>
            </Grid>
        </Grid >
    );
}
export default ReportModal

