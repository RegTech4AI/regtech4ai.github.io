import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import News from './components/News';
import Team from './components/Team';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <News />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;
