
import { CheckCircle } from 'lucide-react'

const About = () => {
  const benefits = [
    'Опытные преподаватели с многолетним стажем',
    'Современные методики обучения',
    'Индивидуальный подход к каждому ученику',
    'Комфортные аудитории и онлайн-обучение',
    'Гибкий график занятий'
  ]

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-maximum-blue mb-6">О центре МАКСИМУМ</h2>
            <p className="text-gray-700 mb-6">
              Образовательный центр МАКСИМУМ уже более 10 лет помогает ученикам достигать высоких результатов в обучении. 
              Мы специализируемся на подготовке к экзаменам, обучении иностранным языкам и развитии профессиональных навыков.
            </p>
            <p className="text-gray-700 mb-6">
              Наша миссия — сделать качественное образование доступным для всех, кто стремится к знаниям и развитию.
              Мы верим, что правильный подход к обучению раскрывает потенциал каждого ученика.
            </p>
            
            <div className="mt-8">
              <h3 className="font-semibold text-xl mb-4 text-gray-900">Почему выбирают нас:</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-maximum-blue mr-3 h-5 w-5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video bg-maximum-lightblue flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-2xl font-bold text-maximum-blue mb-2">МАКСИМУМ</h3>
                <p className="text-gray-700">
                  Ваш путь к успеху начинается здесь
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
