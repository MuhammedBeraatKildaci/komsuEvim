import { Link } from 'react-router'
import { useState } from 'react'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className='bg-gray-900 text-white p-4 lg:p-5'>
      <div className='max-w-7xl mx-auto'>
        {/* Top Row - Logo, Search, Menu Button */}
        <div className='flex justify-between items-center mb-4 md:mb-2'>
          {/* Logo */}
          <Logo />

          {/* Desktop Search */}
          <div className='hidden lg:flex items-center gap-2 flex-1 max-w-md'>
            <input 
              type="text" 
              placeholder='Ara...' 
              className='bg-gray-700 p-2 rounded-md w-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffd700] transition-all duration-200' 
            />
            <button className='bg-[#cfb53b] p-2 rounded-md hover:bg-[#ffd700] transition-colors duration-200'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:block'>
            <ul className='flex gap-4 lg:gap-6 justify-center items-center'>
              <li>
                <Link to='/' className='hover:text-[#ffd700] transition-colors duration-200'>
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to='/about' className='hover:text-[#ffd700] transition-colors duration-200'>
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to='/profile' className='hover:text-[#ffd700] transition-colors duration-200'>
                  Profil
                </Link>
              </li>
              <li className='bg-[#cfb53b] p-2 rounded-md hover:bg-[#ffd700] transition-colors duration-200'>
                <Link to='/signin'>Giriş Yap</Link>
              </li>
              <li className='bg-[#cfb53b] p-2 rounded-md hover:bg-[#ffd700] transition-colors duration-200'>
                <Link to='/signup'>Kayıt Ol</Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className='md:hidden p-2 rounded-md hover:bg-gray-700 transition-colors duration-200'
            aria-label='Toggle menu'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Search - Visible on tablet */}
        <div className='hidden md:block lg:hidden mb-4'>
          <div className='flex items-center gap-2'>
            <input 
              type="text" 
              placeholder='Ara...' 
              className='bg-gray-700 p-2 rounded-md flex-1 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffd700] transition-all duration-200' 
            />
            <button className='bg-[#cfb53b] p-2 rounded-md hover:bg-[#ffd700] transition-colors duration-200'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className='bg-gray-700 rounded-lg p-4'>
            {/* Mobile Search */}
            <div className='mb-4'>
              <div className='flex items-center gap-2'>
                <input 
                  type="text" 
                  placeholder='Ara...' 
                  className='bg-gray-600 p-2 rounded-md flex-1 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffd700] transition-all duration-200' 
                />
                <button className='bg-[#cfb53b] p-2 rounded-md hover:bg-[#ffd700] transition-colors duration-200'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu Items */}
            <ul className='flex flex-col gap-4'>
              <li>
                <Link 
                  to='/' 
                  onClick={closeMenu}
                  className='block py-2 px-4 rounded-md hover:bg-gray-600 transition-colors duration-200'
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link 
                  to='/about' 
                  onClick={closeMenu}
                  className='block py-2 px-4 rounded-md hover:bg-gray-600 transition-colors duration-200'
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link 
                  to='/profile' 
                  onClick={closeMenu}
                  className='block py-2 px-4 rounded-md hover:bg-gray-600 transition-colors duration-200'
                >
                  Profil
                </Link>
              </li>
              <li className='mt-4'>
                <Link 
                  to='/signin' 
                  onClick={closeMenu}
                  className='block bg-[#cfb53b] text-center py-2 px-4 rounded-md hover:bg-[#ffd700] transition-colors duration-200'
                >
                  Giriş Yap
                </Link>
              </li>
              <li className='mt-2'>
                <Link 
                  to='/signup' 
                  onClick={closeMenu}
                  className='block bg-[#cfb53b] text-center py-2 px-4 rounded-md hover:bg-[#ffd700] transition-colors duration-200'
                >
                  Kayıt Ol
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}