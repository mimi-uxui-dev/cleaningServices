import './App.css';
import AboveTheFold from './components/AboveTheFold';
import FunFacts from './components/FunFacts';
import Navbar from './components/Navbar';
import OurServices from './components/OurServices';

function App() {
  return (
    <>
      <Navbar />
      <AboveTheFold /> 
      <FunFacts />
      <OurServices />
    </>
  );
}

export default App;
