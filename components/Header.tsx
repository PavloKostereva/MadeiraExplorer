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
    // Close menu when clicking outside
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

      {/* Mobile Menu Overlay */}
      <div ref={menuRef} className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__content">
          <nav className="mobile-menu__nav">
            <Link
              href="/"
              className={`mobile-menu__link ${pathname === '/' ? 'active' : ''}`}
              onClick={closeMenu}>
              <span className="mobile-menu__icon">🏠</span>
              <span>Home</span>
            </Link>
            <Link
              href="/info"
              className={`mobile-menu__link ${pathname === '/info' ? 'active' : ''}`}
              onClick={closeMenu}>
              <span className="mobile-menu__icon">ℹ️</span>
              <span>Info</span>
            </Link>
            <Link
              href="/contact"
              className={`mobile-menu__link ${pathname === '/contact' ? 'active' : ''}`}
              onClick={closeMenu}>
              <span className="mobile-menu__icon">📧</span>
              <span>Contact</span>
            </Link>
            <Link
              href="/plant-now"
              className={`mobile-menu__link mobile-menu__link--highlight ${
                pathname === '/plant-now' ? 'active' : ''
              }`}
              onClick={closeMenu}>
              <span className="mobile-menu__icon">🌱</span>
              <span>Plant Now</span>
            </Link>
          </nav>

          <div className="mobile-menu__divider"></div>

          <div className="mobile-menu__info">
            <h3>Quick Links</h3>
            <div className="mobile-menu__quick-links">
              <a href="#about" className="mobile-menu__quick-link" onClick={closeMenu}>
                About Madeira
              </a>
              <a href="#activities" className="mobile-menu__quick-link" onClick={closeMenu}>
                Activities
              </a>
              <a href="#unesco" className="mobile-menu__quick-link" onClick={closeMenu}>
                UNESCO Sites
              </a>
              <a href="#climate" className="mobile-menu__quick-link" onClick={closeMenu}>
                Climate
              </a>
            </div>
          </div>

          <div className="mobile-menu__divider"></div>

          <div className="mobile-menu__social">
            <h3>Follow Us</h3>
            <div className="mobile-menu__social-links">
              <a
                href="#"
                className="mobile-menu__social-link"
                aria-label="Facebook"
                onClick={closeMenu}>
                <span>📘</span> Facebook
              </a>
              <a
                href="#"
                className="mobile-menu__social-link"
                aria-label="Instagram"
                onClick={closeMenu}>
                <span>📷</span> Instagram
              </a>
              <a
                href="#"
                className="mobile-menu__social-link"
                aria-label="Twitter"
                onClick={closeMenu}>
                <span>🐦</span> Twitter
              </a>
              <a
                href="mailto:pavlokostereva@gmail.com"
                className="mobile-menu__social-link"
                aria-label="Email"
                onClick={closeMenu}>
                <span>✉️</span> Email
              </a>
            </div>
          </div>

          <div className="mobile-menu__footer">
            <p>Madeira Explorer</p>
            <p className="mobile-menu__footer-subtitle">Discover the beauty of Madeira Island</p>
          </div>
        </div>
      </div>
    </>
  );
}
