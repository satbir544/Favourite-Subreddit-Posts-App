import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '24px'
    };

    return (
        <nav>
            <ul className='nav-links'>
                <Link style={navStyle} to='/'>
                    <li> HOME </li>
                </Link>
                <Link style={navStyle} to='/favourites'>
                    <li> FAVOURITES </li>
                </Link>
            </ul>
        </nav>
    );
  }
  
  export default Nav;
  