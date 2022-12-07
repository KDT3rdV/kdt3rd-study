import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductPage from "./pages/ProductPage";
import "./styles/Common.scss";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    // console.log(res.data.slice(0, 10));
    setProducts(res.data.slice(0, 10));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/products"
            element={<ProductPage products={products} />}
          />
          <Route
            path="/product/:productId"
            element={<ProductDetailPage products={products} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <MainPage />
      <ProductPage />
      <ProductDetailPage />
      <NotFound /> */}
    </div>
  );
}

export default App;
