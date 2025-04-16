
import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">About Our Pet Shop</h1>
            <p className="text-xl text-gray-600">
              We're dedicated to providing the best care for your furry friends
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Our pet shop was founded in 2015 with a simple mission: to provide pet owners 
                with high-quality products and expert advice to help their pets live happier, 
                healthier lives.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small family business has grown into a trusted pet supply store 
                with multiple locations across the country. Throughout our growth, we've remained 
                committed to our core values of quality, care, and community.
              </p>
              <p className="text-gray-700">
                We carefully select every product we sell, ensuring that it meets our high standards 
                for quality and safety. We believe that every pet deserves the best, and we're here 
                to help pet owners provide just that.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-pet-orange rounded-full opacity-20"></div>
              <img 
                src="/placeholders/pet-shop-team.jpg" 
                alt="Our team" 
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-pet-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pet-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">
                We source only the highest quality products for pets, ensuring safety, durability, and satisfaction.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-pet-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pet-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Care</h3>
              <p className="text-gray-600">
                We truly care about pets and their owners, offering personalized advice and support.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-pet-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pet-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                We're building a community of pet lovers and support animal welfare initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-gray-700 mb-12">
              Our team consists of passionate pet lovers with extensive knowledge about pet care. 
              From nutritionists to animal behavior specialists, we're here to help you provide 
              the best care for your pets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden mx-auto mb-4">
                <img src="/placeholders/team-member-1.jpg" alt="Team Member" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Алексей Петров</h3>
              <p className="text-pet-orange mb-3">Основатель & CEO</p>
              <p className="text-gray-600">
                Алексей основал Pet Shop в 2015 году, воплотив свою страсть к заботе о животных.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden mx-auto mb-4">
                <img src="/placeholders/team-member-2.jpg" alt="Team Member" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Мария Иванова</h3>
              <p className="text-pet-orange mb-3">Ветеринарный консультант</p>
              <p className="text-gray-600">
                Мария - опытный ветеринар, который помогает нам выбирать лучшие продукты для вашего питомца.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden mx-auto mb-4">
                <img src="/placeholders/team-member-3.jpg" alt="Team Member" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Дмитрий Смирнов</h3>
              <p className="text-pet-orange mb-3">Менеджер по продуктам</p>
              <p className="text-gray-600">
                Дмитрий заботится о том, чтобы мы всегда предлагали свежие и качественные товары для питомцев.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-pet-orange/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Visit Our Store</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Come visit our store to explore our full range of products and get personalized recommendations for your pets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-pet-orange hover:bg-pet-orange/90"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-pet-orange text-pet-orange hover:bg-pet-orange/10"
              asChild
            >
              <Link to="/shop">Shop Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
