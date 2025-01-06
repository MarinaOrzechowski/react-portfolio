import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import Typography from '@material-ui/core/Typography';
import work_cuny from '../images/work_cuny.jpg'
import work_mta from '../images/work_mta.jpg'
import work_accenture from '../images/work_accenture.jpg'
import work_rf from '../images/work_rf.png'
import ExperienceCard from './ExperienceCard';
import { Box } from '@material-ui/core';


const WhiteTextTypography = withStyles({
  root: {
    color: "white"
  }
})(Typography);

export default function ExperienceList() {

  let experiences = [
    {
      _id:0,
      workImg: work_accenture,
      workCompany: "Accenture",
      workDates: "Jul 2022 - Dec 2024",
      workTitle: "Custom Software Engineering Senior Analyst",
      workDescription: [
        "Led a team of four Python developers. Ran daily 'Dev Connect' meetings, mentored junior engineers, reviewed all pull requests for the team, collaborated with other teams on features.",
        "Built and maintained REST and GraphQL APIs to enable a seamless customer checkout process. Leveraged serverless and event-driven architectures utilizing Serverless Framework, AWS Lambda, S3, DynamoDB, SQS, API Gateway, etc.",
        "Supported production deployments, oversaw release builds, monitored logs  post-deployment, and quickly addressed incidents with hotfixes.",
        "Developed Python scripts to automate complex tasks, which reduced reliance on manual operations within the AWS Console and enabled the QA team to complete tasks without dev support. Developed scripts for complex analysis of CloudWatch logs.",
        "Recognized for being ‘proactive, detail oriented, excellent in support and team leadership, delivering an amazing amount of work while supporting the team, and resolving defects and open issues quickly.’"
      ],
      workSkills: "Python, Serverless Framework, AWS (Lambda, S3, DynamoDB, SQS, API Gateway, etc.), FastAPI, GraphQL"
    },
    {
      _id:0,
      workImg: work_accenture,
      workCompany: "Accenture",
      workDates: "Jul 2021 - Jul 2022",
      workTitle: "Advanced App Engineering Analyst",
      workDescription: ["Worked as an Automation Engineer in the Deployment Automation team, where I developed Python scripts to support migration of assets to AWS. Wrote Bash scripts to automate application deployments, which were executed by the CodeDeploy agent on Linux servers."],
      workSkills: "Python, Bash, AWS"
    },
    {
      _id:1,
      workImg: work_rf,
      workCompany: "Research Foundation of CUNY",
      workDates: "May 2020 - Oct 2020",
      workTitle: "Data Visualization Developer",
      workDescription: ["Built an interactive dashboard which shows correlations between socioeconomic data and reported gas leaks for NYC census tracts to predict potential areas with most gas leaks."],
      workSkills: "Python, Pandas, NumPy, Geojson-Utils, Geopandas, Plotly, Dash, Mapbox, GitHub"
    },
    {
      _id:2,
      workImg: work_mta,
      workCompany: "MTA New York City Transit",
      workDates: "Mar 2020 - Oct 2020",
      workTitle: "Software Developer Intern",
      workDescription: ["Developed an application for data collectors to conduct bus/subway surveys and pass collected data to an analysis team in order to optimize transit systems operational performance.", "Developed a desktop application to transfer bus/subway surveys schedule from Excel files to Oracle database, which gave a scheduler more flexibility and control in updating the database."],
      workSkills: "Python, PyQt5, Oracle SQL Developer, Microsoft Power Apps."
    },
    {
      _id:3,
      workImg: work_cuny,
      workCompany: "The City College of New York",
      workDates: "Feb 2020 - May 2020",
      workTitle: "Peer Tutor",
      workDescription: ["Mentored students in Data Structures course by holding weekly office hours to answer questions on key concepts in a small group setting"],
      workSkills: "Data Structures and Algorithms, Python, GitHub"
    }

  ];

  let result = experiences.map(job =>
    <ExperienceCard key = {job._id}
        workCompany = {job.workCompany}
        workDates = {job.workDates}
        workDescription = {job.workDescription.map((description)=><li>    {description}</li>)}
        workImg = {job.workImg}
        workSkills = {job.workSkills}
        workTitle = {job.workTitle}>
    </ExperienceCard>
    )

  return (
    <div>
      <Box xs={12} style={{backgroundColor: "#066781", paddingTop: 40, paddingBottom:40}}>
        <WhiteTextTypography align="center" variant="h3" gutterBottom >
          Experience
        </WhiteTextTypography>
      </Box>
      <Timeline align="alternate">
        {result}
      </Timeline>
    </div>
    
  );
}