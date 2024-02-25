import Link from 'next/link'

import { useState } from 'react'

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='menu'>
      {/* <div className="navigation-button">
    <span className="navigation-icon">&nbsp;</span>
  </div> */}

      <label
        onClick={toggleMenu}
        htmlFor='menu-toggle'
        className={`navigation-button ${menuOpen && 'menu-button-open'}`}
      >
        <span className={`navigation-icon ${menuOpen && 'nav-icon-open'}`}>
          &nbsp;
        </span>
      </label>

      <div className={`menu-background ${!menuOpen && 'menu-display-closed'}`}>
        <ul className='menu-list text-align-left'>
          <li className='menu-item'>
            <Link href='/psykologisk-behandling' className='menu-link'>
              <span>01</span> Behandling
            </Link>
          </li>
          <li className='menu-item'>
            <Link href='/psykologisk-veiledning' className='menu-link'>
              <span>02</span> Veiledning
            </Link>
          </li>
          <li className='menu-item'>
            <Link href='/istdp' className='menu-link'>
              <span>03</span> ISTDP
            </Link>
          </li>
          {/*  <li className='menu-item'>
            <Link href='/aedp' className='menu-link'>
              <span>04</span> AEDP
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default Menu
