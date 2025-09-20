import Shuffle from "@/components/manual-ui/suffle";
import { HomeInput, } from "@/components/ui/input";
import { Search } from "lucide-react";


const Home = () => {
  return (
    <div className="h-full my-28 flex flex-col justify-center items-center gap-6">
      <h1 className="text-7xl font-bold px-96"> 
      <Shuffle
        text="Surf the Web's Hidden Gems"
        shuffleDirection="right"
        duration={0.35}
        animationMode="evenodd"
        shuffleTimes={1}
        ease="power3.out"
        stagger={0.03}
        threshold={0.1}
        triggerOnce={true}
        triggerOnHover={true}
        respectReducedMotion={true}
        loop={true}
        loopDelay={2}
        />
        </h1>
      <p className="text-xl flex text-center items-center justify-center px-80"> A curated list of fascinating websites & projects to explore and build with. Discover without without the overwhelm .</p>

      <div className="flex items-center  border-2 border-gray-800 rounded-lg  w-[500px]">
        <Search className=" ml-4 w-4 h-4" />
        <HomeInput
          type="text"
          placeholder="Search websites, projects, blogs..."
          className="h-14 text-lg px-4 w-full border-none"
        >
        </HomeInput>

      </div>

    </div>
  );
}
export default Home;