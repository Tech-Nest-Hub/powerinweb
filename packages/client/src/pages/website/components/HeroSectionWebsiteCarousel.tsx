
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const HeroSectionWebsiteCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full  px-5"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
              <>
          <CarouselItem key={index} className="basis-full">
              <div className="p-1">
                <Card>

                  <CardContent className="flex w-full h-[400px] items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>

                </Card>
                                                                <CarouselPrevious />
      <CarouselNext />
              </div>
            </CarouselItem>
</>
        ))}
        
      </CarouselContent>
  
    </Carousel>
  )
}

export default HeroSectionWebsiteCarousel