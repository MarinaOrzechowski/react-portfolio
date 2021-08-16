import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'; 
import { Box } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const WhiteTextTypography = withStyles({
    root: {
      color: "white"
    }
  })(Typography);
  
const useStyles = makeStyles({
  root: {
    
  },

});

export default function ExperienceCard(props) {
  const classes = useStyles();

  return (
    <TimelineItem>
        <TimelineOppositeContent style={{marginTop: 30}}>
            <Typography variant="h6" component="h1">
                {props.workDates}
            </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
            <img src={props.workImg} alt={props.workName} />
            <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
            <Paper variant="outlined" >
                <Box m={2}>
                    <Box bgcolor="#066781" p={2}>
                        <WhiteTextTypography variant="h4" component="h1">
                            {props.workCompany}
                        </WhiteTextTypography>
                        
                        <WhiteTextTypography variant="h6" component="h1">
                            {props.workTitle}
                        </WhiteTextTypography>
                    </Box>
                    <Typography > 
                        <Box fontWeight="fontWeightBold" fontSize={"h6.fontSize"} py={2}>{props.workSkills}</Box>        
                    </Typography>
                    
                    <Typography >
                        {props.workDescription}
                    </Typography>
                    
                </Box>
                
            </Paper>
        </TimelineContent>

    </TimelineItem>

  );
}
