import './App.css';
import Header from './components/Header';
import EducationList from './components/EducationList';
import ExperienceList from './components/ExperienceList';
import CertificateList from './components/CertificateList';
import ProjectsList from './components/ProjectList';
import { Container } from '@material-ui/core';


function App() {
  return (
    <Container>
      <div id='about'> <Header /></div>
      <div id='experience'> <ExperienceList /></div>
      <div id='education'> <EducationList /> </div>
      <div id='projects'> <ProjectsList /> </div>
      <div id='certificates'> <CertificateList /> </div>
   </Container>
  );
}

export default App;
