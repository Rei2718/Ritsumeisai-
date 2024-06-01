"use client";

import { useState, useEffect } from 'react';
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

  const toggleSubMenu = (menu: string) => {
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
        <ul className="text-white text-2xl space-y-6">
          <li><button onClick={() => handleLinkClick('/')}>Home</button></li>
          <li className="relative">
            <button onClick={() => toggleSubMenu('section01')}>Section1</button>
            <ul className={`pl-4 space-y-2 overflow-hidden transition-max-height duration-700 ${activeMenu === 'section01' ? 'max-h-40' : 'max-h-0'}`}>
              <li><button onClick={() => handleLinkClick('/section01/sub1')}>Subsection 1-1</button></li>
              <li><button onClick={() => handleLinkClick('/section01/sub2')}>Subsection 1-2</button></li>
            </ul>
          </li>
          <li className="relative">
            <button onClick={() => toggleSubMenu('section02')}>Section2</button>
            <ul className={`pl-4 space-y-2 overflow-hidden transition-max-height duration-700 ${activeMenu === 'section02' ? 'max-h-40' : 'max-h-0'}`}>
              <li><button onClick={() => handleLinkClick('/section02/sub1')}>Subsection 2-1</button></li>
              <li><button onClick={() => handleLinkClick('/section02/sub2')}>Subsection 2-2</button></li>
            </ul>
          </li>
          <li className="relative">
            <button onClick={() => toggleSubMenu('section03')}>Section3</button>
            <ul className={`pl-4 space-y-2 overflow-hidden transition-max-height duration-700 ${activeMenu === 'section03' ? 'max-h-40' : 'max-h-0'}`}>
              <li><button onClick={() => handleLinkClick('/section03/sub1')}>Subsection 3-1</button></li>
              <li><button onClick={() => handleLinkClick('/section03/sub2')}>Subsection 3-2</button></li>
            </ul>
          </li>
        </ul>
      </div>
      <img src="BG02.jpg" alt="BgImg" className="object-cover w-screen h-lvh fixed top-0 left-0 z-0"/>
    </>
  );
}

