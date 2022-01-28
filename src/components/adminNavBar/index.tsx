import React from 'react'
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ReportIcon from '@mui/icons-material/Report';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { ItemList } from './ItemList';

const drawerWidth = 240;

interface INavigationItem {
    name: string,
    url: string,
    icon: JSX.Element
}

const dashBoardNavigation: INavigationItem[] = [
    {
        name: "Dashboard",
        url: "dashboard",
        icon: <DashboardRoundedIcon />
    }
]

const reportNavigation: INavigationItem[] = [
    {
        name: "Pending",
        url: "report/pending",
        icon: <DashboardRoundedIcon />
    },
    {
        name: "Assigned",
        url: "report/assigned",
        icon: <ReportIcon />
    },
    {
        name: "User list",
        url: "user/list",
        icon: <PersonRoundedIcon />
    },
    {
        name: "Report Type",
        url: "report/type",
        icon: <ReportIcon />
    }
]

export default function NavBar() {
    return (
        <div>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {dashBoardNavigation.map((item) => (
                            <ItemList item={item} />
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {reportNavigation.map((item) => (
                            <ItemList item={item} />
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>
    )
}
