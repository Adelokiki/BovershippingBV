import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUp, ChevronDown } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [terminalsDropdownOpen, setTerminalsDropdownOpen] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#1a3a52] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm">Your Reliable Storage and Logistics Solution</p>
        </div>
      </div>

      <nav className="bg-[#1e4a66] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <svg width="100" height="80" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 10 L45 25 L40 40 L35 25 Z" fill="#00bcd4" />
                <path d="M40 40 L45 25 L50 35 L45 50 Z" fill="#0097a7" />
                <path d="M40 40 L35 25 L30 35 L35 50 Z" fill="#0097a7" />
                <circle cx="40" cy="25" r="3" fill="white" />
              </svg>
              <div className="ml-3">
                <div className="text-white text-xl font-semibold">BoVer Shipping B.V.</div>
              </div>
            </Link>

            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`transition font-bold ${
                  isActive('/') ? 'text-[#00bcd4] border-b-2 border-[#00bcd4] pb-1' : 'text-white hover:text-[#00bcd4]'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`transition font-bold ${
                  isActive('/about') ? 'text-[#00bcd4] border-b-2 border-[#00bcd4] pb-1' : 'text-white hover:text-[#00bcd4]'
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`transition font-bold ${
                  isActive('/services') ? 'text-[#00bcd4] border-b-2 border-[#00bcd4] pb-1' : 'text-white hover:text-[#00bcd4]'
                }`}
              >
                Services
              </Link>
              <div
                className="relative group"
                onMouseEnter={() => setTerminalsDropdownOpen(true)}
                onMouseLeave={() => setTerminalsDropdownOpen(false)}
              >
                <button
                  className="transition font-bold flex items-center gap-1 text-white hover:text-[#00bcd4]"
                >
                  Our Terminals
                  <ChevronDown className="h-4 w-4" />
                </button>
                {terminalsDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white shadow-lg min-w-[250px] border border-gray-200">
                      <Link
                        to="/terminals/dos-bocas"
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-50 border-b border-gray-200 transition"
                      >
                        Dos Bocas Terminal
                      </Link>
                      <Link
                        to="/terminals/qingdao"
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-50 border-b border-gray-200 transition"
                      >
                        Qingdao Terminal
                      </Link>
                      <Link
                        to="/terminals/pengerang"
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-50 border-b border-gray-200 transition"
                      >
                        Pengerang Terminal
                      </Link>
                      <Link
                        to="/terminals/jurong"
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-50 border-b border-gray-200 transition"
                      >
                        Jurong Port
                      </Link>
                      <Link
                        to="/terminals/fujairah"
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-50 border-b border-gray-200 transition"
                      >
                        Fujairah Port
                      </Link>
                      <Link
                        to="/terminals/rotterdam"
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-50 border-b border-gray-200 transition"
                      >
                        Port of Rotterdam
                      </Link>
                      <Link
                        to="/terminals/ningbo"
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-50 border-b border-gray-200 transition"
                      >
                        Ningbo-Zhoushan Port
                      </Link>
                      <Link
                        to="/terminals/houston"
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition"
                      >
                        Port of Houston
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link
                to="/shipping"
                className={`transition font-bold ${
                  isActive('/shipping') ? 'text-[#00bcd4] border-b-2 border-[#00bcd4] pb-1' : 'text-white hover:text-[#00bcd4]'
                }`}
              >
                Logistics
              </Link>
              <Link
                to="/contact"
                className={`transition font-bold ${
                  isActive('/contact') ? 'text-[#00bcd4] border-b-2 border-[#00bcd4] pb-1' : 'text-white hover:text-[#00bcd4]'
                }`}
              >
                Contact
              </Link>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#1e4a66] border-t border-[#2a5a76]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 font-bold ${isActive('/') ? 'text-[#00bcd4]' : 'text-white hover:bg-[#2a5a76]'}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 font-bold ${isActive('/about') ? 'text-[#00bcd4]' : 'text-white hover:bg-[#2a5a76]'}`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`block px-3 py-2 font-bold ${isActive('/services') ? 'text-[#00bcd4]' : 'text-white hover:bg-[#2a5a76]'}`}
              >
                Services
              </Link>
              <div>
                <Link
                  to="/terminals"
                  className={`block px-3 py-2 font-bold ${isActive('/terminals') ? 'text-[#00bcd4]' : 'text-white hover:bg-[#2a5a76]'}`}
                >
                  Terminals
                </Link>
                <Link
                  to="/tank-storage"
                  className={`block px-3 py-2 pl-8 font-bold ${isActive('/tank-storage') ? 'text-[#00bcd4]' : 'text-white hover:bg-[#2a5a76]'}`}
                >
                  - Tank Storage
                </Link>
              </div>
              <Link
                to="/shipping"
                className={`block px-3 py-2 font-bold ${isActive('/shipping') ? 'text-[#00bcd4]' : 'text-white hover:bg-[#2a5a76]'}`}
              >
                Logistics
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 font-bold ${isActive('/contact') ? 'text-[#00bcd4]' : 'text-white hover:bg-[#2a5a76]'}`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main>{children}</main>

      <footer className="bg-[#0d1f2d] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            © <a href="#" className="underline hover:text-[#00bcd4]">2024 BoVer Shipping B.V.</a> All Rights Reserved.
          </p>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#00bcd4] hover:bg-[#00acc1] text-white p-3 shadow-lg transition z-50"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
