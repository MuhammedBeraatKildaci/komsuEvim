import { Link } from "react-router";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center lg:justify-start mb-4">
                <Logo />
            </div>
            <p className="text-gray-300 text-sm lg:text-base text-center lg:text-left mb-4  lg:max-w-none">
                Gayrimenkul yönetiminde dijital dönüşüm. Komşular arası iletişimi ve dayanışmayı güçlendiren modern platform.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#ffd700] transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Twitter/X */}
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#ffd700] transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-[#ffd700] transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-[#ffd700] transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-[#ffd700] transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-center lg:text-left">Hızlı Linkler</h3>
            <ul className="space-y-2 text-center lg:text-left">
              <li>
                <Link to='/' className='text-gray-300 hover:text-[#ffd700] transition-colors duration-200 text-sm lg:text-base'>
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to='/about' className='text-gray-300 hover:text-[#ffd700] transition-colors duration-200 text-sm lg:text-base'>
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to='/profile' className='text-gray-300 hover:text-[#ffd700] transition-colors duration-200 text-sm lg:text-base'>
                  Profil
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-center lg:text-left">İletişim</h3>
            <div className="space-y-4">
              <div className="text-center lg:text-left">
                <p className="text-gray-300 text-sm lg:text-base mb-2">
                  <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  info@komsuevim.com
                </p>
                <p className="text-gray-300 text-sm lg:text-base">
                  <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  İstanbul, Türkiye
                </p>
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-2 text-center lg:text-left">Bültenimize Katılın</h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="E-posta adresiniz" 
                    className="bg-gray-700 p-2 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffd700] transition-all duration-200 text-sm flex-1 min-w-0"
                  />
                  <button className="bg-[#cfb53b] px-4 py-2 rounded-md hover:bg-[#ffd700] transition-colors duration-200 text-sm whitespace-nowrap">
                    Abone Ol
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 KomsuEvim. Tüm hakları saklıdır.
              </p>
            </div>
            <div className="flex space-x-6 text-center">
              <a href="#" className="text-gray-400 hover:text-[#ffd700] transition-colors duration-200 text-sm">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ffd700] transition-colors duration-200 text-sm">
                Kullanım Şartları
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ffd700] transition-colors duration-200 text-sm">
                Çerez Politikası
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
