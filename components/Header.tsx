'use client'

export default function Header() {
  return (
    <div className="top-line">
      <div className="row">
        <div className="col col--center">
          {/* <a href="#" className="logo"></a> */}
        </div>

        <div className="col col--center col--right col--lead">
          <nav className="main-menu">
            <ul>
              <li>
                <a href="#">Main</a>
              </li>
              <li className="active">
                <span>Info</span>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <a href="#" className="button button--top">
            Plant now
          </a>
        </div>

        <div className="col col--center">
          <button className="submenu anim-menu-btn">
            <i className="anim-menu-btn__icon anim-menu-btn__icon--close"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
