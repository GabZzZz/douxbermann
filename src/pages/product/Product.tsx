import './Product.css';
import Layer from '../../components/layer/Layer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../components/ui/carousel';
import ColorPicker from '../../components/color-picker/ColorPicker';
import { Button } from '../../components/ui/button';
import { Instagram, Mail } from 'lucide-react';

function Product() {
    const { collectionName, productName } = useParams();
    const [collection, setCollection] = useState<any>();
    const [product, setProduct] = useState<any>();
    const [colorLabels, setColorLabels] = useState<string[]>();

    const onCollectionsLoaded = () => {
        const collection = window.douxbermann.collections
            .filter((collection: any) => collection.name === collectionName)
            .shift();
        setCollection(collection);
        const product = collection?.products
            .filter((product: any) => product.name === productName)
            .shift();
        setProduct(product);
        setColorLabels(new Array(product?.colors?.length ?? 0).fill(undefined));
    };

    const onColorChange = (text: string, index: number) => {
        if (colorLabels) {
            colorLabels[index] = text;
            setColorLabels(colorLabels);
        }
    };

    const sendMail = () => {
        const to = "douxbermann@hotmail.com";
        const colorsLabels = (colorLabels ?? []).join('\r\n');
        const subject = encodeURIComponent(
            `Demande d'information au sujet de ${product.label}`
        );
        const body = encodeURIComponent(
        `Bonjour,

        Je vous contacte au sujet de votre produit ${product.label}.
        Je suis intéressé pour passer commande, avec les couleurs suivantes :

        ${colorsLabels}

        Cordialement,`
        );

        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    };

    const openInstagramConversation = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            window.location.href = "https://www.instagram.com/direct/t/douxbermann";
        } else {
            window.open(
            "https://www.instagram.com/direct/t/douxbermann",
            "_blank",
            "noopener,noreferrer"
            );
        }
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
                            { product?.colors && <span>Couleurs disponibles : </span> }
                            { product?.colors?.map((color: any, index: number) => 
                                <ColorPicker key={`${product.name}-${color.label}-${color.hex}-${index}`} color={color} onChange={(text) => onColorChange(text, index)} />
                            )}
                            <span>Contactez moi pour passer commande :</span>
                            <span>
                                <Button onClick={ sendMail }>
                                    <Mail /> Par mail
                                </Button>
                                <Button onClick= { openInstagramConversation } >
                                    <Instagram /> Via Instagram
                                </Button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Layer>
    );
}

export default Product;