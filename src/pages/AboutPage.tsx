import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import './aboutPage.css';

const AboutPage = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">О нашем зоомагазине</h1>
            <p className="text-xl text-gray-600">
              Мы заботимся о ваших любимых питомцах с душой и вниманием
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <p className="text-gray-700 mb-4">
                "Точка корма" была основана в 2025 году с простой миссией: обеспечивать владельцев
                домашних животных высококачественными кормами и аксессуарами по доступным ценам.
              </p>
              <p className="text-gray-700 mb-4">
                Мы создали место, где каждый питомец получает заботу и внимание, которых он заслуживает.
                Наши клиенты - это не просто покупатели, а члены большой семьи любителей животных.
                Мы всегда готовы помочь с выбором корма, поделиться советами по уходу и поддержать
                в любых вопросах, связанных с заботой о питомцах.
              </p>
              <p className="text-gray-700">
                Мы тщательно отбираем каждый продукт, гарантируя его высокое качество и безопасность.
                Наша команда постоянно работает над расширением ассортимента и улучшением сервиса,
                чтобы сделать покупки максимально удобными для наших клиентов.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-8 text-pet-orange tracking-wide">Наш директор по качеству</h3>
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-pet-orange rounded-full opacity-20"></div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <svg className="w-12 h-12 text-pet-orange animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <img src="/placeholders/comand/Director.png" alt="Директор по качеству" className="relative z-10 w-full max-w-md mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center value-card relative overflow-hidden">
              <div className="w-16 h-16 bg-pet-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pet-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Качество</h3>
              <p className="text-gray-600">
                Мы предлагаем только самые высококачественные товары для питомцев, гарантируя безопасность, надежность и удовлетворение.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center value-card relative overflow-hidden">
              <div className="w-16 h-16 bg-pet-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pet-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Забота</h3>
              <p className="text-gray-600">
                Мы действительно заботимся о питомцах и их владельцах, предлагая персонализированные советы и поддержку.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center value-card relative overflow-hidden">
              <div className="w-16 h-16 bg-pet-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pet-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Сообщество</h3>
              <p className="text-gray-600">
                Мы создаем сообщество любителей домашних животных и поддерживаем инициативы в области защиты животных.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Наша Команда</h2>
            <p className="text-gray-700 mb-12">
              Наша команда состоит из увлеченных любителей домашних животных с обширными знаниями в области
              ухода за питомцами. От диетологов до специалистов по поведению животных, мы здесь, чтобы помочь
              вам обеспечить наилучшую заботу о ваших питомцах.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-pet-orange/20 team-card">
              <div className="w-40 h-40 bg-gray-200 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-pet-orange/10 hover:ring-pet-orange/30 transition-all duration-300 relative">
                <div className="absolute inset-0 bg-pet-orange/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <img src="/placeholders/comand/Igor.png" alt="Игорь Зеликов" className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Игорь Зеликов</h3>
              <p className="text-pet-orange mb-3 font-medium">Основатель</p>
              <p className="text-gray-600">
                Игорь основал "Точку корма" с целью создания лучшего магазина кормов для домашних животных.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-pet-orange/20 team-card">
              <div className="w-40 h-40 bg-gray-200 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-pet-orange/10 hover:ring-pet-orange/30 transition-all duration-300 relative">
                <div className="absolute inset-0 bg-pet-orange/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <img src="/placeholders/comand/Ilya1.png" alt="Илья Гусаров" className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Илья Гусаров</h3>
              <p className="text-pet-orange mb-3 font-medium">Ведущий разработчик</p>
              <p className="text-gray-600">
                Илья отвечает за разработку и внедрение новых технологий в нашем магазине.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-pet-orange/20 team-card">
              <div className="w-40 h-40 bg-gray-200 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-pet-orange/10 hover:ring-pet-orange/30 transition-all duration-300 relative">
                <div className="absolute inset-0 bg-pet-orange/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <img src="/placeholders/comand/Ilya2.png" alt="Илья Моторин" className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Илья Моторин</h3>
              <p className="text-pet-orange mb-3 font-medium">Главный программист</p>
              <p className="text-gray-600">
                Илья обеспечивает техническую поддержку и развитие нашего онлайн-магазина.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-pet-orange/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Посетите наш магазин</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Приходите в наш магазин, чтобы исследовать полный ассортимент товаров и получить персонализированные
            рекомендации для ваших питомцев.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-pet-orange hover:bg-pet-orange/90"
              asChild
            >
              <Link to="/contact" state={{ scrollToTop: true }}>Свяжитесь с нами</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-pet-orange text-pet-orange hover:bg-pet-orange/10"
              asChild
            >
              <Link to="/shop" state={{ scrollToTop: true }}>Начать покупки</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

