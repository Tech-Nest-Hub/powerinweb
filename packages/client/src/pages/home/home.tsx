import AnimatedSearchInput from "@/components/manual-ui/animated-search";
import { BrowseButton } from "@/components/manual-ui/broswe-button";
import Shuffle from "@/components/manual-ui/suffle";
import { ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom';


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

      <AnimatedSearchInput />
      <div className="flex flex-row gap-8">
        <BrowseButton className="text-md p-2 cursor-pointer hover:text-white" variant={"royal"}>
         <Link to="/websites"> Browse websites</Link>
          <ChevronRight className="ml-2 w-4 h-4" />
        </BrowseButton>
        <BrowseButton className="text-md p-2 cursor-pointer hover:text-white">
          <Link to="/projects"> Browse projects</Link>
          <ChevronRight className="ml-2 w-4 h-4 " />
        </BrowseButton>
      </div>


    </div>
  );
}
export default Home;