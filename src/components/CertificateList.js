
import CertificateCard from './CertificateCard';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import awsCert from '../images/aws.JPG';
import udacityCert from '../images/udacityDL.JPG';
import codepathCert from '../images/CodePath.JPG';
import ctpCert from "../images/CTP.JPG";


export default function CertificateList() {

  const WhiteTextTypography = withStyles({
    root: {
      color: "white"
    }
  })(Typography);

  let certificates = [
    {
        _id: 0,
        certName: "AWS Solutions Architect - Associate",
        certImg: awsCert,
        certDescription: "Earners of this certification have a comprehensive understanding of AWS services and technologies. They demonstrated the ability to build secure and robust solutions using architectural design principles based on customer requirements. Badge owners are able to strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant."
    },
    {
        _id: 1,
        certName: "UDACITY Deep Learning Nanodegree",
        certImg: udacityCert,
        certDescription:"Learned about neural networks and how to implement them using the deep learning framework PyTorch. Built convolutional networks for image recognition, recurrent networks for sequence generation, generative adversarial networks for image generation, and learned how to deploy models accessible from a website."
    },
    {
        _id: 2,
        certName: "CodePath Advanced Software Engineering Program",
        certImg: codepathCert,
        certDescription:"CodePath is a nonprofit that is helping underrepresented CS students break into tech. The Advanced Software Engineering course gives students a preview of real-world challenges in industry. The course includes lectures, industry mentors, and  info sessions from senior engineers."
    },

    {
        _id: 3,
        certName: "CUNY Tech Prep - Web Development and Data Science",
        certImg: ctpCert,
        certDescription:"Was selected for a technical training program, as one of 125 students out of 400+ applicants. Learned how to work with data and machine learning algorithms from scikit-learn as well as how to visualize data using matplotlib and seaborn. Learned basics of MERN full stack development."
    },
    ];

  let result = certificates.map(cert => 
    <Grid item key = {cert._id} xs={12} lg={6}>
        <CertificateCard key = {cert._id}
          certName = {cert.certName} 
          certImg = {cert.certImg}
          certDescription = {cert.certDescription}
        >
        </CertificateCard>
    </Grid>
    )


    return (
        <div style={{paddingTop: 40}}>
          <Box  xs={12} style={{backgroundColor: "#ffb400", paddingTop: 40, paddingBottom:40}}>
            <WhiteTextTypography align="center" variant="h3"  >
              Certificates
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