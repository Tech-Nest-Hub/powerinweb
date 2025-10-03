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
     <div className="py-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">Featured Websites</h1>
            </div>
            
            <div className="flex justify-center">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-4xl"
                >
                   
        <CarouselContent>
        {websites.map((website) => (
          <CarouselItem key={website.id} className="md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
              <Card >
                <CardContent className="flex aspect-square items-center justify-center p-4">
                  <span className="text-2xl font-semibold">   {website.imageUrl && (
                      <img 
                        src={website.imageUrl} 
                        alt={website.name}
                        className="mx-auto mb-4 max-h-32 object-cover rounded-lg"
                      />
                    )}</span>
                    
                </CardContent>
              </Card>
              <h1 className="text-3xl">{website.name}</h1>
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