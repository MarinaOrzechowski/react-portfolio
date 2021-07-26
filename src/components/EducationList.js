
import EducationCard from './EducationCard';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function EducationList() {


  let educations = [
    {
        _id: 3,
        eduName: "The City College of New York, CUNY.",
        eduDegree: "BS in Computer Science",
        eduDate:"2018-2021",
        eduGPA:"3.92/4.0",
        eduAwards: ["Grove School of Engineering Valedictorian nominee.", "Computer Science Achievement Award.", "Bank of America Code Week finalist."],
        eduClubs: ["Secretary of Women in Computer Science club. Organized over 15 technical workshops (HTML/CSS, Python, Machine Learning) for high school and CCNY students. Informed over 150 CCNY students about tech/networking opportunities via weekly online newsletters."],
        eduCourses:"Data Structures, Algorithms, Java, Python, Data visualization, Machine Learning, Big Data.",
        eduDiploma:"",
        eduClubsImg:""
    },
      {
        _id: 2,
        eduName: "Kingsborough Community College, CUNY.",
        eduDegree: "AS in Computer Science.",
        eduDate: "2016-2018",
        eduGPA: "3.98/4.0",
        eduAwards: ["Kahn’s scholarship for engineering students."],
        eduClubs: ["Mu Alpha Theta - mathematics honor society for high school and two-year college students.", "Phi Theta Kappa - international honor society of two-year colleges and academic programs."],
        eduCourses: "Advanced C++, MIPS Assembly language.",
        eduDiploma:"",
        eduClubsImg:""
    },
    {
        _id: 1,
          eduName: "Kaliningrad State Technical University.",
          eduDegree: "Specialist degree in Finance and Banking.",
          eduDate: "2008-2013",
          eduGPA: "5.0/5.0",
          eduAwards:["The Success Formula Regional competition - second place. In a team of four developed a business plan for a chain of 'drogeri' stores."],
          eduClubs: [],
          eduCourses:"",
          eduDiploma:"",
          eduClubsImg:""
      },
    
    ];

  let result = educations.map(edu => 
    <Grid item key = {edu._id}>
        <EducationCard 
          eduName = {edu.eduName} 
          eduDegree = {edu.eduDegree}
          eduDate = {edu.eduDate}
          eduGPA = {edu.eduGPA}
          eduAwards = {edu.eduAwards.map((award)=> <li>{award}</li>)}
          eduClubs = {edu.eduClubs.map((club)=><li>{club}</li>)}
          eduCourses = {edu.eduCourses}
          eduDiploma = {edu.eduDiploma} 
          eduClubsImg = {edu.eduClubsImg}
        >
        </EducationCard>
    </Grid>
    )


    return (
        <div style={{ marginTop: 50, marginBottom: 100 }}>
          {
            <Grid container alignItems="center" spacing={3} >
              <Grid  item xs={11}>
              <Typography align="center" variant="h4" gutterBottom>
                Education
              </Typography>
              </Grid>         
                {result}
            </Grid>
          }
        </div>  

    );
  }