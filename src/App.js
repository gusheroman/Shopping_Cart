import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Index from './views/Index';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Content">
      <Routes>
        <Route path="/" element={<Index/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
