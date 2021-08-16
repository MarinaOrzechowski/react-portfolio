import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import myPic from '../images/me1.jpg';
import TextTransition, { presets } from "react-text-transition";
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Box from '@material-ui/core/Box';
import Navbar from './Navbar';
import styled from 'styled-components';
import { palette, spacing, typography } from '@material-ui/system';

const Boxx = styled.div`${palette}${spacing}${typography}`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1500,
  },
  image: {
    width: 512,
    height: 512,
  },
  img: {
    width: 512,
    height: 512,
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));


export default function Header() {
  const classes = useStyles();

  const TEXTS = [
    "Advanced App Engineering Analyst",
    "Florham Park, NJ",
    "Curios, determined, kind :)"
  ];

  // timer for changing text
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (

      <Grid container >
          {/* my profile pic */}
          <Grid item xs={12} md={5} >
              <img className={classes.img} alt="complex" src={myPic} />
          </Grid>
          

          <Grid item xs={12} md={7} style={{ height: '100%'}}>
            
            {/* my name */}
            <Grid container direction="column"  >
              <Grid item container justifyContent='flex-end' style={{ backgroundColor: '#343a40'}}>                      
                <IconButton  onClick={()=> window.open('https://www.linkedin.com/in/marina-skachko-orzechowski/', "_blank")}>
                  <LinkedInIcon style={{fill: "white"}} fontSize="large"/>
                </IconButton>
                <IconButton onClick={()=> window.open('https://github.com/MarinaOrzechowski', "_blank")}>
                  <GitHubIcon style={{fill: "white"}} fontSize="large"/>
                </IconButton>
              </Grid>   
              <Grid item>
                <Box paddingLeft={2} style={{ backgroundColor: '#343a40', height: "50%" }}>
                  <Grid container direction="row" >
                    <Grid item>
                      <Typography gutterBottom style={{color: '#FFFFFF'}}>
                        <Boxx py={{ xs: 2, s: 3, md:5, lg:8 }} fontWeight="fontWeightLight" fontSize={70} fontFamily="Calibri ">Marina Orzechowski</Boxx>
                        
                      </Typography>
                    </Grid>  
        
                  </Grid>
                  </Box>
                </Grid>

                <Box padding={2} paddingLeft={2} style={{ backgroundColor: 'black', height: "50%" }}>
                  <Grid item >
                    <Typography gutterBottom>
                      <TextTransition 
                        text={ TEXTS[index % TEXTS.length] } 
                        springConfig={ presets.wobbly }
                        style={{fontSize: 30, color: '#F9F6EE', fontFamily:"Calibri "}}/>
                    </Typography>
                  </Grid>  
                </Box> 

               
                
                <Grid item>
                  <Navbar />
                </Grid>
            </Grid>
            
           

          </Grid>
        </Grid>


  );
}