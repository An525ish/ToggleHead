import Hero from './components/Hero';
import UpcomingExams from './components/UpcomingExams';
import InfoCards from './components/InfoCard';
import Statistics from './components/Statistics';
import FAQ from './components/FAQ';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <UpcomingExams />
      <InfoCards />
      <Statistics />
      <FAQ />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;