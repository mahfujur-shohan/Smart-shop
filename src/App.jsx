import { useState } from "react";
import { initialProducts } from "../src/data/data";
import AnnouncementBar from "./components/AnnouncementBar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewsletterSection from "./components/NewsletterSection";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [cartData, setCartData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Most Popular");

  function getSortedProducts() {
    let sortedProducts = products.filter((p) =>
      //for search
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //for sorting
    if (filterStatus === "Most Popular") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (filterStatus === "Price: Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (filterStatus === "Price: High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    return sortedProducts;
  }

  function handleAddToCart(product) {
    setProducts((prevProducts) =>
      prevProducts.map((p) => {
        if (p.id === product.id) {
          return {
            ...p,
            stock: p.stock - 1,
          };
        } else return p;
      })
    );
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
    // stock update
    const cartItem = cartData.find((item) => item.itemId === id);
    const newProducts = products.map((p) => {
      if (p.id === id) {
        return {
          ...p,
          stock: p.stock + cartItem.quantity,
        };
      } else return p;
    });
    setProducts(newProducts);

    //for deleting a product
    setCartData(cartData.filter((p) => p.itemId !== id));
  }

  function handlePlusQuantity(item) {
    if (item.quantity < item.stock) {
      // for stock update
      setProducts((prevProducts) =>
        prevProducts.map((p) => {
          if (p.id === item.itemId) {
            return {
              ...p,
              stock: p.stock - 1,
            };
          } else return p;
        })
      );

      // for cart update
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
      // for stock update
      setProducts((prevProducts) =>
        prevProducts.map((p) => {
          if (p.id === item.itemId) {
            return {
              ...p,
              stock: p.stock + 1,
            };
          } else return p;
        })
      );

      // for cart update
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
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="container mx-auto px-4 md:px-8 py-8">
        <ProductList
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          getSortedProducts={getSortedProducts}
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
