
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  subtitle: string;
  image?: string;
  cta?: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
}

const Hero = ({ title, subtitle, image, cta, secondaryCta }: HeroProps) => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="pt-10 sm:pt-16 lg:pt-8 xl:pt-16">
            <div className="sm:text-center lg:text-left px-4 sm:px-8 xl:pl-0">
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{title.split(' ').slice(0, 3).join(' ')} </span>
                <span className="block text-farm-green xl:inline">
                  {title.split(' ').slice(3).join(' ')}
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {subtitle}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                {cta && (
                  <div className="rounded-md shadow">
                    <Link to={cta.link}>
                      <Button className="w-full bg-farm-green hover:bg-farm-lightGreen text-white py-3 px-6">
                        {cta.text}
                      </Button>
                    </Link>
                  </div>
                )}
                {secondaryCta && (
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link to={secondaryCta.link}>
                      <Button 
                        variant="outline"
                        className="w-full border-farm-green text-farm-green hover:bg-green-50 py-3 px-6"
                      >
                        {secondaryCta.text}
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={image || "/placeholder.svg"}
          alt="Farm fresh produce"
        />
      </div>
    </div>
  );
};

export default Hero;
