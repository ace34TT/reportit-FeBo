import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation, matchPath } from 'react-router-dom';
import styled from 'styled-components'

const drawerWidth = 240;

interface INavigationItem {
    name: string,
    url: string,
    icon: JSX.Element
}

const StyledLink = styled(Link)`
    text-decoration: none;
    color: rgb(32, 51, 68)
`

const ItemList = (props: { item: INavigationItem }) => {
    const location = useLocation();
    return (
        <div>
            <StyledLink key={props.item.name} to={props.item.url} >
                <ListItem button className={"item"}>
                    <ListItemIcon>
                        {props.item.icon}
                    </ListItemIcon>
                    <ListItemText primary={props.item.name} />
                </ListItem>
            </StyledLink>
        </div>
    )
}

export { ItemList }