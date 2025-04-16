
import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import PetCategories from '../components/home/PetCategories';
import PopularProducts from '../components/products/PopularProducts';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <PetCategories />
      <PopularProducts />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Pet Shop?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pet-orange/20 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-pet-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Premium Quality Products</h3>
                    <p className="text-gray-600">We carefully select only the highest quality products for your beloved pets.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pet-orange/20 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-pet-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Fast Delivery</h3>
                    <p className="text-gray-600">We know how important it is to receive pet supplies quickly and reliably.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pet-orange/20 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-pet-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Easy Returns</h3>
                    <p className="text-gray-600">Not satisfied with your purchase? Return it within 30 days for a full refund.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pet-orange/20 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-pet-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Expert Support</h3>
                    <p className="text-gray-600">Our team of pet enthusiasts is here to help you with any questions or concerns.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-pet-orange rounded-full opacity-20 -z-10"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-pet-orange rounded-full opacity-20 -z-10"></div>
              <img src="/placeholders/pet-shop-interior.jpg" alt="Our pet shop" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
