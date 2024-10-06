import { useEffect, useRef } from 'react';
import { Contact, Experience, Hero, Navbar, Portfolio } from "./components";

function App() {
  return(
    <div>
      <Hero />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
