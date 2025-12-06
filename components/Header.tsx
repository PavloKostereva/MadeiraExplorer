'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail !== undefined) {
        setIsMenuOpen(customEvent.detail);
      }
    };

    const button = menuBtnRef.current;
    if (button) {
      button.addEventListener('anim-menu-btn-clicked', handleClick);
      return () => {
        button.removeEventListener('anim-menu-btn-clicked', handleClick);
      };
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(event.target as Node)
      ) {
        if (isMenuOpen) {
          setIsMenuOpen(false);
          menuBtnRef.current?.classList.remove('anim-menu-btn--state-b');
        }
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    menuBtnRef.current?.classList.remove('anim-menu-btn--state-b');
  };

  return (
    <>
      <div className="top-line">
        <div className="container">
          <div className="row">
            <div className="col col--center">{/* <Link href="/" className="logo"></Link> */}</div>

            <div className="col col--center col--right col--lead">
              <nav className="main-menu">
                <ul>
                  <li className={pathname === '/' ? 'active' : ''}>
                    <Link href="/">Main</Link>
                  </li>
                  <li className={pathname === '/info' ? 'active' : ''}>
                    {pathname === '/info' ? <span>Info</span> : <Link href="/info">Info</Link>}
                  </li>
                  <li className={pathname === '/contact' ? 'active' : ''}>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              <Link href="/plant-now" className="button button--top">
                Plant now
              </Link>
            </div>

            <div className="col col--center">
              <button ref={menuBtnRef} className="submenu anim-menu-btn" aria-label="Toggle menu">
                <i className="anim-menu-btn__icon anim-menu-btn__icon--close"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className={`mobile-menu fixed top-0 right-0 h-screen z-[1000] overflow-hidden transition-all duration-400 ease-in-out shadow-[-5px_0_30px_rgba(0,0,0,0.5)] ${
          isMenuOpen ? 'w-[min(400px,85vw)]' : 'w-0'
        } bg-gradient-to-br from-dark/98 to-dark/95 backdrop-blur-[10px]`}>
        <div
          className={`mobile-menu__content p-8 h-full overflow-y-auto transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 translate-x-0 delay-200' : 'opacity-0 translate-x-[50px]'
          }`}>
          <nav className="mobile-menu__nav flex flex-col gap-2 mb-8">
            <Link
              href="/"
              className={`mobile-menu__link flex items-center gap-4 p-[1.2em_1.5em] text-gray no-underline rounded-[10px] transition-all duration-300 font-semibold text-[1.1em] border-2 border-solid border-transparent bg-white/5 hover:text-white hover:bg-green/10 hover:border-green hover:translate-x-1 ${
                pathname === '/' ? 'text-green border-green bg-green/15' : ''
              }`}
              onClick={closeMenu}>
              <span className="mobile-menu__icon text-[1.5em] flex items-center justify-center w-10 h-10 bg-green/10 rounded-lg">
                🏠
              </span>
              <span>Home</span>
            </Link>
            <Link
              href="/info"
              className={`mobile-menu__link flex items-center gap-4 p-[1.2em_1.5em] text-gray no-underline rounded-[10px] transition-all duration-300 font-semibold text-[1.1em] border-2 border-solid border-transparent bg-white/5 hover:text-white hover:bg-green/10 hover:border-green hover:translate-x-1 ${
                pathname === '/info' ? 'text-green border-green bg-green/15' : ''
              }`}
              onClick={closeMenu}>
              <span className="mobile-menu__icon text-[1.5em] flex items-center justify-center w-10 h-10 bg-green/10 rounded-lg">
                ℹ️
              </span>
              <span>Info</span>
            </Link>
            <Link
              href="/contact"
              className={`mobile-menu__link flex items-center gap-4 p-[1.2em_1.5em] text-gray no-underline rounded-[10px] transition-all duration-300 font-semibold text-[1.1em] border-2 border-solid border-transparent bg-white/5 hover:text-white hover:bg-green/10 hover:border-green hover:translate-x-1 ${
                pathname === '/contact' ? 'text-green border-green bg-green/15' : ''
              }`}
              onClick={closeMenu}>
              <span className="mobile-menu__icon text-[1.5em] flex items-center justify-center w-10 h-10 bg-green/10 rounded-lg">
                📧
              </span>
              <span>Contact</span>
            </Link>
            <Link
              href="/plant-now"
              className={`mobile-menu__link mobile-menu__link--highlight flex items-center gap-4 p-[1.2em_1.5em] text-green no-underline rounded-[10px] transition-all duration-300 font-semibold text-[1.1em] border-2 border-solid border-green bg-green/20 mt-4 hover:bg-green/30 hover:scale-105 ${
                pathname === '/plant-now' ? 'text-green border-green bg-green/15' : ''
              }`}
              onClick={closeMenu}>
              <span className="mobile-menu__icon text-[1.5em] flex items-center justify-center w-10 h-10 bg-green/10 rounded-lg">
                🌱
              </span>
              <span>Plant Now</span>
            </Link>
          </nav>

          <div className="h-px bg-gradient-to-r from-transparent via-green/30 to-transparent my-8"></div>

          <div className="mobile-menu__info mb-8">
            <h3 className="text-green text-[1.2em] mb-4 font-bold uppercase tracking-[0.1em]">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="#about"
                className="text-gray no-underline p-[0.8em_1em] border-l-[3px] border-l-transparent rounded-[5px] transition-all duration-300 text-[0.95em] bg-white/5 hover:text-white hover:border-l-green hover:bg-green/10 hover:pl-6"
                onClick={closeMenu}>
                About Madeira
              </a>
              <a
                href="#activities"
                className="text-gray no-underline p-[0.8em_1em] border-l-[3px] border-l-transparent rounded-[5px] transition-all duration-300 text-[0.95em] bg-white/5 hover:text-white hover:border-l-green hover:bg-green/10 hover:pl-6"
                onClick={closeMenu}>
                Activities
              </a>
              <a
                href="#unesco"
                className="text-gray no-underline p-[0.8em_1em] border-l-[3px] border-l-transparent rounded-[5px] transition-all duration-300 text-[0.95em] bg-white/5 hover:text-white hover:border-l-green hover:bg-green/10 hover:pl-6"
                onClick={closeMenu}>
                UNESCO Sites
              </a>
              <a
                href="#climate"
                className="text-gray no-underline p-[0.8em_1em] border-l-[3px] border-l-transparent rounded-[5px] transition-all duration-300 text-[0.95em] bg-white/5 hover:text-white hover:border-l-green hover:bg-green/10 hover:pl-6"
                onClick={closeMenu}>
                Climate
              </a>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-green/30 to-transparent my-8"></div>

          <div className="mobile-menu__social mb-8">
            <h3 className="text-green text-[1.2em] mb-4 font-bold uppercase tracking-[0.1em]">
              Follow Us
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="flex items-center gap-4 text-gray no-underline p-4 rounded-[10px] transition-all duration-300 bg-white/5 border border-solid border-transparent hover:text-white hover:bg-green/10 hover:border-green hover:translate-x-1"
                aria-label="Facebook"
                onClick={closeMenu}>
                <span className="text-[1.3em]">📘</span> Facebook
              </a>
              <a
                href="#"
                className="flex items-center gap-4 text-gray no-underline p-4 rounded-[10px] transition-all duration-300 bg-white/5 border border-solid border-transparent hover:text-white hover:bg-green/10 hover:border-green hover:translate-x-1"
                aria-label="Instagram"
                onClick={closeMenu}>
                <span className="text-[1.3em]">📷</span> Instagram
              </a>
              <a
                href="#"
                className="flex items-center gap-4 text-gray no-underline p-4 rounded-[10px] transition-all duration-300 bg-white/5 border border-solid border-transparent hover:text-white hover:bg-green/10 hover:border-green hover:translate-x-1"
                aria-label="Twitter"
                onClick={closeMenu}>
                <span className="text-[1.3em]">🐦</span> Twitter
              </a>
              <a
                href="mailto:pavlokostereva@gmail.com"
                className="flex items-center gap-4 text-gray no-underline p-4 rounded-[10px] transition-all duration-300 bg-white/5 border border-solid border-transparent hover:text-white hover:bg-green/10 hover:border-green hover:translate-x-1"
                aria-label="Email"
                onClick={closeMenu}>
                <span className="text-[1.3em]">✉️</span> Email
              </a>
            </div>
          </div>

          <div className="mt-auto pt-8 text-center border-t border-green/20">
            <p className="text-green font-bold text-[1.1em] uppercase tracking-[0.2em] mb-2">
              Madeira Explorer
            </p>
            <p className="text-gray text-[0.85em] opacity-70">
              Discover the beauty of Madeira Island
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999] transition-opacity duration-400"
          onClick={closeMenu}
        />
      )}
    </>
  );
}
