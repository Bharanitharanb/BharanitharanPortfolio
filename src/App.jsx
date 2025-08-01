import React from 'react'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
     return (
    <div>
      <Navbar />
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App
