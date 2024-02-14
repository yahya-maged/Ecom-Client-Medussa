import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { Github } from "@medusajs/icons"
// import "styles/globals.css";


const Hero = () => {
  return (
    <div className="bg-[#bdac9a] h-[104vh] border-b border-ui-border-base relative">
      <div className=" mb-0 pb-0 pt-0 ">
        <img
          src="/bisan-header2.jpeg"
          alt="Description"
          className="w-full h-[60vh] xl:hidden object-cover mb-5"
        />
      </div>

      <div className="container mx-auto pl-2 pb-0 pt-0 xl:pl-7 flex flex-col xl:flex-row items-center h-full">
        <div className="md:w-2/3 md:order-2 overflow-x-auto">
          <img
            src="/bisan-header51.png"
            alt="Description"
            className="pt-1 w-full h-auto hidden xl:block"
          />
        </div>
        <div className="xl:w-1/3 xl:pr-10 flex flex-col justify-end text-left pt-0 xl:p-20 xl:order-1">
          <Heading
            level="h1"
            className="text-3xl font-bold text-white tracking-tight sm:text-4xl text-center xl:text-left mb-3" // Center text on mobile, left align on larger screens
          >
            Live the Heritage, Share the Culture!
          </Heading>
          <Heading
            level="h2"
            className="text-2xl font-light text-[#ffffff]  sm:text-2xl xl:text-3xl xl:pt-5 md:pr-0 xl:pb-5 text-center xl:text-left" // Center text on mobile, left align on larger screens
          >
            Authentic Palestinian products 
            designed for everyday experiences.
          </Heading>
          <a
            href="/store"
            target="_blank"
            className="mt-5 inline-flex items-center px-4 py-2 text-base font-medium  shadow-lg text-white bg-[#620f12] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-5 mx-auto xl:mx-0" // Center button on mobile, left align on larger screens
            style={{ width: 'fit-content' }}
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

