import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Profile from './Pages/Profile';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Wish from './Pages/Wishlist';
import ShopCategory from './Pages/ShopCategory';
import React, { useState } from 'react';

function App() {

  const [key, setKey] = useState(0);
  const handleCategorySelect = (category) => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />}/>
        <Route path="/product/:prodID" element={<Product />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/wish" element={<Wish />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/loginsignup" element={<LoginSignup />}/>
        <Route path="/products/:category" element={<ShopCategory />} />
      </Routes>
      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
