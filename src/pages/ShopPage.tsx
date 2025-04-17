import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Search } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Filters from '../components/shop/Filters';
import ProductsList from '../components/shop/ProductsList';
import { Filter, PetType, Product } from '../types/types';
import { getFilteredProducts } from '../services/productService';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ShopPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const searchParams = new URLSearchParams(location.search);
  const petTypeFromUrl = searchParams.get('pet') as PetType | null;
  const searchFromUrl = searchParams.get('search');

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
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState(searchFromUrl || '');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc'>('featured');

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await getFilteredProducts(
        activePet || undefined,
        filter.categories.length > 0 ? filter.categories : undefined,
        filter.priceRange,
        filter.brands.length > 0 ? filter.brands : undefined,
        filter.tags.length > 0 ? filter.tags : undefined,
        searchTerm,
        sortBy
      );
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast({
        title: "Ошибка загрузки",
        description: "Не удалось загрузить товары. Пожалуйста, попробуйте позже.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filter, activePet, searchTerm, sortBy]);

  useEffect(() => {
    if (petTypeFromUrl && petTypeFromUrl !== activePet) {
      setActivePet(petTypeFromUrl);
    }
  }, [petTypeFromUrl]);

  useEffect(() => {
    if (searchFromUrl && searchFromUrl !== searchTerm) {
      setSearchTerm(searchFromUrl);
    }
  }, [searchFromUrl]);

  const handleFilterChange = (newFilter: Filter) => {
    setFilter(newFilter);
  };

  const handlePetTypeChange = (petType: PetType | null) => {
    setActivePet(petType);

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

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    if (value) {
      searchParams.set('search', value);
    } else {
      searchParams.delete('search');
    }
    navigate({
      pathname: location.pathname,
      search: searchParams.toString()
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Магазин</h1>

        <div className="flex flex-col lg:flex-row gap-8">
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

          <div className="flex-1">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
              <div className="flex items-center w-full gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <Input 
                    placeholder="Поиск товаров..." 
                    className="pl-10 w-full"
                    value={searchTerm}
                    onChange={(e) => handleSearchChange(e.target.value)}
                  />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden flex items-center gap-2"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <SlidersHorizontal size={16} />
                  <span>Фильтры</span>
                </Button>
              </div>
              <div className="flex gap-4 items-center">
                <Select value={sortBy} onValueChange={(value: typeof sortBy) => setSortBy(value)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">По популярности</SelectItem>
                    <SelectItem value="price-asc">Цена: от низкой к высокой</SelectItem>
                    <SelectItem value="price-desc">Цена: от высокой к низкой</SelectItem>
                    <SelectItem value="name-asc">Название: А-Я</SelectItem>
                    <SelectItem value="name-desc">Название: Я-А</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <ProductsList products={products} loading={loading} />
          </div>
        </div>
      </div>

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
