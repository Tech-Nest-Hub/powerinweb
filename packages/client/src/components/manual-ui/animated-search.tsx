import { useEffect, useRef, useState } from 'react';
import { Search } from "lucide-react";
import { HomeInput } from '../ui/input';

const AnimatedSearchInput = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Only animate on first load or page navigation
    if (!hasAnimated) {
      const timer = setTimeout(() => {
        setIsExpanded(true);
        setHasAnimated(true);
        
        // Focus the input after expansion
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }, 500);
      }, 1000); // Delay before animation starts
      
      return () => clearTimeout(timer);
    }
  }, [hasAnimated]);

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
    
    // If expanding, focus the input after transition
    if (!isExpanded) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 300);
    }
  };

  return (
    <div 
      className={`flex cursor-target items-center border-2 border-gray-800 dark:border-gray-200 rounded-lg bg-white dark:bg-gray-800 transition-all duration-500 ease-out overflow-hidden ${
        isExpanded ? 'w-[500px]' : 'w-14'
      }`}
    >
      <div className="relative flex items-center w-full">
        <button 
          onClick={toggleSearch}
          className="focus:outline-none mx-4"
          aria-label="Toggle search"
        >
          <Search 
            className={` w-5 h-5 text-gray-700 dark:text-gray-200 cursor-pointer transition-opacity duration-300 ${
              isExpanded ? 'opacity-100' : 'opacity-70'
            }`} 
          />
        </button>
        <HomeInput
          ref={inputRef}
          type="text"
          placeholder="Search websites, projects, blogs..."
          className={`
            flex-1 h-14 text-lg px-4 border-none bg-transparent focus:ring-0 focus:outline-none
            placeholder:text-gray-700 dark:placeholder:text-gray-200

            transition-all duration-500
            ${isExpanded ? 'w-full opacity-100' : 'w-0 opacity-0'}
          `}
        />
      </div>
    </div>
  );
};

export default AnimatedSearchInput;