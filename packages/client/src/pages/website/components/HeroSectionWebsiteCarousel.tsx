import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "../../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel"
import React, { useState, useRef, useCallback } from "react"
import { type WebsiteType } from "../types/website_types"
import Loader from "@/utils/loader"
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { AlertCircle, ExternalLink, Info } from 'lucide-react'
import getWebsites from "@/api/websites"

const HeroSectionWebsiteCarousel = () => {
  const [websites, setWebsites] = useState<WebsiteType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }) // Increased delay for better readability
  )

  const fetchWebsites = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getWebsites({ page: 1, limit: 10 });
      console.log(response.data);
      
      setWebsites(response.data);
    } catch (error) {
      console.error("Error fetching websites:", error);
      setError("Failed to load websites. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchWebsites();
  }, [fetchWebsites]);

  // Format currency with proper formatting
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Truncate long descriptions
  const truncateDescription = (description: string, maxLength: number = 300) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  if (isLoading) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="w-full">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{error}</AlertDescription>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={fetchWebsites}
          className="ml-4"
        >
          Retry
        </Button>
      </Alert>
    );
  }

  if (websites.length === 0 && !isLoading) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">No websites available.</p>
      </div>
    );
  }

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full rounded-none mt-0"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        loop: true, // Enable infinite loop
        skipSnaps: false, // Better snapping behavior
      }}
    >
      <CarouselContent>
        {websites.map((website, index) => (
          <CarouselItem key={website.id} className="basis-full rounded-none">
            <Card className="rounded-none py-6 m-0 border-0 shadow-lg"> {/* Improved styling */}
              <CardContent className="flex w-full h-[400px] items-center justify-center p-6">
                <div className="max-w-6xl w-full px-4"> {/* Constrain width for better readability */}
                  {/* Header Section */}
                  <div className="flex flex-row items-center justify-between mb-6">
                    <div className="flex flex-row items-center space-x-4">
                      <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        {website.name}
                      </h3>
                      {website.imageUrl && (
                        <img
                          src={website.imageUrl}
                          alt={`${website.name} logo`}
                          className="w-16 h-16 rounded-2xl object-cover border" // Added border and object-cover
                          loading={index === 0 ? "eager" : "lazy"} // Optimize loading
                        />
                      )}
                    </div>
                  </div>

                  {/* Stats Section */}
                  <div className="flex flex-wrap items-center gap-6 mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-semibold text-green-600 dark:text-green-400">
                        {formatCurrency(website.value)}
                      </span>
                    </div>
                    {website.category && (
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="text-sm">
                          {website.category.name}
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Tags Section */}
                  {website.tags && website.tags.length > 0 && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {website.tags.map(tag => (
                          <Badge 
                            key={tag.id} 
                            variant="outline"
                            className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                          >
                            {tag.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    {truncateDescription(website.description)}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="gap-2">
                      <a
                        href={website.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Website
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="gap-2">
                      <a 
                        href={`/websites/${website.url}`} // Use actual detail route
                        className="inline-flex items-center"
                      >
                        <Info className="w-4 h-4" />
                        View Details
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      {/* Enhanced Navigation */}
      <CarouselPrevious className="left-4 size-12 bg-background/80 backdrop-blur-sm border-0 shadow-lg hover:bg-background" />
      <CarouselNext className="right-4 size-12 bg-background/80 backdrop-blur-sm border-0 shadow-lg hover:bg-background" />
      
      {/* Optional: Add dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {websites.map((_, index) => (
          <button
            key={index}
            className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"
            onClick={() => {/* Add navigation logic */}}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  )
}

export default HeroSectionWebsiteCarousel