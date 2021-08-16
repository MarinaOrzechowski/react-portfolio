import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const WhiteTextTypography = withStyles({
  root: {
    color: "white"
  }
})(Typography);

const useStyles = makeStyles({
  root: {
    
  },
  media: {
    height: 300,
    width: '65%',
    margin: 15
  },
});

export default function CertificateCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
    
        <CardContent>
        <Box bgcolor="#ffb400" p={2}>
          <WhiteTextTypography align = "center" gutterBottom variant="h4" component="h2" >
            {props.certName}
          </WhiteTextTypography>
        </Box>
          
          <div style={{ display:'flex', justifyContent:'center' }}>
            <CardMedia 
              className={classes.media}
              image={props.certImg}
              title= {props.certName}
            />
            
          </div>
          <Divider />
          <Typography variant="body1" color="textSecondary" >
            {props.certDescription}
          </Typography>
          
        </CardContent>
        
    </Card>
  );
}
