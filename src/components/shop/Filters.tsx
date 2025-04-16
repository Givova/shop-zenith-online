
import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Filter } from '@/types/types';
import { getAllCategories, getAllBrands, getAllTags, getCategoryCount, getBrandCount, getTagCount } from '@/data/products';

interface FiltersProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

const Filters: React.FC<FiltersProps> = ({ filter, onFilterChange }) => {
  const categories = getAllCategories();
  const brands = getAllBrands();
  const tags = getAllTags();
  
  const [priceRange, setPriceRange] = useState<[number, number]>([filter.priceRange.min, filter.priceRange.max]);

  const handleCategoryChange = (category: string, checked: boolean) => {
    let newCategories;
    
    if (checked) {
      newCategories = [...filter.categories, category];
    } else {
      newCategories = filter.categories.filter(c => c !== category);
    }
    
    onFilterChange({
      ...filter,
      categories: newCategories
    });
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    let newBrands;
    
    if (checked) {
      newBrands = [...filter.brands, brand];
    } else {
      newBrands = filter.brands.filter(b => b !== brand);
    }
    
    onFilterChange({
      ...filter,
      brands: newBrands
    });
  };

  const handleTagChange = (tag: string, checked: boolean) => {
    let newTags;
    
    if (checked) {
      newTags = [...filter.tags, tag];
    } else {
      newTags = filter.tags.filter(t => t !== tag);
    }
    
    onFilterChange({
      ...filter,
      tags: newTags
    });
  };

  const handlePriceChange = (values: number[]) => {
    setPriceRange([values[0], values[1]]);
  };

  const handlePriceChangeEnd = (values: number[]) => {
    onFilterChange({
      ...filter,
      priceRange: {
        min: values[0],
        max: values[1]
      }
    });
  };

  return (
    <div className="space-y-8">
      {/* Categories filter */}
      <div>
        <h3 className="font-semibold mb-4">Фильтр по категориям</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center gap-2">
              <Checkbox 
                id={`category-${category}`}
                checked={filter.categories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                className="text-pet-orange focus:ring-pet-orange"
              />
              <Label htmlFor={`category-${category}`} className="flex items-center justify-between w-full cursor-pointer">
                <span>{category}</span>
                <span className="text-gray-500 text-sm">{getCategoryCount(category)}</span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price range filter */}
      <div>
        <h3 className="font-semibold mb-4">Фильтр по цене</h3>
        <div className="px-2">
          <Slider
            defaultValue={[priceRange[0], priceRange[1]]}
            max={100}
            step={1}
            onValueChange={handlePriceChange}
            onValueCommit={handlePriceChangeEnd}
            className="mb-6"
          />
          <div className="flex items-center justify-between">
            <div className="bg-white border rounded px-3 py-1">
              <span className="text-sm text-gray-600">Цена: от ${priceRange[0]}</span>
            </div>
            <span className="text-gray-500">-</span>
            <div className="bg-white border rounded px-3 py-1">
              <span className="text-sm text-gray-600">до ${priceRange[1]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Brands filter */}
      <div>
        <h3 className="font-semibold mb-4">Фильтр по брендам</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center gap-2">
              <Checkbox 
                id={`brand-${brand}`}
                checked={filter.brands.includes(brand)}
                onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                className="text-pet-orange focus:ring-pet-orange"
              />
              <Label htmlFor={`brand-${brand}`} className="flex items-center justify-between w-full cursor-pointer">
                <span>{brand}</span>
                <span className="text-gray-500 text-sm">{getBrandCount(brand)}</span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Tags filter */}
      <div>
        <h3 className="font-semibold mb-4">Фильтр по тегам</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div 
              key={tag}
              className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
                filter.tags.includes(tag) 
                  ? 'bg-pet-orange text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => handleTagChange(tag, !filter.tags.includes(tag))}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
