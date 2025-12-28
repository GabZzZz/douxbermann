import './Collections.css';
import { useParams } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../components/ui/carousel';
import { useState } from 'react';
import Layer from '../../components/layer/Layer';

function Collections() {
    const { collectionName } = useParams();
    const [collection, setCollection] = useState<any>();

    const onCollectionsLoaded = () => {
        setCollection(
                window.douxbermann.collections
                    .filter((collection: any) => collection.name === collectionName)
                    .shift()
            );
    };

    return (
      <Layer onDataLoaded={onCollectionsLoaded}>
        <div className="collections-principal-container mb-20">
            <div className='collections-container mb-4'>
                <div className="collection-title">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
                        { collection?.label}
                    </h1>
                </div>
                <div className="grid grid-cols-4 gap-6">
                    {collection?.products?.map((product: any, productIndex: number) => 
                        <div className="collection-element pr-10" key={product.name + '-' + productIndex}>
                            <Carousel className="collection-carousel">
                                <CarouselContent className="collection-carousel-content">
                                    {
                                        product.pictures.map((picture: string, index: number) => (
                                                <CarouselItem key={product.name + '-' + picture + '-' + index} className="md:basis-1/1 lg:basis-1/1">
                                                    <a className="collection-carroussel-item" href={product.link}>
                                                        <img src={'/assets/collections/' + collection.name + '/' + picture} />
                                                    </a>
                                                </CarouselItem>
                                            )
                                        )
                                    }
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                            <p>{product.label} - {product.price}€</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </Layer>
      );
}

export default Collections;