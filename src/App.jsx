import { useState } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewsletterSection from "./components/NewsletterSection";
import ProductList from "./components/ProductList";

function App() {
  const [cartData, setCartData] = useState([]);

  function handleAddToCart(product) {
    setCartData([...cartData, product]);
  }

  function handleDeleteItemToCart(id) {
    setCartData(cartData.filter((p) => p.id !== id));
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
        />
      </main>
      <NewsletterSection />
      <Footer />
    </>
  );
}

export default App;
