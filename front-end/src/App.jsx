import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import Home from './pages/home/Home';



function App() {
  return (
    <Routes>
      <Route path="/" element={< LoginPage />} />
      <Route path="/home" element={< Home />} />
    </Routes>
  );
}

export default App;
