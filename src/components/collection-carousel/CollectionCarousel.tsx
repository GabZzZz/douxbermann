import "./CollectionCarousel.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function CollectionCarroussel() {
    const collections = [
        {
            name: 'Cage',
            image: 'collection-cage.webp',
            link: '/collections/cage'
        },
        {
            name: 'Creme',
            image: 'collection-creme.webp',
            link: '/collections/creme'
        },
        {
            name: 'Croquette',
            image: 'collection-croquette.webp',
            link: '/collections/croquette'
        },
        {
            name: 'Harnais',
            image: 'collection-harnais.webp',
            link: '/collections/harnais'
        },
        {
            name: 'Laisse',
            image: 'collection-laisse.webp',
            link: '/collections/laisse'
        },
    ];

    return (
        <div className="mt-5 collection-carroussel-principal-container">
            <div className="collection-carroussel-container">
                <Carousel>
                    <CarouselContent>
                        {
                            collections.map((collection, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                                        <a className="collection-carroussel-item p-1" href={collection.link}>
                                            <img src={collection.image}></img>
                                            <p>{collection.name}</p>
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