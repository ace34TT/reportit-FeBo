import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';
import ReportProvider from '../utils/context/ReportProvider';
import NavBar from '../components/adminNavBar';
import RegionProvider from '../utils/context/RegionProvider';

export default function Admin() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar color='default' position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h5" color=" rgb(32, 51, 68)" noWrap component="div">
                        Report'IT
                    </Typography>
                </Toolbar>
            </AppBar>
            <NavBar></NavBar>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <ReportProvider>
                    <RegionProvider>
                        <Outlet />
                    </RegionProvider>
                </ReportProvider>
            </Box>
        </Box>
    );
}
