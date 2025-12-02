import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DriverList from './components/DriverList';
import DriverDetail from './components/DriverDetail';
import './index.css';   // ← все стили здесь

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DriverList />} />
          <Route path="/driver/:id" element={<DriverDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;