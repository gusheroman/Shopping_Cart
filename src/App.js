import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Index from "./views/Index";
import ProductDetail from "./views/ProductDetail";
import Basket from "./views/Basket";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <div className="Content">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product-detail/:ID" element={<ProductDetail />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
