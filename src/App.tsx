import './App.css';
import CollectionCarousel from './components/collection-carousel/CollectionCarousel';
import Description from './components/description/Description';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LargePhoto from './components/large-photo/LargePhoto';
import PhotosCarousel from './components/photos-carousel/PhotosCarousel';

function App() {

  return (
    <>
      <Header />
      <LargePhoto />
      <CollectionCarousel />
      <PhotosCarousel />
      <Description />
      <Footer />
    </>
    
  )
}

export default App;
