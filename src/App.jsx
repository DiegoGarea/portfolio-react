import {BrowserRouter} from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  // StarsCanvas,
  Footer,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <Navbar />
        <div className="relative z-0">
          <Hero />
          {/* <StarsCanvas /> */}
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
