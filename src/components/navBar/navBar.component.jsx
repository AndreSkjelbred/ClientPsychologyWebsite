import NavBarItem from "../navBarItem/navBarItem.component";

import Link from "next/link";
import Image from "next/image";

function navLinkPressHandler(e) {
  const data = e.target.getAttribute("data");

  const selectedElement = document.getElementById(data.toString());

  selectedElement.scrollIntoView({ behavior: "smooth" });
}

function NavBar({ navBarItems, bestill }) {
  return (
    <div className='nav'>
      <div className='nav-items-box'>
        <Link href='/' className='logo-box'>
            <Image
            className='logo'
            src='/assets/original.png'
            fill
            alt='psykolog-trondheim-logo'
          /> 
        </Link>
        <ul className='nav-list '>
          {navBarItems?.map(({ title, link, index }) => (
            <NavBarItem
              onClick={navLinkPressHandler}
              title={title}
              link={link}
              key={title}
              index={index}
            />
          ))}
          {!bestill && (
            <Link href='/bestill' className='btn'>
              Bestill time
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
