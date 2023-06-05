import { Navbar } from './components/navbar/Navbar';
import styles from'./App.module.scss';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Portfolio } from './pages/portfolio/Portfolio';
import { NoMatch } from './pages/noMatch/NoMatch';


function App() {
  return (
    <div className={styles.app}>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="*" element={<NoMatch/>} />
        </Routes>
    </div>
  );
}

export default App;
