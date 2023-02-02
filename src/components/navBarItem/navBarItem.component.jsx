function NavBarItem({ onClick, title, link, index }) {
  return (
    <li className='nav-items'>
      <p className='nav-links' data={index} onClick={onClick}>
        {title}
      </p>
    </li>
  );
}

export default NavBarItem;
