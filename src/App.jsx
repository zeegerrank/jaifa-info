import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavsBar from "./pages/Layouts/NavsBar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductGroup from "./components/ProductGroup";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <NavsBar />
      {/* App Routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/" element="" />
          <Route path="/products/:category" element={<ProductGroup />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* Footer here */}
    </>
  );
}

export default App;
