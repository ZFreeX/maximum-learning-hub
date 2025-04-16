
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-maximum-blue to-maximum-darkblue text-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Образовательный центр МАКСИМУМ
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Раскройте свой потенциал с нашими инновационными программами обучения
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              className="bg-white text-maximum-blue hover:bg-maximum-lightblue"
            >
              Наши курсы
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-maximum-blue"
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
