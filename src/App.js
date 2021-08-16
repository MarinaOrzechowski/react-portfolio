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
      <Header />
      <ExperienceList />
      <EducationList />
      <ProjectsList />
      <CertificateList />
   </Container>
  );
}

export default App;
