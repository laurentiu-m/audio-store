import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Complete from "./pages/Complete";
import Admin from "./pages/Admin";
import ScrollTop from "./components/ScrollTop";
import { CartProvider } from "./components/context/CartContext";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <CartProvider>
      <ScrollTop />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </CartProvider>
  );
}

export default App;
