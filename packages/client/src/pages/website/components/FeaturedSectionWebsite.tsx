import { useEffect, useState } from "react"
import { type WebsiteType } from "../types/website_types";
import getWebsites from "@/api/websites";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const FeaturedSectionWebsite = () => {
    const [websites, setWebsites] = useState<WebsiteType[]>([]);

    const fetchWebsite = async () => {
        try {
            const response = await getWebsites({});
            setWebsites(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        fetchWebsite();        
    },[])
  return (
    <div>
        <div className="flex flex-row justify-center items-center gap-4">
            <h1 className="text-4xl font-bold">Featured Websites</h1>
           {websites.map((website) => (
                <h1 key={website.id}>{website.name}</h1>
           ))}
            <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
        <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
        </div>

    </div>
  )
}

export default FeaturedSectionWebsite
