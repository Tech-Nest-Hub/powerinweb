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
import { Button } from '@/components/ui/button'

const HeroSectionWebsiteCarousel = () => {
  const [websites, setWebsites] = useState<WebsiteType[]>([]);
  const [isloading, setIsloading] = useState(false);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const fetchWebsites = async () => {
    try {
      setIsloading(true);
      const response = await getWebsites({ page: 1, limit: 10 });
      setWebsites(response.data);
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
      return <Loader />
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
          {websites.map((website) => (
            <CarouselItem key={website.id} className="basis-full rounded-none">
              <Card className="rounded-none py-6 m-0">
                <CardContent className="flex w-full h-[400px] items-center justify-center p-6">
                  <div className="px-15">
                    <div className="flex flex-row space-x-4 items-center my-4">
                      <h3 className="text-5xl font-semibold mb-2">{website.name}</h3>
                      {website.imageUrl && (
                        <img
                          src={website.imageUrl}
                          alt={website.name}
                          className="w-15 rounded-2xl"
                        />
                      )}
                    </div>
                    
                    <div className="flex flex-row items-center pt-4 ">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Value: ${website.value}</p>
                      {website.category && (
                        <p className="text-sm text-gray-600 px-10  dark:text-gray-400">
                          Category: {website.category.name}
                        </p>
                      )}
                    </div>

                    {website.tags && website.tags.length > 0 && (
                      <div className="my-4">
                        <span className="text-xs text-gray-400 ">Tags: </span>
                        {website.tags.map(tag => (
                          <span key={tag.id} className="text-xs bg-gray-100 px-2 py-1 rounded mr-1 dark:text-gray-800">
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <p 
                    className="text-md text-gray-800 my-2 mr-100  dark:text-gray-400"
                    >{website.description}</p>
                    
                    <Button className="px-4 py-2 my-2">
                      <a
                        href={website.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white-500 hover:underline  inline-block font-semi-bold"
                      >
                        Visit Website
                      </a>
                    </Button>
                    <Button className="mx-4">
                      <a 
                        href="#"
                        target="_blank"
                        className="text-white-500 hover:underline inline-block font-semi-bold "
                        >Details</a></Button>
                    
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