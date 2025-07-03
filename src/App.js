import React, { useState } from 'react';
import { BookProvider } from './context/BookContext';
import Header from './components/Header';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Hero from './components/Hero';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgetPassword from './components/ForgetPassword';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  const [search, setSearch] = useState('');
  return (
    <BookProvider>
      <Router>
        <div className="app-container">
          <Header onSearch={setSearch} />
          <main>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/" element={
                <>
                  <Hero />
                  <BookList searchQuery={search} />
                  <BookDetails />
                  <Cart />
                  <Checkout />
                </>
              } />
            </Routes>
          </main>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;
