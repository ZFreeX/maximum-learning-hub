
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-maximum-darkblue text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">МАКСИМУМ</h3>
            <p className="text-gray-300">
              Ваш надежный партнер на пути к образовательному успеху. Качественное обучение для всех возрастов.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#courses" className="text-gray-300 hover:text-white transition-colors">
                  Курсы
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-maximum-accent">
                ВКонтакте
              </a>
              <a href="#" className="text-white hover:text-maximum-accent">
                Телеграм
              </a>
              <a href="#" className="text-white hover:text-maximum-accent">
                YouTube
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {currentYear} Образовательный центр МАКСИМУМ. Все права защищены.
            </p>
            <div className="mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white mr-6">
                Политика конфиденциальности
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
