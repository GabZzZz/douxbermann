import './Product.css';
import Layer from '../../components/layer/Layer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../components/ui/carousel';
import ColorPicker from '../../components/color-picker/ColorPicker';
import { Button } from '../../components/ui/button';
import { Instagram, Mail } from 'lucide-react';
import { toast } from "sonner";

function Product() {
    const { collectionName, productName } = useParams();
    const [, setCollection] = useState<any>();
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

    const onColorChange = (color: any, text: string, index: number) => {
        if (colorLabels) {
            colorLabels[index] = color.label + ' : ' + text;
            setColorLabels(colorLabels);
        }
    };

    const sendMail = () => {
        const message = getMessage();
        const to = "douxbermann@hotmail.com";
        const subject = encodeURIComponent(
            `Demande d'information au sujet de ${product.label}`
        );
        const body = encodeURIComponent(message);

        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
        navigator.clipboard.writeText(message).then(() => toast.info("Le corp de mail a été copié dans le clipboard.\n Vous pouvez le coller dans votre client mail préféré, et envoyer votre mail à l'adresse douxbermann@hotmail.com"));
    };

    const openInstagramConversation = () => {
        const message = getMessage();
        navigator.clipboard.writeText(message).then(() => toast.info("Le message a été copié dans le clipboard.\n Vous pouvez le coller et me l'envoyer en privé sur Instagram"));
        
        
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

    const getMessage = () => {
        const colorsLabels = (colorLabels ?? []).join('\r\n');
        return `Bonjour,

        Je vous contacte au sujet de votre produit ${product.label}.
        Je suis intéressé pour passer commande, avec les couleurs suivantes :

        ${colorsLabels}

        Cordialement,`;
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
                                                <img src={'/assets/' + picture} />
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
                                <ColorPicker key={`${product.name}-${color.label}-${color.hex}-${index}`} color={color} onChange={(text) => onColorChange(color, text, index)} />
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