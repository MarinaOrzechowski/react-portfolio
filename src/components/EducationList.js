
import EducationCard from './EducationCard';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ccnyImg from '../images/CCNY.PNG';
import kbccImg from '../images/kbcc.png';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export default function EducationList() {
  const WhiteTextTypography = withStyles({
    root: {
      color: "white"
    }
  })(Typography);

  let educations = [
    {
        _id: 0,
        eduName: ["The City College of New York,", <br />,"CUNY."],
        eduDegree: "BS in Computer Science",
        eduDate:"2018-2021",
        eduGPA:"3.92/4.0",
        eduAwards: ["Grove School of Engineering Valedictorian nominee.", "Computer Science Achievement Award."],
        eduClubs: ["Secretary of Women in Computer Science club. Organized Python and Machine Learning workshops for high school and CCNY students. Informed over 150 students about tech opportunities via weekly online newsletters."],
        eduClubsImg: ccnyImg
    },
      {
        _id: 1,
        eduName: "Kingsborough Community College, CUNY.",
        eduDegree: "AS in Computer Science.",
        eduDate: "2016-2018",
        eduGPA: "3.98/4.0",
        eduAwards: ["Kahn’s scholarship for engineering students."],
        eduClubs: ["Mu Alpha Theta - mathematics honor society for high school and two-year college students.", "Phi Theta Kappa - international honor society of two-year colleges and academic programs."],
        eduClubsImg: kbccImg
    },
    // {
    //     _id: 1,
    //       eduName: "Kaliningrad State Technical University.",
    //       eduDegree: "Specialist degree in Finance and Banking.",
    //       eduDate: "2008-2013",
    //       eduGPA: "5.0/5.0",
    //       eduAwards:["The Success Formula Regional competition - second place. In a team of four developed a business plan for a chain of 'drogeri' stores."],
    //       eduClubs: [],
    //       eduClubsImg:""
    //   },
    
    ];

  let result = educations.map(edu => 
    <Grid item key = {edu._id} xs={12} lg={6}>
        <EducationCard key = {edu._id}
          eduName = {edu.eduName} 
          eduDegree = {edu.eduDegree}
          eduDate = {edu.eduDate}
          eduGPA = {edu.eduGPA}
          eduAwards = {edu.eduAwards.map((award)=> <li>{award}</li>)}
          eduClubs = {edu.eduClubs.map((club)=><li>{club}</li>)}
          eduClubsImg = {edu.eduClubsImg}
        >
        </EducationCard>
    </Grid>
    )


    return (
        <div style={{paddingTop: 40}}>
          <Box style={{backgroundColor: "#5faaa7", paddingTop: 40, paddingBottom:40}}>
            <WhiteTextTypography align="center" variant="h3" gutterBottom >
              Education
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