
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-maximum-blue mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Страница не найдена</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Извините, запрашиваемая страница не существует или была перемещена.
        </p>
        <Link href="/">
          <Button size="lg" className="bg-maximum-blue hover:bg-maximum-darkblue">
            Вернуться на главную
          </Button>
        </Link>
      </div>
    </div>
  )
}
