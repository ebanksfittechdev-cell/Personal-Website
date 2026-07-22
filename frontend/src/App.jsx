import { useState } from 'react';
import Navbar from './components/navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import AboutMe from './components/About';
import Contact from './components/Contact';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div>
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      <Home />
      <Portfolio />
      <Resume />
      <AboutMe />
      <Contact isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
      
    </div>
  );
}

export default App;
