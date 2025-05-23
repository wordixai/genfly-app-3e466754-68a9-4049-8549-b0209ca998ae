import { Coffee, Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold">Brew & Bean</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Crafting exceptional coffee experiences since 2015. Join us for the perfect cup 
              and a warm, welcoming atmosphere.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-amber-600 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-amber-600 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-amber-600 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-amber-600 transition-colors">Home</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-amber-600 transition-colors">Menu</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-amber-600 transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Coffee Street</li>
              <li>City, State 12345</li>
              <li>(555) 123-4567</li>
              <li>hello@brewandbean.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Brew & Bean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer