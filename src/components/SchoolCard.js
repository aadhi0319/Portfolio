import React from "react";
import {Grid, Stack, Typography} from "@mui/material";

// rendear a card displaying the details of one school
function SchoolCard(props) {
    return (
        <Grid container columns={16} spacing={2} sx={{marginTop: 4, marginBottom: 4}}>
            <Grid item xs={16} md={3} order={{xs: 1, md: 1}} display="flex" alignItems="center" justifyContent={{xs: "center", md: "left"}}>
                <a href={props.website} target="_blank" rel="noreferrer"><img src={props.logo} loading="lazy" style={{maxWidth: "150px", width: "100%"}} alt="School Logo" /></a>
            </Grid>
            <Grid item xs={16} md={10} order={{xs: 3, md: 2}}>
                <Stack spacing={3}>
                    <Typography variant="h3">{props.degree}</Typography>
                    <Typography variant="h4" color="warning.light">{props.school}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={16} md={3} order={{xs: 2, md: 3}} style={{paddingLeft: 0}}>
                <Grid container columns={16} spacing={2}>
                    <Grid item xs={8} md={16} display="flex" justifyContent={{xs: "left", md: "right"}}>
                        <Typography variant="h4">{props.period}</Typography>
                    </Grid>
                    <Grid item xs={8} md={16} display="flex" justifyContent="right">
                        <Typography variant="h5">{props.gpa} <Typography align="right" component="div" variant="button" sx={{fontSize: ".7em"}}>gpa</Typography></Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SchoolCard;