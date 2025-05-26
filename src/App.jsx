import { useState } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewsletterSection from "./components/NewsletterSection";
import ProductList from "./components/ProductList";

function App() {
  const [cartData, setCartData] = useState([]);
  const [quantity, setQuantity] = useState(1);

  function handleAddToCart(product) {
    setCartData([...cartData, product]);
  }

  function handleDeleteItemToCart(id) {
    setCartData(cartData.filter((p) => p.id !== id));
  }

  function handlePlusQuantity(product) {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  }

  function handleMinusQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="container mx-auto px-4 md:px-8 py-8">
        <ProductList
          onAddToCart={handleAddToCart}
          onDeleteItemToCart={handleDeleteItemToCart}
          cartData={cartData}
          onPlusQuantity={handlePlusQuantity}
          onMinusQuantity={handleMinusQuantity}
          quantity={quantity}
        />
      </main>
      <NewsletterSection />
      <Footer />
    </>
  );
}

export default App;
