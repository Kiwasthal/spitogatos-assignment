import './scss/main.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainSection from './components/MainSection';
import ContactSection from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <Hero />
        <MainSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
