import { useEffect, useState, type ReactNode } from 'react';
import './Layer.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Spinner } from '../ui/spinner';

interface LayerProps {
    children: ReactNode[];
} 

function Layer({ children }: LayerProps) {

  const [douxbermann, setData] = useState(null);  
  
  useEffect(() => {
    if (!window.douxbermann) {
        fetch('data.json')
        .then(response => {
            if (!response.ok) {
            throw new Error('Erreur HTTP');
            }
            return response.json();
        })
        .then(jsonDouxbermann => {
            setData(jsonDouxbermann);
            window.douxbermann = jsonDouxbermann;
        })
        .catch(err => console.error(err));
    }
  }, [window.douxbermann]);

  return (
    <>
      <Header />
      {window.douxbermann ?
        <div id="scroll-container">
          { children }
          <Footer />
        </div> :
        <div className="data-loader">
          <Spinner />
        </div>
      }
    </>
  )
}

export default Layer;