import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import FoundingMembers from './Components/FoundingMember';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Home/>
      <FoundingMembers/>
      <FAQ/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
