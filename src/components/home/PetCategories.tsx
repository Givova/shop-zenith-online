import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PetType } from '@/types/types';

interface PetCategoryCardProps {
  type: PetType;
  name: string;
  image: string;
}

const PetCategoryCard: React.FC<PetCategoryCardProps> = ({ type, name, image }) => {
  return (
    <Link to={`/shop?pet=${type}`} className="pet-category block">
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center overflow-hidden mb-3">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-medium text-center">{name}</h3>
      </div>
    </Link>
  );
};

const PetCategories = () => {
  const categories: PetCategoryCardProps[] = [
    { type: 'кошка', name: 'Кошки', image: '/placeholders/icons_pet/cat.png' },
    { type: 'хомяк', name: 'Хомяки', image: '/placeholders/icons_pet/Xoma.png' },
    { type: 'собака', name: 'Собаки', image: '/placeholders/icons_pet/dog.png' },
    { type: 'попугай', name: 'Попугаи', image: '/placeholders/icons_pet/popug.png' },
    { type: 'кролик', name: 'Кролики', image: '/placeholders/icons_pet/rabbit.png' },
    { type: 'черепаха', name: 'Черепахи', image: '/placeholders/icons_pet/turtle.png' },
  ];

  const scrollLeft = () => {
    const container = document.getElementById('pet-categories-container');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('pet-categories-container');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Магазин по питомцам</h2>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-gray-300"
              onClick={scrollLeft}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-gray-300"
              onClick={scrollRight}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div 
          id="pet-categories-container"
          className="flex space-x-6 md:space-x-12 overflow-x-auto pb-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category) => (
            <PetCategoryCard
              key={category.type}
              type={category.type}
              name={category.name}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetCategories;
