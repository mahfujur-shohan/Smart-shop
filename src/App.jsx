import { useState } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewsletterSection from "./components/NewsletterSection";
import ProductList from "./components/ProductList";

function App() {
  const [cartData, setCartData] = useState([]);

  function handleAddToCart(product) {
    setCartData([
      ...cartData,
      {
        itemId: product.id,
        quantity: 1,
        stock: product.stock,
        cover: product.cover,
        name: product.name,
        price: product.price,
      },
    ]);
  }

  function handleDeleteItemToCart(id) {
    setCartData(cartData.filter((p) => p.itemId !== id));
  }

  function handlePlusQuantity(item) {
    if (item.quantity < item.stock) {
      setCartData((prevCartData) =>
        prevCartData.map((i) => {
          if (i.itemId === item.itemId) {
            return {
              ...i,
              quantity: i.quantity + 1,
            };
          } else return i;
        })
      );
    }
  }

  function handleMinusQuantity(item) {
    if (item.quantity > 1) {
      setCartData((prevCartData) =>
        prevCartData.map((i) => {
          if (i.itemId === item.itemId) {
            return {
              ...i,
              quantity: i.quantity - 1,
            };
          } else return i;
        })
      );
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
        />
      </main>
      <NewsletterSection />
      <Footer />
    </>
  );
}

export default App;
