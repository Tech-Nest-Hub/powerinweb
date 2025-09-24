import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "../../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel"
import { useState } from "react"
import * as React from "react"
import getWebsites from "@/api/websites"
import { type WebsiteType } from "../types/website_types"
import Loader from "@/utils/loader"

const HeroSectionWebsiteCarousel = () => {
  const [websites, setWebsites] = useState<WebsiteType[]>([]);
  const [isloading, setIsloading] = useState(false);
  
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  
  const fetchWebsites = async () => {
    try {
      setIsloading(true);
      const response = await getWebsites();
      setWebsites(response);
    } catch (error) {
      console.error("Error fetching websites:", error);
    } finally {
      setIsloading(false);
    }
  }
  
  React.useEffect(() => {
    fetchWebsites();
  }, [])
  {
    if (isloading) {
      return <Loader/>
    }
  }

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="w-full rounded-none mt-0"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="">
          {websites.slice(0, 10).map((website) => (
            <CarouselItem key={website.id} className="basis-full rounded-none">
              <Card className="rounded-none py-6 m-0">
                <CardContent className="flex w-full h-[400px] items-center justify-center p-6">
                  <div className="text-center">
                    {website.imageUrl && (
                      <img 
                        src={website.imageUrl} 
                        alt={website.name}
                        className="mx-auto mb-4 max-h-32 object-cover rounded-lg"
                      />
                    )}
                    <h3 className="text-2xl font-semibold mb-2">{website.name}</h3>
                    <p className="text-lg text-gray-600 mb-2">{website.description}</p>
                    <p className="text-sm text-gray-500">Value: ${website.value}</p>
                    <a 
                      href={website.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline mt-2 inline-block"
                    >
                      Visit Website
                    </a>
                    {website.category && (
                      <p className="text-sm text-gray-400 mt-2">
                        Category: {website.category.name}
                      </p>
                    )}
                    {website.tags && website.tags.length > 0 && (
                      <div className="mt-2">
                        <span className="text-xs text-gray-400">Tags: </span>
                        {website.tags.map(tag => (
                          <span key={tag.id} className="text-xs bg-gray-100 px-2 py-1 rounded mr-1">
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="right-4 size-12" />
        <CarouselPrevious className="left-4 size-12" />
      </Carousel>
    </>
  )
}

export default HeroSectionWebsiteCarousel