import { Route, Routes } from "react-router-dom";
import "./styles/sass/main.scss";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Register from "./pages/register";
import Login from "./pages/login";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
