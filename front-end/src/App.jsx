import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import Header from './components/Header';



function App() {
  return (
    <Routes>
      <Route path="/" element={< LoginPage />} />
      <Route path="/home" element={< Header />} />
    </Routes>
  );
}

export default App;
