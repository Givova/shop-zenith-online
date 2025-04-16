
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, YouTube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pet-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              <span className="font-bold text-xl">Pet Shop</span>
            </div>
            <p className="text-gray-600 mb-4">
              Ваш любимый магазин для питомцев с широким выбором товаров и аксессуаров.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-500 hover:text-pet-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pet-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pet-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pet-orange transition-colors">
                <YouTube size={20} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Компания</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-pet-orange transition-colors">О нас</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-pet-orange transition-colors">Блог</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-pet-orange transition-colors">Вакансии</Link></li>
              <li><Link to="/gift-cards" className="text-gray-600 hover:text-pet-orange transition-colors">Подарочные карты</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-pet-orange transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Полезные ссылки</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-pet-orange transition-colors">Политика конфиденциальности</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-600 hover:text-pet-orange transition-colors">Условия использования</Link></li>
              <li><Link to="/shipping" className="text-gray-600 hover:text-pet-orange transition-colors">Доставка</Link></li>
              <li><Link to="/returns" className="text-gray-600 hover:text-pet-orange transition-colors">Возврат</Link></li>
              <li><Link to="/pet-care" className="text-gray-600 hover:text-pet-orange transition-colors">Советы по уходу</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-4">Обслуживание клиентов</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-600 hover:text-pet-orange transition-colors">Связаться с нами</Link></li>
              <li><Link to="/shipping" className="text-gray-600 hover:text-pet-orange transition-colors">Информация о доставке</Link></li>
              <li><Link to="/returns" className="text-gray-600 hover:text-pet-orange transition-colors">Политика возврата</Link></li>
              <li><Link to="/tracking" className="text-gray-600 hover:text-pet-orange transition-colors">Отслеживание заказа</Link></li>
              <li><Link to="/help" className="text-gray-600 hover:text-pet-orange transition-colors">Центр помощи</Link></li>
            </ul>
          </div>

          {/* Store Information */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 mt-6">
            <div className="border-t pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center md:text-left">
                  <h4 className="font-semibold mb-2">Наш магазин</h4>
                  <p className="text-gray-600">
                    г. Москва, ул. Пушкина, д. 10<br />
                    г. Петербург, наб. Фонтанки, д. 108
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Телефон</h4>
                  <p className="text-gray-600">+7 915 123 4567</p>
                </div>
                <div className="text-center md:text-right">
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-gray-600">petshop@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Pet Shop. Все права защищены.
            </p>
            <div className="flex items-center space-x-2">
              <img src="/visa.svg" alt="Visa" className="h-8" />
              <img src="/mastercard.svg" alt="Mastercard" className="h-8" />
              <img src="/mir.svg" alt="MIR" className="h-8" />
              <img src="/paypal.svg" alt="PayPal" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
