import { Route, Routes } from "react-router-dom";
import "./styles/sass/main.scss";
import Home from "./pages/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
