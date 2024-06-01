"use client";

import { useState, useEffect, SetStateAction } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (href: string) => {
    if (pathname === href) {
      setIsMenuOpen(false);
    } else {
      router.push(href);
      setIsMenuOpen(false);
    }
  };

  const toggleSubMenu = (menu: SetStateAction<string>) => {
    setActiveMenu(activeMenu === menu ? '' : menu);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, searchParams]);

  return (
    <>
      {/* Header */}
      <header className="z-50 fixed top-0 w-full">
        <div className="flex justify-between items-center h-full w-full bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
          <button onClick={() => handleLinkClick('/')}>
            <div className="py-3 px-3 flex justify-start items-center">
              <img
                src="logo.png"
                alt="logo"
                className="w-10 h-10 bg-transparent cursor-pointer"
              />
            </div>
          </button>
          <div className='text-lg text-white'><span className='text-red-500'>R</span>itsumeikan Keisho</div>
          <div className="py-3 px-3 flex justify-end items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none z-50 relative w-10 h-10 px-1"
            >
              <div className={`w-8 h-0.5 bg-white mb-1.5 transition-all duration-700 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-8 h-0.5 bg-white mb-1.5 transition-all duration-700 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-8 h-0.5 bg-white transition-all duration-700 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </div>
        <div className="w-full border-t border-white/5"></div>
      </header>
      {/* Header_END */}

      {/* Fullscreen Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-40 transition-opacity duration-700 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <ul className="text-white text-2xl text-center">
          {/* HOME */}
          <li className='py-1'><button onClick={() => handleLinkClick('/')}>Home</button></li>

          {/* Section01 */}
          <li className='py-1'>
            <div className="flex flex-col items-center transform -translate-x-2.5">
              <button onClick={() => toggleSubMenu('section01')} className="flex items-center">
                <span className={`mr-2 text-sm transition-transform duration-500 ${activeMenu === 'section01' ? 'rotate-180' : 'rotate-0'}`}>              
                  <svg className="w-[10px] h-[10px] fill-gray-400" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                  </svg>
                </span>
                <span className="flex-grow text-center">Section1</span>
              </button>
              <ul className={`overflow-hidden transition-all duration-700 text-center ${activeMenu === 'section01' ? 'max-h-40 opacity-100 blur-none' : 'max-h-0 opacity-0 blur-sm'}`}>
                <li className='py-1'><button onClick={() => handleLinkClick('/section01/sub1')}>Subsection 1-1</button></li>
                <li className='py-1'><button onClick={() => handleLinkClick('/section01/sub2')}>Subsection 1-2</button></li>
              </ul>
            </div>
          </li>

          {/* Section02 */}
          <li className="py-1">
            <div className="flex flex-col items-center transform -translate-x-2.5">
              <button onClick={() => toggleSubMenu('section02')} className="flex items-center">
                <span className={`mr-2 text-sm transition-transform duration-500 ${activeMenu === 'section02' ? 'rotate-180' : 'rotate-0'}`}>
                  <svg className="w-[10px] h-[10px] fill-gray-400" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                  </svg>
                </span>
                <span className="flex-grow text-center">Section2</span>
              </button>
              <ul className={`overflow-hidden transition-all duration-700 text-center ${activeMenu === 'section02' ? 'max-h-40 opacity-100 blur-none' : 'max-h-0 opacity-0 blur-sm'}`}>
                <li className='py-1'><button onClick={() => handleLinkClick('/section02/sub1')}>Subsection 2-1</button></li>
                <li className='py-1'><button onClick={() => handleLinkClick('/section02/sub2')}>Subsection 2-2</button></li>
              </ul>
            </div>
          </li>

          {/* Section03 */}
          <li className="py-1">
            <div className="flex flex-col items-center transform -translate-x-2.5">
              <button onClick={() => toggleSubMenu('section03')} className="flex items-center">
                <span className={`mr-2 text-sm transition-transform duration-500 ${activeMenu === 'section03' ? 'rotate-180' : 'rotate-0'}`}>
                  <svg className="w-[10px] h-[10px] fill-gray-400" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                  </svg>
                </span>
                <span className="flex-grow text-center">Section3</span>
              </button>
              <ul className={`overflow-hidden transition-all duration-700 text-center ${activeMenu === 'section03' ? 'max-h-40 opacity-100 blur-none' : 'max-h-0 opacity-0 blur-sm'}`}>
                <li className='py-1'><button onClick={() => handleLinkClick('/section03/sub1')}>Subsection 3-1</button></li>
                <li className='py-1'><button onClick={() => handleLinkClick('/section03/sub2')}>Subsection 3-2</button></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* BgImg */}
      <img src="BG02.jpg" alt="BgImg" className="object-cover w-screen h-lvh fixed top-0 left-0 z-0"/>
    </>
  );
}
