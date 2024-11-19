import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./style.css";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import Product from "./components/Product.jsx";
import Footer from "./components/Footer.jsx";
import TopBanner from "./components/TopBanner.jsx";
import UnderDev from "./components/UnderDev.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <UnderDev />
    {/*slider*/}
    <Header />
    <TopBanner />
    <div className="text-2xl text-center mt-10 mb-4">Our Products</div> 
    <div className="divider divider-primary"></div>
    <Product />
    <Footer />
  </StrictMode>
);
