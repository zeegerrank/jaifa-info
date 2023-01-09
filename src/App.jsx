import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavsBar from "./pages/Layouts/NavsBar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import ProductsAll from "./pages/ProductsAll";
import ProductCategory from "./pages/ProductCategory";

function App() {
  return (
    <>
      <NavsBar />
      {/* App Routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/" element={<ProductsAll />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* Footer here */}
    </>
  );
}

export default App;
