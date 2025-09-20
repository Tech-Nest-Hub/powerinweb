
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "../../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel"


const HeroSectionWebsiteCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full rounded-none mt-0"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <>
            <CarouselItem key={index} className="basis-full rounded-none">
              <Card className="rounded-none py-6 m-0 ">

                <CardContent className="flex w-full h-[400px] items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          </>
        ))}
      </CarouselContent>
      <CarouselNext className="right-4 size-12" />
      <CarouselPrevious className="left-4 size-12" />
    </Carousel>
  )
}

export default HeroSectionWebsiteCarousel