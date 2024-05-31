"use client";

import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <a onClick={() => handleLinkClick('/')}>
            <div className="py-3 px-3 flex justify-start items-center">
              <img
                src="logo.png"
                alt="logo"
                className="w-10 h-10 bg-transparent cursor-pointer"
              />
            </div>
          </a>
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
        <ul className="text-white text-2xl space-y-4">
          <li><a onClick={() => handleLinkClick('/')}>Home</a></li>
          <li><a onClick={() => handleLinkClick('/section01')}>Section1</a></li>
          <li><a onClick={() => handleLinkClick('/section02')}>Section2</a></li>
          <li><a onClick={() => handleLinkClick('/section03')}>Section3</a></li>
        </ul>
      </div>
    </>
  );
}
