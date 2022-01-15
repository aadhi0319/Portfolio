import React from "react";
import {Grid, Stack, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {CircularProgressbarWithChildren, buildStyles} from "react-circular-progressbar";
import TrackVisibility from "react-on-screen";

// renders a card displaying the details of one job
function WorkCard(props) {
    const theme = useTheme();

    // generates circular skill progress bars for each skill
    let children = [];
    Object.entries(props.skills).map((entry) => {
        let [skill, percentage] = entry;
        children.push(
            <div style={{width: "150px", height: "150px"}} skill={skill} key={skill}>
                <Grid item sx={{margin: 2}}>
                    <TrackVisibility once>
                        {({ isVisible }) => {
                            const currentPercentage = isVisible ? percentage : 0;
                            return (
                                <CircularProgressbarWithChildren
                                    value={currentPercentage}
                                    strokeWidth={5}
                                    styles={buildStyles({
                                        pathColor: theme.palette.warning.main,
                                        trailColor: "#" + theme.palette.warning.main.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i).slice(1).map(hexStr=>(Math.floor(parseInt("0x"+hexStr)/2)).toString(16)).join(''),
                                        strokeLinecap: "round",
                                        maxWidth: "5px",
                                        pathTransitionDuration: 2
                                    })}>
                                    {percentage}%<br /><strong>{skill}</strong>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </TrackVisibility>
                </Grid>
            </div>
        );
        return null;
    });
    // alphabetically sorts skills
    children = children.sort((e1, e2) => {
        return e1.props.skill.localeCompare(e2.props.skill, undefined, { numeric: true });
    });
    return (
        <Grid container columns={16} spacing={2} sx={{marginTop: 4, marginBottom: 4}}>
            <Grid item xs={16} md={3} order={{xs: 1, md: 1}} display="flex" alignItems="center" justifyContent={{xs: "center", md: "left"}}>
                <a href={props.website} target="_blank" rel="noreferrer"><img src={props.logo} style={{maxWidth: "150px", width: "100%"}} alt="Work Logo"/></a>
            </Grid>
            <Grid item xs={16} md={10} order={{xs: 3, md: 2}}>
                <Stack spacing={3}>
                    <Typography variant="h3">{props.company}</Typography>
                    <Typography variant="h4" color="warning.light">{props.title}</Typography>
                    <Typography component="span" variant="body1">{props.children}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={16} md={3} order={{xs: 2, md: 3}} style={{paddingLeft: 0}}>
                <Grid container columns={16} spacing={2}>
                    <Grid item xs={8} md={16} display="flex" justifyContent={{xs: "left", md: "right"}}>
                        <Typography variant="h4">{props.period}</Typography>
                    </Grid>
                    <Grid item xs={8} md={16} display="flex" justifyContent="right">
                        <Typography variant="h4">{props.hours}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={16} md={16} order={{xs: 4, md: 4}} display="flex" alignItems="center" justifyContent="center">
                <Grid container spacing={0} display="flex" justifyContent="center">
                    {
                        children
                    }
                </Grid>
            </Grid>
        </Grid>
    );
}

export default WorkCard;