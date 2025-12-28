import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Collections from './pages/collections/Collections';
import { useEffect, useState } from 'react';
import Product from './pages/product/Product';

interface Links {
  collections: any[];
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/collections/:collectionName"} element={<Collections />} />
        <Route path={"/collections/:collectionName/:productName"} element={<Product />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
