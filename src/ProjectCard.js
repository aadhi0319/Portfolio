import React from "react";
import {Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Stack, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import TrackVisibility from "react-on-screen";
import Alert from "./Alert";
import LinearProgressWithLabel from "./LinearProgressWithLabel";

// renders a card displaying the details of one project
function ProjectCard(props) {
    const theme = useTheme();

    let alertRef = React.useRef();

    // generates linear skill progress bars for each skill
    let children = [];
    Object.entries(props.skills).map((entry) => {
        let [skill, percentage] = entry;
        children.push(
            <div style={{width: "100%", height: "100%", margin: 2}} skill={skill} key={skill}>
                    <TrackVisibility once>
                        {({ isVisible }) => {
                            const currentPercentage = isVisible ? percentage : 0;
                            return (
                                <LinearProgressWithLabel label={skill} value={currentPercentage}/>
                            );
                        }}
                    </TrackVisibility>
            </div>
        );
        return null;
    });
    // alphabetically sorts skills
    children = children.sort((e1, e2) => {
        return e1.props.skill.localeCompare(e2.props.skill, undefined, { numeric: true });
    });
    return (
        <div style={{paddingBottom: theme.spacing(3)}}>
            <Card height="100%">
                <CardActionArea href={props.website} target="_blank" rel="noopener" onClick={(props.website) ? null : ()=>{return alertRef.current.handleClick();}}>
                    <CardMedia
                        component="img"
                        height="140px"
                        image={props.image}
                    />
                    <CardContent>
                        <Grid container columns={2} spacing={2}>
                            <Grid item xs={1}>
                                <Typography gutterBottom variant="h5">
                                    {props.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={1} display="flex" justifyContent="right">
                                <Typography gutterBottom variant="h5" color="text.secondary">
                                    {props.period}
                                </Typography>
                            </Grid>
                        </Grid>
                            <Typography variant="body1" color="text.secondary">
                                {props.children}
                            </Typography>
                        <Divider sx={{margin: 1}}/>
                        <Stack spacing={2}>
                            {
                                children
                            }
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
            {
                (props.website) ? null : <Alert ref={alertRef} duration={props.duration}>{props.message}</Alert>
            }
        </div>
    );
}

export default ProjectCard;