import './App.scss';
import { Carousel } from './components/carousel/Carousel';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <div className="carousel">
        <Carousel/>
      </div>
      </header>
    </div>
  );
}

export default App;
