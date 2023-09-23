import logo from './logo.svg';
import './App.css';
import Navbar from './Partials/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './Partials/Footer';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Kontak from './components/Kontak';
import Gap from './components/Gap';

function App() {
  return (
<>

<Navbar/>
<HeroSection/>
<AboutMe/>
<Project/>
<Gap/>
<Kontak/>
<Footer/>

</>
  );
}

export default App;
