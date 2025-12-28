import "./CollectionCarousel.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

function CollectionCarroussel() {
    return (
        <div className="collection-carroussel-principal-container">
            <div className="collection-carroussel-container">
                <Carousel>
                    <CarouselContent>
                        {
                            window.douxbermann.collections.map((collection: any, index: number) => (
                                    <CarouselItem key={collection.name + '-' + index} className="md:basis-1/2 lg:basis-1/4">
                                        <a className="collection-carroussel-item p-1" href={collection.link}>
                                            <img src={'/assets/' + collection.picture}></img>
                                            <p>{collection.label}</p>
                                        </a>
                                    </CarouselItem>
                                )
                            )
                        }
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
}

export default CollectionCarroussel;