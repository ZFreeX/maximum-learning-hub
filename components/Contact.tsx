
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-maximum-blue mb-4">Свяжитесь с нами</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Остались вопросы? Напишите нам, и наши специалисты свяжутся с вами в ближайшее время
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6">Отправить сообщение</h3>
            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Имя
                  </label>
                  <Input id="name" placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="example@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <Textarea id="message" placeholder="Введите ваше сообщение" rows={4} />
                </div>
                <Button className="w-full bg-maximum-blue hover:bg-maximum-darkblue">
                  Отправить
                </Button>
              </div>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <h3 className="text-xl font-bold mb-6">Контактная информация</h3>
              
              <div className="flex items-start">
                <MapPin className="mr-4 text-maximum-blue h-6 w-6 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Адрес</h4>
                  <p className="text-gray-600 mt-1">ул. Ленина 123, Москва, Россия, 123456</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="mr-4 text-maximum-blue h-6 w-6 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Телефон</h4>
                  <p className="text-gray-600 mt-1">+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="mr-4 text-maximum-blue h-6 w-6 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600 mt-1">info@maximum-edu.ru</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Часы работы</h4>
                <p className="text-gray-600">Понедельник - Пятница: 9:00 - 20:00</p>
                <p className="text-gray-600">Суббота: 10:00 - 17:00</p>
                <p className="text-gray-600">Воскресенье: Выходной</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
