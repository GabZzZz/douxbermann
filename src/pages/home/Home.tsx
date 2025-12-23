import CollectionCarousel from "../../components/collection-carousel/CollectionCarousel";
import Description from "../../components/description/Description";
import LargePhoto from "../../components/large-photo/LargePhoto";
import Layer from "../../components/layer/Layer";
import PhotosCarousel from "../../components/photos-carousel/PhotosCarousel";


function Home() {
  return (
    <Layer>
      <LargePhoto />
      <CollectionCarousel />
      <PhotosCarousel />
      <Description />
    </Layer>
    
  )
}

export default Home;
