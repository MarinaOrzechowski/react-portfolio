import './App.css';
import Header from './components/Header';
import EducationList from './components/EducationList';
import ExperienceList from './components/ExperienceList';
import CertificateList from './components/CertificateList';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container>
   
   <Header />
   <ExperienceList />
   <EducationList />
   <CertificateList />
   </Container>
  );
}

export default App;
