import CollectionCarousel from "../../components/collection-carousel/CollectionCarousel";
import Description from "../../components/description/Description";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import LargePhoto from "../../components/large-photo/LargePhoto";
import PhotosCarousel from "../../components/photos-carousel/PhotosCarousel";


function Home() {

  return (
    <>
      <Header />
      <div id="scroll-container">
        <LargePhoto />
        <CollectionCarousel />
        <PhotosCarousel />
        <Description />
        <Footer />
      </div>
    </>
    
  )
}

export default Home;
