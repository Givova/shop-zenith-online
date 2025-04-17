import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [catCursorActive, setCatCursorActive] = useState(false);
  const [dogCursorActive, setDogCursorActive] = useState(false);

  const handleCatClick = () => {
    setCatCursorActive(!catCursorActive);
  };

  const handleDogClick = () => {
    setDogCursorActive(!dogCursorActive);
  };

  // Применяем стиль курсора на всю страницу при активации
  useEffect(() => {
    if (catCursorActive) {
      document.body.style.cursor = `url('/placeholders/cursors/cat_paw.png'), auto`;
    } else if (dogCursorActive) {
      document.body.style.cursor = `url('/placeholders/cursors/dog_paw.png'), auto`;
    } else {
      document.body.style.cursor = 'auto';
    }

    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [catCursorActive, dogCursorActive]);

  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <div className="text-sm font-medium text-pet-orange mb-2 font-montserrat"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-montserrat">
              Дружественный и заботливый магазин кормов для домашних животных
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
                <Link to="/shop">Купить сейчас</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pet-orange text-pet-orange hover:bg-pet-orange/10"
                asChild
              >
                <Link to="/about">О нас</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            {/* <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-pet-orange rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-pet-orange rounded-full opacity-30 blur-3xl"></div> */}
            <div className="relative z-10 mx-auto md:ml-auto w-full max-w-md h-[500px]">
              <div className="absolute inset-0 translate-x-[-50px] scale-125">
                <img 
                  src="/placeholders/main_dog.png" 
                  alt="Собака" 
                  className="absolute inset-5 w-75 h-full object-fit translate-x-[200px] z-30 scale-90"
                  style={{ cursor: `url('/placeholders/cursors/dog_paw.png'), pointer` }}
                  onClick={handleDogClick}
                />
                <img 
                  src="/placeholders/main_cat.png" 
                  alt="Кошка" 
                  className="w-full h-full object-contain scale-75"
                  style={{ cursor: `url('/placeholders/cursors/cat_paw.png'), pointer` }}
                  onClick={handleCatClick}
                />
                <img 
                  src="/placeholders/main_food.png" 
                  alt='корм'
                  className='absolute inset-0 w-full h-full object-contain z-50 translate-x-[220px] translate-y-[400px]'
                  style={{ cursor: `default, pointer`, scale: '0.37' }}
                />
              </div>
            </div>
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
