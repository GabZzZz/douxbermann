import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Collections from './pages/collections/Collections';
import { useEffect, useState } from 'react';

interface Links {
  collections: any[];
}

function App() {
  const [links, setData] = useState<Links | null>(null);

  useEffect(() => {
    if (!links) {
      fetch('links.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur HTTP');
        }
        return response.json();
      })
      .then((jsonLinks: Links) => {
        setData(jsonLinks);
      })
      .catch(err => console.error(err));
    }
  }, [links]);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {links && links.collections.map((link: any) => (<Route path={"/collections/" + link.name} element={<Collections />} />))}
      </Routes>
    </HashRouter>
  )
}

export default App;
