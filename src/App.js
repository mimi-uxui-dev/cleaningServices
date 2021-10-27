import './App.css';
import About from './components/About';
import AboveTheFold from './components/AboveTheFold';
import Footer from './components/Footer';
import FunFacts from './components/FunFacts';
import Navbar from './components/Navbar';
import OurServices from './components/OurServices';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Subs from './components/Subs';

function App() {
  return (
    <>
      <Navbar />
      <AboveTheFold /> 
      <FunFacts />
      <OurServices />
      <About />
      <Pricing />
      <Portfolio />
      <Subs />
      <Footer />
    </>
  );
}

export default App;
