import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/home/Home';

// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
