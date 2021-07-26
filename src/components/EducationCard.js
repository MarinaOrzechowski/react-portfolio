import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// import cardImage from '../images/CCNY.PNG';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 500,
  },
});

export default function EducationCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
    
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.eduName}
          </Typography>
          <Typography variant="body2" color="textSecondary" >
            {props.eduDegree} GPA: {props.eduGPA}
          </Typography>
          <Typography variant="body2" color="textSecondary" >
            {props.eduDate}
          </Typography>
          {props.eduAwards.length > 0 ? 
            <Typography gutterBottom variant="h6" component="h2">
            Awards
            </Typography>:
            <></>}

          <Typography variant="body2" color="textSecondary" >
            {props.eduAwards}
          </Typography>
          {props.eduClubs.length > 0 ? 
            <Typography gutterBottom variant="h6" component="h2">
            Clubs:
            </Typography>:
            <></>}
          <Typography variant="body2" color="textSecondary" >
            {props.eduClubs}
          </Typography>

          <Typography variant="body2" color="textSecondary" >
            {props.eduCourses}
          </Typography>
          
        </CardContent>
        {/* <CardMedia
          className={classes.media}
          image={props.img}
          title={props.eduImg}
        /> */}

    </Card>
  );
}
