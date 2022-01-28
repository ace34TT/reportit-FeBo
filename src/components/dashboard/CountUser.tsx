import React from 'react'
import Grid from '@mui/material/Grid'
import { Typography, CardHeader, Avatar, IconButton } from '@mui/material'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import { ResponsiveContainer } from 'recharts'

interface ICardDetails {
    total: number,
    title: string,
    cardNumber: number,
    data?: {}[],
}

export default function CountUser({ total = 0, title = '', cardNumber = 1, data=[{}] }: ICardDetails) {

    return (
        <Grid
            className={"card-" + cardNumber}
            container
            display="flex"
            padding={0}
            alignItems="center"
            height={500}
            overflow="hidden"
            borderRadius={2}
            boxShadow={3}
        >
            <Grid item lg={12}>
                <Typography variant="h1" marginTop={2} color="white" align="center" >
                    {title}
                </Typography>
                <Typography variant="h2" color="white" align="center" >
                    {total}
                </Typography>
            </Grid>
            {/* <Grid item lg={12} > */}
            <ResponsiveContainer width={"100%"} height={"30%"}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="uvColor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ebf6ff9a" stopOpacity={0.8} />
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="uv" stroke="#ebf6ff9a" fillOpacity={1} fill={"url(#uvColor)"} />
                </AreaChart>
            </ResponsiveContainer>
            {/* </Grid> */}
        </Grid >
    )
}
