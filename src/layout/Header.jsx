function Header() {
  return (
    <nav className='red lighten-1'>
      <div className='nav-wrapper'>
        <a href='/' className='brand-logo'>
          🛒 Internet Shop
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='https://github.com/MichaelVeselov' target='_blank' rel='noreferrer'>
              GitHub
            </a>
          </li>
          <li>
            <a href='https://mve-react-shop-red.vercel.app' target='_blank' rel='noreferrer'>
              Deploy
            </a>
          </li>
          <li>
            <a href='https://github.com/MichaelVeselov' target='_blank' rel='noreferrer'>
              Author's Page
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
