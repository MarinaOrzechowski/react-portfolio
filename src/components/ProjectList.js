
import ProjectCard from './ProjectCard';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import drawnlearn from '../images/draw&learn_audio1.mp4';
import plants from '../images/plants_survivors_demo.mp4';
import tfgDemo from '../images/tfgDemo.mp4';
import glDemo from '../images/glDemo.mp4';
import cpuDemo from '../images/cpu.mp4';



export default function ProjectsList() {

  const WhiteTextTypography = withStyles({
    root: {
      color: "white"
    }
  })(Typography);

  let projects = [
    {
        _id: 0,
        projName: "TranslateForGood",
        projTech: "MERN, Material UI, Socket.io, PWA, GitHub, Heroku.",
        projLink: "https://translateforgood.herokuapp.com/",
        projGit: "https://github.com/sajadgzd/TranslateForGood",
        projReport: "https://drive.google.com/file/d/1wKNMxAHExEU4iUiFwhDr9yuTTABD_Vgr/view?usp=sharing",
        projDemo: tfgDemo,
        projDescription: "Full-stack web application that aims to provide free human-based translation services to immigrants, refugees, and tourists, by matching them with volunteering translators. Users can submit translation requests, accept translation requests, and communicate via real-time chat through which they can send text messages, voice messages, images, and files. The application is powered by the matching algorithm that ensures the best matches between users and volunteering translators based on a variety of attributes."
    },
    {
        _id: 1,
        projName: "NYC Reported Gas Leaks",
        projTech: "Python, Pandas, Dash, Plotly, GitHub, PythonAnywhere.",
        projLink: "http://nycgasleaks.pythonanywhere.com/",
        projGit: "https://github.com/MarinaOrzechowski/GasLeakConEd",
        projReport: null,
        projDemo: glDemo,
        projDescription: "NYC Reported Gas Leaks is an interactive dashboard which helps to identify correlations between socioeconomic data (household income, household size, unemployment rate, etc.) and reported gas leaks for NYC census tracts to predict potential areas with most gas leaks. Data was retrieved using NYC Open Data, American Community Survey API, and ConEdison API. Highly interactive data visualization was built with Plotly and Dash and deployed on PythonAnywhere."
    },
    {
        _id: 2,
        projName: "Draw&Learn",
        projTech: "Python, Flask, Tensor Flow, GitHub, Heroku.",
        projLink: "https://draw-learn.herokuapp.com/",
        projGit: "https://github.com/MarinaOrzechowski/CNN-on-Quick-Draw-dataset",
        projReport: "https://drive.google.com/file/d/11fmZ38hjfoOyr7S97T9KWLkCWu_pr4BC/view?usp=sharing",
        projDemo: drawnlearn,
        projDescription: "Web page that allows users to draw, recognizes user’s drawings, and provides interesting facts about the drawn objects for productive entertainment during the COVID-19 isolation. A convolutional neural network model was trained using Tensor Flow and 'Quick, Draw!' dataset. Simple frontend was built with Flask. Users' drawings are recognized with CV2 library."
    },
    {
        _id: 3,
        projName: "Single Cycle CPU",
        projTech: "VHDL, MIPS Assembly, Quartus, MARS",
        projLink: null,
        projGit: "https://github.com/MarinaOrzechowski/single_cycle_cpu",
        projReport: "https://drive.google.com/file/d/1hLC13Sp0bunWkQNFtiQPkrrWH-Vw1GoZ/view?usp=sharing",
        projDemo: cpuDemo,
        projDescription: "This Single Cycle CPU supports 21 MIPS instructions. It is built from different components such as data memory, instruction memory, register file, ALU, CPU controller, etc.. Each element was implemented from scratch. CPU was implemented in VHDL using Quartus, and verified in MARS MIPS assembly language simulator."
    },
    {
        _id: 4,
        projName: "DoubleAI",
        projTech: "Python, Pandas, Plotly, Dash, BeautifulSoup, Scikit-Learn, Mongo DB.",
        projLink: null,
        projGit: "https://github.com/MarinaOrzechowski/reviewsReport",
        projReport: null,
        projDemo: "",
        projDescription: "DoubleAI is a web tool which allows managers to scrape online reviews about their company and understand them with the help of an interactive dashboard. This automates identifying negative reviews and helps managers to send responses in a timely manner. Reviews are scraped from 4 online sources, missing information (department, rating) is predicted with ML models."
    },
    {
        _id: 5,
        projName: "Plants-Survivors",
        projTech: "C#, Unity2D, Heroku.",
        projLink: "https://marinaorzechowski.github.io/PlantsSurvivorsWebGL/",
        projGit: "https://github.com/MarinaOrzechowski/plants-survivors",
        projReport: null,
        projDemo: plants,
        projDescription: "Plants-Survivors is a simple breaking blocks game. This game is about plants which are struggling to survive under layers of concrete built by people. The goal is to break through all the layers of bricks, cement, and sand and see the sun. The game has multiple levels with different obstacles. It was built with Unity 2D in C#"
    },

    
    ];

  let result = projects.map(proj => 
    <Grid item key = {proj._id} xs={12} lg={6}>
        <ProjectCard key = {proj._id}
          projName = {proj.projName} 
          projDemo = {proj.projDemo}
          projTech = {proj.projTech}
          projDescription = {proj.projDescription}
          projLink = {proj.projLink}
          projGit = {proj.projGit}
          projReport = {proj.projReport}

        >
        </ProjectCard>
    </Grid>
    )


    return (
        <div style={{paddingTop: 40}}>
          <Box style={{backgroundColor: "#ff6334", paddingTop: 40, paddingBottom:40}}>
            <WhiteTextTypography align="center" variant="h3"  >
              Projects
            </WhiteTextTypography>             
          </Box>
          <div style={{paddingTop:10}}>
            <Grid container alignItems="center" spacing = {3}>
              {result}
            </Grid>
          </div>
            
        </div>  

    );
  }