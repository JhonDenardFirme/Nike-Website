import {headerLogo} from '../assets/images'; // Adjust the path and filename as needed
import {hamburger} from '../assets/icons'; // Adjust the path and filename as needed
import { navLinks } from '../constants';

function Nav() {
  return (
    <header>
      <nav className='fixed top-0 z-50 bg-white shadow-sm w-full px-8 py-4 flex flex-row justify-between '>
        <a href="/">
          <img src={headerLogo} alt="Header Logo" width={120} height={29} />
        </a>
        
        <ul className='flex flex-row justify-center items-center max-sm:hidden space-x-8'>
          {navLinks.map((item) => (
            <li key={item.label} >
              <a href={item.href} className='text-sm text-gray-400 transition-all ease-out duration-300 hover:text-gray-900'>{item.label}</a>
              
            </li>
          ))}
        </ul>

        <img src={hamburger} alt="Hamburger Menu" className="w-4 h-4 hidden max-sm:block"/>
      

      
      
      </nav>
    </header>
  );
}

export default Nav;
