import './styles/main.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';

import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ParticlesConfig from './components/ParticlesConfig';

function App() {
  return (
    <div className="App">
      <Particles
        params={ParticlesConfig} />
      <Navbar />
      <Header />
      <div className="border-line"></div>
      <AboutMe />
    </div>
  );
}

export default App;
