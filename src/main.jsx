import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './style.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Product from './components/Product.jsx'
import Footer from './components/Footer.jsx'
import TopBanner from './components/TopBanner.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   
    {/*slider*/}
     <Header />

     <TopBanner />


    <div className="text-2xl text-center my-10">Our Products</div> <hr />
    <Product />
    <Footer />
   
    
  </StrictMode>,
)
