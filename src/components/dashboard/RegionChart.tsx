import React, {useState} from "react";
import Grid from '@mui/material/Grid'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import { ResponsiveContainer } from 'recharts'
import { Typography, TextField, Button } from '@mui/material'
import Divider from '@mui/material/Divider';
import { useGet } from "../../utils/hook";
import { GetStatRegion } from "../../services/regionSvc";
import { data } from "./data";

const RegionChart = () => {

	const {...statistique} = useGet(GetStatRegion);

	const containerStl = {
		display: 'flex',
		alignItems: 'center',
		bgcolor: 'background.paper',
		color: "rgb(255,255,255)",
		height: 600,
		width: "100%",
		overflow: "hidden",
	}

	return (
		<Grid container style={containerStl} boxShadow={6} borderRadius={2} >
			<Grid container xs={12} padding={1}>
				<Grid item lg={6} mt={2}>
					<Typography variant="h5" fontWeight={2} color=" rgb(32, 51, 68)" ml={3} >
						{"Report Status "}
					</Typography>
				</Grid>
			</Grid>
			<Grid container xs={12}>
				<ResponsiveContainer width="100%" height={500} >
					<AreaChart width={730} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
						<defs>
							<linearGradient id="AssingeCl" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="rgba(0, 151, 255, 1)" stopOpacity={0.8} />
								<stop offset="95%" stopColor="rgba(0, 151, 255, 1)" stopOpacity={0} />
							</linearGradient>
							<linearGradient id="EnCoursCl" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="rgba(223, 255, 140, 1)" stopOpacity={0.8} />
								<stop offset="95%" stopColor="rgba(223, 255, 140, 1)" stopOpacity={0} />
							</linearGradient>
							<linearGradient id="TermineCl" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="rgba(208, 247, 104, 1)" stopOpacity={0.8} />
								<stop offset="95%" stopColor="rgba(208, 247, 104, 1)" stopOpacity={0} />
							</linearGradient>
						</defs>
						<XAxis dataKey="name" />
						<YAxis />
						<CartesianGrid strokeOpacity={0.8} strokeDasharray="2 2" />
						<Tooltip />
						<Area type="monotone" dataKey="assigned" stroke="rgba(0, 151, 255, 1)" fillOpacity={1} fill="url(#AssingeCl)" />
						<Area type="monotone" dataKey="processing" stroke="rgb(223, 255, 140)" fillOpacity={0.5} fill="url(#EnCoursCl)" />
						<Area type="monotone" dataKey="solved" stroke="rgb(161, 250, 166)" fillOpacity={0.5} fill="url(#TermineCl)" />
					</AreaChart>
				</ResponsiveContainer>
			</Grid>
		</Grid >
	)
}

export { RegionChart }