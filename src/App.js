import './styles/main.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';

import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import ParticlesConfig from './components/ParticlesConfig';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Particles
        params={ParticlesConfig} />
      <Navbar />
      <Header />
      <div className="border-line"></div>
      <AboutMe />
      <Services />
      <Experience />
    </div>
  );
}

export default App;
