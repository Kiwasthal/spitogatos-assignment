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

      {/* Page content wrapper is used to disable content in mobile menu views */}

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
