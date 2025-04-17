import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/placeholders/icons_pet/Logo.png"
                alt="Логотип Точка корма"
                className="h-8 w-auto mr-2"
              />
              <span className="font-montserrat font-bold text-xl">Точка корма</span>
            </div>
            <p className="text-gray-600 mb-4">
              Ваш любимый магазин кормов и аксессуаров для питомцев.
            </p>

          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Компания</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-pet-orange transition-colors">О нас</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-pet-orange transition-colors">Блог</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-pet-orange transition-colors">Вакансии</Link></li>
              <li><Link to="/gift-cards" className="text-gray-600 hover:text-pet-orange transition-colors">Подарочные карты</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-pet-orange transition-colors">Часто задаваемые вопросы</Link></li>
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
                  <h4 className="font-semibold mb-2">Наш адрес</h4>
                  <p className="text-gray-600">
                    214012, г. Смоленск, Ново-Московская улица, 2/8, Смоленск
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Телефон</h4>
                  <p className="text-gray-600">
                    <a href={"tel:+79203032909"}>
                      +7 (920) 303-29-09
                    </a>
                  </p>
                </div>
                <div className="text-center md:text-right">
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-gray-600">
                    <a href={"mailto:info@exauto24.ru"}>
                      info@exauto24.ru
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Точка корма. Все права защищены.</p>
              <p>ООО "Новые решения"</p>
              <p>ИНН 6732243595</p>
            </div>
            <p className="text-sm text-gray-600">
              Иконки предоставлены <a href="https://www.flaticon.com/ru/free-icons/" className="text-pet-orange hover:underline" target="_blank" rel="noopener noreferrer">Freepik - Flaticon</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
