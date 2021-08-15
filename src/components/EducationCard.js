import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

// import cardImage from '../images/CCNY.PNG';

const useStyles = makeStyles({
  root: {
    
  },
  media: {
    height: 150,
    width: '50%',
    margin: 3
  },
});

export default function EducationCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
    
        <CardContent>
        <Box bgcolor="#6f6c9e" p={1}>
          <WhiteTextTypography align = "center" gutterBottom variant="h4" component="h2">
            {props.eduName}
          </WhiteTextTypography>
          <WhiteTextTypography variant="body1" color="textSecondary" >
            {props.eduDegree} GPA: {props.eduGPA}
          </WhiteTextTypography>
          <WhiteTextTypography variant="body1" color="textSecondary" >
            {props.eduDate}
          </WhiteTextTypography>
        </Box>
          
          <div style={{ display:'flex', justifyContent:'center' }}>
            <CardMedia 
              className={classes.media}
              image={props.eduClubsImg}
              title= "Clubs"
            />
          </div>
         
          {props.eduAwards.length > 0 ? 
            <Typography gutterBottom variant="h5" component="h2">
            Awards
            </Typography>:
            <></>}

          <Typography variant="body1" color="textSecondary" >
            {props.eduAwards}
          </Typography>
          {props.eduClubs.length > 0 ? 
            <Typography gutterBottom variant="h5" component="h2">
            Clubs:
            </Typography>:
            <></>}
          <Typography variant="body1" color="textSecondary" >
            {props.eduClubs}
          </Typography>

          <Typography variant="body1" color="textSecondary" >
            {props.eduCourses}
          </Typography>
          
        </CardContent>
        
        

    </Card>
  );
}
