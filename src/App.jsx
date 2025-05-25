import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="container mx-auto px-4 md:px-8 py-8">
        <ProductList />
      </main>
    </>
  );
}

export default App;
