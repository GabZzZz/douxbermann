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
                        window.douxbermann.home.carousel.map((link: string, index: number) => (
                                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                                    <img src={'/assets/' + link}></img>
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