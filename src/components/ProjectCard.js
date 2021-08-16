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
import { IconButton } from '@material-ui/core';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import { Grid } from '@material-ui/core';
import { Tooltip } from '@material-ui/core';

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

export default function ProjectCard(props) {
  const classes = useStyles();
  let projGit = props.projGit;
  let projLink = props.projLink;
  let projReport = props.projReport;

  return (
    <Card className={classes.root} variant="outlined">
    
        <CardContent>
        <Box bgcolor="#ff6334" p={1}>
          
          <Grid container direction="column" >
                <Grid item>
                <WhiteTextTypography align = "center"  variant="h4" component="h2" >
                    {props.projName}
                </WhiteTextTypography>
                </Grid>
                <Grid item container justifyContent='center' >  
                    {projLink ? 
                    <Tooltip title="Deployed Project. Try it!">
                        <IconButton  onClick={()=> window.open(projLink, "_blank")}>
                            <SportsEsportsIcon style={{fill: "white"}} fontSize="large"/>
                        </IconButton>
                    </Tooltip> : <> </> 
                    }             
                      
                    <Tooltip title="Project on GitHub">  
                        <IconButton onClick={()=> window.open(projGit, "_blank")}>
                            <GitHubIcon style={{fill: "white"}} fontSize="large"/>
                        </IconButton>
                    </Tooltip> 
                    {projReport ? 
                        <Tooltip title="Project Report">  
                            <IconButton onClick={()=> window.open(projReport, "_blank")}>
                                <DescriptionIcon style={{fill: "white"}} fontSize="large"/>
                            </IconButton>
                        </Tooltip> : <> </>}
                </Grid> 
              </Grid>
        </Box>
        
            <Typography variant="body1" color="black" >
            <Box fontWeight="fontWeightBold" p={1}>{props.projTech}</Box>
            </Typography>
        
          
          <Box style={{ display:'flex', justifyContent:'center' , padding: 10}}>
            <video width="500" height="300" controls>
                <source src={props.projDemo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>         
          </Box>

          <Divider style={{margin:10}}/>
          <Typography variant="body1" color="textSecondary" >
            {props.projDescription}
          </Typography>
          
        </CardContent>
        
    </Card>
  );
}
