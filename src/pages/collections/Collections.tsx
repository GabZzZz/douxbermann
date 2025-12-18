import './Collections.css'
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useLocation } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../components/ui/carousel';

function Collections() {
    const location = useLocation();
    console.log(location.pathname);
    let collection;
    switch (true) {
        case location.pathname.startsWith('/collections/leach') :
            collection =  { name: 'Laisse', items: [
                {
                    name: 'Cloutée',
                    price: 15,
                    link: '#/leach/cloutee',
                    photos: [
                        'collection-cage.webp',
                        'collection-creme.webp',
                        'collection-croquette.webp',
                        'collection-harnais.webp',
                        'collection-laisse.webp'
                    ],
                },
                {
                    name: 'Cranté',
                    price: 1125,
                    link: '#/leach/crante',
                    photos: [
                        'collection-cage.webp',
                        'collection-creme.webp',
                        'collection-croquette.webp',
                        'collection-harnais.webp',
                        'collection-laisse.webp'
                    ],
                },
                {
                    name: 'Crantéeeeeeeeee',
                    price: 1125,
                    link: '#/leach/cranteeeeeeeeee',
                    photos: [
                        'collection-cage.webp',
                        'collection-creme.webp',
                        'collection-croquette.webp',
                        'collection-harnais.webp',
                        'collection-laisse.webp'
                    ],
                }
            ] };
        break;
    };

    return (<>
      <Header />
      <div id="scroll-container">
        <div className="collections-principal-container">
            <div className='collections-container'>
                <div className="collection-title">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
                        { collection!.name}
                    </h1>
                </div>
                <div className="grid grid-cols-4 gap-6">
                    {collection!.items.map(item => 
                        <div className="collection-element pr-10">
                            <Carousel>
                                <CarouselContent>
                                    {
                                        item.photos.map((photo, index) => (
                                                <CarouselItem key={item.name + '-' + index} className="md:basis-1/1 lg:basis-1/1">
                                                    <a className="collection-carroussel-item" href={item.link}>
                                                        <img src={photo}></img>
                                                    </a>
                                                </CarouselItem>
                                            )
                                        )
                                    }
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                            <p>{item.name} - {item.price}€</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <Footer />
      </div>
    </>);
}

export default Collections;