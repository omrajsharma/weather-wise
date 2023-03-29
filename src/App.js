import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Search from './component/Search';
import WeatherCard from './component/WeatherCard';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <WeatherCard />
      <Footer />
    </div>
  );
}

export default App;
