'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="top-line">
      <div className="row">
        <div className="col col--center">
          {/* <Link href="/" className="logo"></Link> */}
        </div>

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
          <button className="submenu anim-menu-btn">
            <i className="anim-menu-btn__icon anim-menu-btn__icon--close"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
