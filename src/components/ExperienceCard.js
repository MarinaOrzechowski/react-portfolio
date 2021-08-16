import React from 'react';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'; 
import { Box } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default function ExperienceCard(props) {


  return (
    <TimelineItem>
        <TimelineOppositeContent style={{marginTop: 30}}>
            <Typography variant="h6" component="h1">
                {props.workDates}
            </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator style={{paddingTop:7, paddingBottom:7}}>
            <img src={props.workImg} alt={props.workName} />
            <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
            <Paper variant="outlined" >
                <Box m={2}>
                    
                    <Typography variant="h4" component="h1">
                        <Box fontWeight="fontWeightBold">{props.workCompany}</Box>
                    </Typography>
                    
                    <Typography variant="h6" component="h1">
                        <Box fontWeight="fontWeightBold">{props.workTitle}</Box>
                    </Typography>
                    <Divider />
                    <Typography > 
                        <Box  py={2}>{props.workSkills}</Box>        
                    </Typography>
                    <Divider />
                    <Typography >
                        <Box  py={1}>{props.workDescription}</Box>
                    </Typography>
                    
                </Box>
                
            </Paper>
        </TimelineContent>

    </TimelineItem>

  );
}
