import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Content">
      <Routes>

      </Routes>
      </div>
    </div>
  );
}

export default App;
