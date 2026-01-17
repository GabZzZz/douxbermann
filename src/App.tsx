import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/home/Home';
import Collections from './pages/collections/Collections';
import Product from './pages/product/Product';
import WhoAreWe from './pages/who-are-we/WhoAreWe';
import { Toaster } from 'sonner';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/collections/:collectionName"} element={<Collections />} />
        <Route path={"/collections/:collectionName/:productName"} element={<Product />} />
        <Route path={"/who-are-we"} element={<WhoAreWe />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App;
