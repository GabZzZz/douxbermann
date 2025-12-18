import './PhotosCarousel.css';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

function PhotosCarousel() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    )

    const photos = [
        'photos-1.webp',
        'photos-2.webp',
        'photos-3.webp',
        'photos-4.webp',
        'photos-5.webp'
    ];

    return (
        <div className="photos-container">
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                    {
                        photos.map((photo, index) => (
                                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                                    <img src={photo}></img>
                                </CarouselItem>
                            )
                        )
                    }
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default PhotosCarousel;