import { Routes, Route, Navigate } from "react-router-dom";

import { Dashboard } from "./pages/dashboard/dashboard";
import { LoginPage } from "./pages/login/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
