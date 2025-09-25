import { useEffect, useState } from "react"
import { type WebsiteType } from "../types/website_types";
import getWebsites from "@/api/websites";
import { Button } from "@/components/ui/button";

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
        </div>

    </div>
  )
}

export default FeaturedSectionWebsite
