
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <span className="font-bold text-2xl text-maximum-blue">МАКСИМУМ</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/#courses" className="text-gray-700 hover:text-maximum-blue font-medium">
              Курсы
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-maximum-blue font-medium">
              О нас
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-maximum-blue font-medium">
              Контакты
            </Link>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-maximum-blue"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="mt-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/#courses" 
                className="text-gray-700 hover:text-maximum-blue font-medium"
                onClick={() => setIsOpen(false)}
              >
                Курсы
              </Link>
              <Link 
                href="/#about" 
                className="text-gray-700 hover:text-maximum-blue font-medium"
                onClick={() => setIsOpen(false)}
              >
                О нас
              </Link>
              <Link 
                href="/#contact" 
                className="text-gray-700 hover:text-maximum-blue font-medium"
                onClick={() => setIsOpen(false)}
              >
                Контакты
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
