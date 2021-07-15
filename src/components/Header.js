import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import myPic from '../images/me1.jpg';
import TextTransition, { presets } from "react-text-transition";
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

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
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));



export default function Header() {
  const classes = useStyles();

  const TEXTS = [
    "Software Engineer",
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
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={2}>
          {/* my profile pic */}
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={myPic} />
            </ButtonBase>
          </Grid>
          
          <Grid item xs={12} sm container>
            {/* my name */}
            <Grid item xs container direction="column" spacing={10}>
              <Grid item xs>
                <Typography gutterBottom variant="h1">
                  Marina <br></br>Orzechowski
                </Typography>
                <Typography gutterBottom>
                  <TextTransition 
                    text={ TEXTS[index % TEXTS.length] } 
                    springConfig={ presets.wobbly }
                    style={{fontSize: 30}}/>
                </Typography>
              </Grid>

            </Grid>
            {/* links to linkedIn and github */}
            <Grid item>
            <IconButton >
              <LinkedInIcon fontSize="large" onClick={()=> window.open('https://www.linkedin.com/in/marina-skachko-orzechowski/', "_blank")}/>
            </IconButton>
            <IconButton >
              <GitHubIcon fontSize="large"onClick={()=> window.open('https://github.com/MarinaOrzechowski', "_blank")}/>
            </IconButton>

            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}