import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SchoolIcon from '@material-ui/icons/School';
import SettingsIcon from '@material-ui/icons/Settings';
import ComputerIcon from '@material-ui/icons/Computer';
import DescriptionIcon from '@material-ui/icons/Description';


const useStyles = makeStyles({
    root: {
      width: '100%',
      
    },
  });

export default function Navbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    return (
        <BottomNavigation style = {{backgroundColor: 'lightblue', height: 130}}
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
            >
            <BottomNavigationAction label="Experience" icon={<SchoolIcon />} />
            <BottomNavigationAction label="Education" icon={<SettingsIcon />} />
            <BottomNavigationAction label="Projects" icon={<ComputerIcon />} />
            <BottomNavigationAction label="Certificates" icon={<DescriptionIcon />} />
        </BottomNavigation>
    );
}
  