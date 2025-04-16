
import { Card } from '@/components/ui/card'
import { Book, Code, GraduationCap } from 'lucide-react'

const courses = [
  {
    id: 1,
    title: 'Подготовка к ЕГЭ',
    description: 'Комплексная подготовка к единому государственному экзамену с опытными преподавателями.',
    icon: GraduationCap
  },
  {
    id: 2,
    title: 'Иностранные языки',
    description: 'Курсы английского, немецкого и других языков для детей и взрослых всех уровней.',
    icon: Book
  },
  {
    id: 3,
    title: 'Программирование',
    description: 'Обучение современным языкам программирования и технологиям для начинающих и продвинутых.',
    icon: Code
  }
]

const FeaturedCourses = () => {
  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-maximum-blue mb-4">Наши образовательные программы</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Образовательный центр МАКСИМУМ предлагает широкий спектр курсов для учащихся всех возрастов
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-maximum-lightblue rounded-full text-maximum-blue">
                  <course.icon size={28} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{course.title}</h3>
              <p className="text-gray-600 text-center">{course.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCourses
