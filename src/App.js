import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Order from "./pages/Order";
import { Home, Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages"
import Dashboard from './pages/dashboard/Dashboard';
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    let user = localStorage.getItem("user")
    let userdata = JSON.parse(user)
    if (userdata) {
      dispatch({ type: "LOGIN", payload: userdata })

    } else { dispatch({ type: "LOGOUT" }) }

  }, [dispatch])
  return (
    <BrowserRouter>
      <div className='App'>
        <ToastContainer></ToastContainer>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/product/*" element={<PageNotFound />} />
          <Route path="/customize" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
        </Routes>

      </div>
    </BrowserRouter>


  )

}

export default App