import './Product.css';
import Layer from '../../components/layer/Layer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../components/ui/carousel';

function Product() {
    const { collectionName, productName } = useParams();
    const [collection, setCollection] = useState<any>();
    const [product, setProduct] = useState<any>();

    const onCollectionsLoaded = () => {
        setCollection(
                window.douxbermann.collections
                    .filter((collection: any) => collection.name === collectionName)
                    .shift()
            );
        setProduct(collection.products
            .filter((product: any) => product.name === productName)
            .shift()
        );
    };

    return (
        <Layer onDataLoaded={onCollectionsLoaded}>
            <div className="product-principal-container">
                <div className="product-container">
                    <div className="product-description">
                        <Carousel className="product-carousel">
                            <CarouselContent className="product-carousel-content">
                                {
                                    product?.pictures?.map((picture: string, index: number) => (
                                            <CarouselItem key={product.name + '-' + picture + '-' + index} className="md:basis-1/1 lg:basis-1/1">
                                                <img src={'/assets/collections/' + collection.name + '/' + picture} />
                                            </CarouselItem>
                                        )
                                    )
                                }
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <div className="product-informations">
                            <span>{product?.label}</span>
                            <span>{product?.description}</span>
                            <span>Tarif : {product?.price}€</span>
                            <span>Couleurs disponibles : </span>
                        </div>
                    </div>
                </div>
            </div>
        </Layer>
    );
}

export default Product;