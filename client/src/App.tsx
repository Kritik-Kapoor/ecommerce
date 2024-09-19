import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/onboarding/Login";
import Register from "./pages/onboarding/Register";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
