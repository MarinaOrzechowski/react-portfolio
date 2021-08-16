import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import { Box } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    
  },

});

export default function ExperienceCard(props) {
  const classes = useStyles();

  return (
    <TimelineItem>

        <TimelineSeparator>
            <img src={props.workImg} alt={props.workName} />
            <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
            <Paper variant="outlined" className={classes.paper}>
                <Box m={2}>
                    <Typography variant="h4" component="h1">
                        {props.workCompany}
                    </Typography>
                    <Typography variant="h6" component="h1">
                        {props.workDates}
                    </Typography>
                    <Typography variant="h6" component="h1">
                        {props.workTitle}
                    </Typography>
                    <Typography >
                        {props.workDescription}
                    </Typography>
                    <Typography >
                        {props.workSkills}
                    </Typography>
                </Box>
                
            </Paper>
        </TimelineContent>

    </TimelineItem>

  );
}
