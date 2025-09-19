import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
        <h1 className="text-4xl font-bold flex flex-wrap px-100"> Surf the Web's Hidden Gems</h1>
        <p className="text-xl flex flex-wrap px-50 items-center justify-center"> A curated list of fascinating websites & projects to explore and build with. Discover without without the overwhelm .</p>

      <div className="flex items-center  border-2 border-gray-800 rounded-3xl">
        <Search size={32} strokeWidth={2.25} className="text-gray-900 " />
        <Input 
          type="text" 
          placeholder="Search websites, projects, blogs..." 
          className="h-14 text-lg px-4 border-none w-full active:none" 
        />
      </div>
    </div>
  );
}
export default Home;