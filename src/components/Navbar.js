import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import SettingsIcon from '@material-ui/icons/Settings';
import ComputerIcon from '@material-ui/icons/Computer';
import DescriptionIcon from '@material-ui/icons/Description';
import { Grid } from '@material-ui/core';
import {Link} from 'react-scroll'


const useStyles = makeStyles({
    root: {
        position: 'flex',
        bottom: 0,
        width: '100%',
        height: 133,
    },
    label: {
        flexDirection: "column",
        color: 'white'
      }
  });

export default function Navbar() {
    const classes = useStyles();
  
    return (
        <Grid container classes={{root: classes.root}}>
            
            <Grid item container xs={3} style = {{backgroundColor: '#066781', justifyContent: 'center'}}>
                <Button classes={{label: classes.label}} 
                        onClick={() => window.location.replace("/react-portfolio/#experience")}
                        startIcon={<SchoolIcon style={{ fontSize: 50 }}/>}>
                            Experience
                </Button>
                
            </Grid>
            
            
            <Grid item container xs={3} style = {{backgroundColor: '#5faaa7', justifyContent: 'center'}}>
                <Button classes={{label: classes.label}}
                        onClick={() => window.location.replace("/react-portfolio/#education")}  
                        startIcon={<SettingsIcon style={{ fontSize: 50 }}/>}>
                            Education
                </Button>
            </Grid>
            <Grid item container xs={3} style = {{backgroundColor: '#ff6334', justifyContent: 'center'}}>
                <Button classes={{label: classes.label}} 
                        onClick={() => window.location.replace("/react-portfolio/#projects")} 
                        startIcon={<ComputerIcon style={{ fontSize: 50 }}/>}>
                            Projects
                </Button>  
            </Grid>
            <Grid item container xs={3} style = {{backgroundColor: '#ffb400', justifyContent: 'center'}}>
                <Button classes={{label: classes.label}}  
                        onClick={() => window.location.replace("/react-portfolio/#certificates")}
                        startIcon={<DescriptionIcon style={{ fontSize: 50 }}/>}>
                            Certificates
                </Button>
            </Grid> 
        </Grid>
            
        
    );
}
  