import React, { useState } from "react";
import Grid from '@mui/material/Grid'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import { ResponsiveContainer } from 'recharts'
import { Box, Typography, Button, TextField } from '@mui/material'
import Divider from '@mui/material/Divider';
import { IReportStatistique } from "../../interafaces/IReport";
import { GetReportStatistique } from "../../services/reportSvc";
import { useGet } from "../../utils/hook";

const SolvedChart = () => {

	const donne: IReportStatistique[] = [
		{
			"date": "Jour 1",
			"non_assigne": 3,
			"assigne": 5,
			"en_cours": 6,
			"termine": 3
		},
		{
			"date": "Jour 2",
			"non_assigne": 6,
			"assigne": 4,
			"en_cours": 6,
			"termine": 3
		},
		{
			"date": "Jour 3",
			"non_assigne": 5,
			"assigne": 3,
			"en_cours": 6,
			"termine": 3
		},
		{
			"date": "Jour 4",
			"non_assigne": 3,
			"assigne": 8,
			"en_cours": 10,
			"termine": 2
		},
		{
			"date": "Jour 5",
			"non_assigne": 2,
			"assigne": 2,
			"en_cours": 6,
			"termine": 4
		},
		{
			"date": "Jour 6",
			"non_assigne": 9,
			"assigne": 6,
			"en_cours": 6,
			"termine": 5
		},
		{
			"date": "Jour 7",
			"non_assigne": 5,
			"assigne": 2,
			"en_cours": 6,
			"termine": 3
		}
	]

	const donne2: IReportStatistique[] = [
		{
			"date": "Jour 1",
			"non_assigne": 3,
			"assigne": 4,
			"en_cours": 6,
			"termine":2
		},
		{
			"date": "Jour 2",
			"non_assigne": 6,
			"assigne": 3,
			"en_cours": 5,
			"termine": 2
		},
		{
			"date": "Jour 3",
			"non_assigne": 10,
			"assigne": 5,
			"en_cours": 5,
			"termine": 2
		},
		{
			"date": "Jour 4",
			"non_assigne": 9,
			"assigne": 9,
			"en_cours": 5,
			"termine": 7
		},
		{
			"date": "Jour 5",
			"non_assigne": 3,
			"assigne": 7,
			"en_cours": 2,
			"termine": 10
		},
		{
			"date": "Jour 6",
			"non_assigne": 12,
			"assigne": 8,
			"en_cours": 3,
			"termine": 12
		},
		{
			"date": "Jour 7",
			"non_assigne": 5,
			"assigne": 2,
			"en_cours": 6,
			"termine": 3
		}
	]

	const containerStl = {
		display: 'flex',
		alignItems: 'center',
		bgcolor: 'background.paper',
		color: "rgb(255,255,255)",
		height: 500,
		width: "100%",
		overflow: "hidden",
	}

	const [dateStat, setDateStat] = useState<{ firstdate: string, seconddate: string }>({ firstdate: "", seconddate: "" });
	const [statistique, setStatistique] = useState<IReportStatistique[] | undefined>(donne);

	const { data, isLoading, error } = useGet(GetReportStatistique);

	console.log(error)

	const handleclick = () => setStatistique(donne2)


	console.log(dateStat);




	return (
		<Grid container style={containerStl} boxShadow={6} borderRadius={2} >
			<Grid container xs={12}>
				<Grid item lg={6} spacing={2}>
					<Typography variant="h5" fontWeight={2} color=" rgb(32, 51, 68)" ml={3} mt={2} >
						{"Report statistics"}
					</Typography>
				</Grid>
				<Grid item lg={6} spacing={2}>
					<Grid container spacing={2} lg={12}>
						<Grid item lg sm mt={2}>
							<TextField
								id="outlined-username-input"
								autoComplete="current-password"
								type={"date"}
								placeholder={"Start date"}
								onChange={(event) => { setDateStat({ ...dateStat, firstdate: event.target.value }) }}
							/>
						</Grid>
						<Grid item lg sm mt={2}>
							<TextField
								id="outlined-username-input"
								autoComplete="current-password"
								type={"date"}
								placeholder={"End date"}
								onChange={(event) => { setDateStat({ ...dateStat, seconddate: event.target.value }) }}
							/>
						</Grid>
						<Grid item lg sm>
							<Button type="submit" sx={{ mt: 3 }} variant="contained" onClick={handleclick} >Voir</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Divider />
			<Grid container ml={2} xs={12}>
				<ResponsiveContainer width="100%" height={400} >
					<AreaChart width={730} height={250} data={statistique} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
						<defs>
							<linearGradient id="NonAssigneCl" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="rgba(247, 114, 104, 1)" stopOpacity={0.8} />
								<stop offset="95%" stopColor="rgba(247, 114, 104, 1)" stopOpacity={0} />
							</linearGradient>
							<linearGradient id="AssingeCl" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="rgba(0, 151, 255, 1)" stopOpacity={0.8} />
								<stop offset="95%" stopColor="rgba(0, 151, 255, 1)" stopOpacity={0} />
							</linearGradient>
							<linearGradient id="EnCoursCl" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="rgba(223, 255, 140, 1)" stopOpacity={0.8} />
								<stop offset="95%" stopColor="rgba(223, 255, 140, 1)" stopOpacity={0} />
							</linearGradient>
							<linearGradient id="TermineCl" x1="0" y1="0" x2="0" y2="1">
								<stop offset="30%" stopColor="rgba(208, 247, 104, 1)" stopOpacity={0.8} />
								<stop offset="95%" stopColor="rgba(208, 247, 104, 1)" stopOpacity={0} />
							</linearGradient>
						</defs>
						<XAxis dataKey="date" />
						<YAxis />
						<CartesianGrid strokeDasharray="2 2" />
						<Area type="monotone" dataKey="non_assigne" stroke="rgb(247, 114, 104)" fillOpacity={1} fill="url(#NonAssigneCl)" />
						<Area type="monotone" dataKey="assigne" stroke="rgb(0, 151, 255)" fillOpacity={1} fill="url(#AssingeCl)" />
						<Area type="monotone" dataKey="en_cours" stroke="rgb(223, 255, 140)" fillOpacity={0.5} fill="url(#EnCoursCl)" />
						<Area type="monotone" dataKey="termine" stroke="rgb(208, 247, 104)" fillOpacity={0.5} fill="url(#TermineCl)" />
					</AreaChart>
				</ResponsiveContainer>
			</Grid>
		</Grid >
	)
}

export { SolvedChart }