import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavsBar from "./pages/Layouts/NavsBar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import ProductsAll from "./pages/ProductsAll";
import ProductCategory from "./pages/ProductCategory";
import { Footer } from "./pages/Layouts/Footer";
import MessengerPlugin from "./pages/Layouts/MessengerPlugin";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";

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
          <Route path="/contact/" element={<Contact />} />
          <Route path="/about-us/" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
      {/* Footer here */}
      <Footer />
      <MessengerPlugin />
    </>
  );
}

export default App;
