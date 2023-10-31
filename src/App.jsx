import { BrowserRouter } from "react-router-dom";
import {  Hero, NavBar, About, Experience, Tech, Projects, Testimonials, Contact, StarsCanvas } from './components';

const App = () => {
  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <NavBar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Projects />
          <Testimonials/>
        
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App;
