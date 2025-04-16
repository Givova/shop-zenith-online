
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <div className="text-sm font-medium text-pet-orange mb-2">Pet Shop</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The friendly and caring small pet store
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Мы с любовью заботимся о ваших питомцах, предлагая только лучшие товары и аксессуары
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-pet-orange hover:bg-pet-orange/90 text-white"
                asChild
              >
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-pet-orange text-pet-orange hover:bg-pet-orange/10"
                asChild
              >
                <Link to="/about">About Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-pet-orange rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-pet-orange rounded-full opacity-30 blur-3xl"></div>
            <img 
              src={`${import.meta.env.BASE_URL}/lovable-uploads/cfe08521-ee4e-4c60-afb7-efaa9aaca556.png`} 
              alt="Pet shop hero" 
              className="relative z-10 mx-auto md:ml-auto rounded-lg shadow-md"
              style={{ maxHeight: '500px' }}
            />
          </div>
        </div>
      </div>

      {/* Orange circle decorations */}
      <div className="absolute left-10 top-10 w-24 h-24 bg-pet-orange rounded-full opacity-20"></div>
      <div className="absolute right-1/4 bottom-1/3 w-16 h-16 bg-pet-orange rounded-full opacity-20"></div>
      <div className="absolute left-1/4 bottom-10 w-32 h-32 bg-pet-orange rounded-full opacity-10"></div>
    </div>
  );
};

export default Hero;
