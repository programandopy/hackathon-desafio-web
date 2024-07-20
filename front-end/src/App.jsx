import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import NavBar from './components/NavBar';



function App() {
  return (
    <Routes>
      <Route path="/" element={< LoginPage />} />
    </Routes>
  );
}

export default App;
