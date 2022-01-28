import React, { useState } from 'react';

import { Button, Grid, TextField } from '@mui/material';
import { red } from '@mui/material/colors';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // Ressources
    const Admin = process.env.PUBLIC_URL + "./undraw_building_blocks_re_rwls.svg"

    // State
    const [username, setusername] = useState("")
    const [password, setPassword] = useState("")
    let history = useNavigate()
    // Style
    const headerStl = {
        color: "rgb(44, 60, 75)"
    }
    // Function
    return (
        <div>
            <Grid container  alignItems="center" justifyContent="center">
                <Grid item lg={7} xs={12} sx={{ mt: 4 }} style={{ textAlign: "center" }}>
                    <img src={Admin} alt="" height="90%" width="90%" />
                </Grid>
                <Grid item lg={5} xs={12}>
                    <Grid
                        container
                        spacing={2}
                        sx={{ mt: 5 }}
                        direction="column"
                        alignItems="center"
                        justifyContent="center" >
                        <h1 style={headerStl}>
                            Report'it
                        </h1>
                        <form onSubmit={() => { history("/admin/dashboard") }}>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-username-input"
                                    label="Username"
                                    autoComplete="current-password"
                                    onChange={event => setusername(event.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ mt: 4 }} >
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={event => setPassword(event.target.value)}
                                />
                            </Grid>
                            <Button type="submit" sx={{ mt: 4 }} variant="contained">Login</Button>
                        </form>
                    </Grid>
                </Grid>
            </Grid >
        </div >
    );
};

export default Login;