import { Route, Routes } from "react-router-dom";
import "./styles/sass/main.scss";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Register from "./pages/register";
import Login from "./pages/login";
import Footer from "./components/footer";
import ProductView from "./pages/product-view";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-view/:id" element={<ProductView />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
