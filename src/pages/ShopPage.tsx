import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Filters from '../components/shop/Filters';
import ProductsList from '../components/shop/ProductsList';
import { Filter, PetType } from '../types/types';
import { getFilteredProducts } from '../data/products';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal, X } from 'lucide-react';

const ShopPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const petTypeFromUrl = searchParams.get('pet') as PetType | null;

  // Прокрутка страницы вверх при переходе на нее
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [filter, setFilter] = useState<Filter>({
    categories: [],
    priceRange: { min: 0, max: 9000 },
    brands: [],
    tags: []
  });

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activePet, setActivePet] = useState<PetType | null>(petTypeFromUrl);
  const [products, setProducts] = useState(getFilteredProducts(activePet || undefined));

  useEffect(() => {
    // Update products when the filter changes
    setLoading(true);

    setTimeout(() => {
      const filtered = getFilteredProducts(
        activePet || undefined,
        filter.categories.length > 0 ? filter.categories : undefined,
        filter.priceRange,
        filter.brands.length > 0 ? filter.brands : undefined,
        filter.tags.length > 0 ? filter.tags : undefined
      );
      setProducts(filtered);
      setLoading(false);
    }, 500); // Simulating loading
  }, [filter, activePet]);

  useEffect(() => {
    // Update the active pet type when the URL changes
    if (petTypeFromUrl && petTypeFromUrl !== activePet) {
      setActivePet(petTypeFromUrl);
    }
  }, [petTypeFromUrl]);

  const handleFilterChange = (newFilter: Filter) => {
    setFilter(newFilter);
  };

  const handlePetTypeChange = (petType: PetType | null) => {
    setActivePet(petType);

    // Update URL
    if (petType) {
      searchParams.set('pet', petType);
    } else {
      searchParams.delete('pet');
    }

    navigate({
      pathname: location.pathname,
      search: searchParams.toString()
    });
  };

  const resetFilters = () => {
    setFilter({
      categories: [],
      priceRange: { min: 0, max: 10000 },
      brands: [],
      tags: []
    });
    setActivePet(null);
    navigate('/shop');
  };

  // const petTypes: { type: PetType | null, name: string, image: string }[] = [
  //   { type: null, name: 'Все питомцы', image: '/placeholders/all-pets.png' },
  //   { type: 'cat', name: 'Кошки', image: '/placeholders/cat-silhouette.png' },
  //   { type: 'dog', name: 'Собаки', image: '/placeholders/dog-silhouette.png' },
  //   { type: 'hamster', name: 'Хомяки', image: '/placeholders/hamster-silhouette.png' },
  //   { type: 'parrot', name: 'Попугаи', image: '/placeholders/parrot-silhouette.png' },
  //   { type: 'rabbit', name: 'Кролики', image: '/placeholders/rabbit-silhouette.png' },
  //   { type: 'turtle', name: 'Черепахи', image: '/placeholders/turtle-silhouette.png' },
  // ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Магазин</h1>

        {/* Pet type filter */}
        {/* <div className="flex overflow-x-auto pb-4 mb-6 -mx-4 px-4 space-x-4 scrollbar-hide">
          {petTypes.map((pet) => (
            <div 
              key={pet.type || 'all'} 
              className={`flex-shrink-0 cursor-pointer transition-all ${activePet === pet.type ? 'scale-110' : 'opacity-70 hover:opacity-100'}`}
              onClick={() => handlePetTypeChange(pet.type)}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${activePet === pet.type ? 'bg-pet-orange/20' : 'bg-gray-200'}`}>
                <img src={pet.image} alt={pet.name} className="w-10 h-10 object-contain" />
              </div>
              <p className={`text-xs text-center ${activePet === pet.type ? 'font-semibold text-pet-orange' : ''}`}>{pet.name}</p>
            </div>
          ))}
        </div> */}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Фильтры</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-pet-orange"
                  onClick={resetFilters}
                >
                  Сбросить
                </Button>
              </div>
              <Filters filter={filter} onFilterChange={handleFilterChange} />
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-gray-600">Показано {products.length} товаров</p>
              </div>
              <div className="flex gap-4 items-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden flex items-center gap-2"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <SlidersHorizontal size={16} />
                  <span>Фильтры</span>
                </Button>

                <select
                  className="border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-pet-orange/40 p-2"
                  defaultValue="featured"
                >
                  <option value="featured">По популярности</option>
                  <option value="price-asc">Цена: от низкой к высокой</option>
                  <option value="price-desc">Цена: от высокой к низкой</option>
                  <option value="name-asc">Название: А-Я</option>
                  <option value="name-desc">Название: Я-А</option>
                </select>
              </div>
            </div>

            <ProductsList products={products} loading={loading} />
          </div>
        </div>
      </div>

      {/* Mobile filters overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Фильтры</h2>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-500"
                onClick={() => setMobileFiltersOpen(false)}
              >
                <X size={20} />
              </Button>
            </div>

            <Filters filter={filter} onFilterChange={handleFilterChange} />

            <div className="sticky bottom-0 pt-4 pb-2 bg-white border-t mt-8">
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={resetFilters}
                >
                  Сбросить
                </Button>
                <Button
                  className="flex-1 bg-pet-orange hover:bg-pet-orange/90"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  Применить
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ShopPage;
