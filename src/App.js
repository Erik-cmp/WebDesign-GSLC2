import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Why from './components/Why';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <Hero />
      <Why />
      <Footer />
    </div>
  );
}

export default App;
