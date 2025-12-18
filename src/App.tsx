import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Collections from './pages/collections/Collections';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections/leach" element={<Collections />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
