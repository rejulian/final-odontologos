import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../Contexts/ThemeContext';

const Navbar = () => {

  const { theme, cambiarColor } = useContext(ThemeContext);


  const handleCambioColor = () => {
    const nuevoColor = theme.color === 'light' ? 'dark' : 'light';
    cambiarColor(nuevoColor);
  };

  const links = [
    {
      name:'Home',
      path: '/',
    },
    {
      name:'Favs',
      path: '/favs',
    },
    {
      name:'Contact',
      path: '/contact',
    },
  ]

  return (
    <nav className='navbar'>
      <ul>
        {links.map(link =>(
          <li key={link.name}><Link  className='link' to={link.path}>{link.name}</Link></li>
        ))}
      </ul>
      <button onClick={handleCambioColor}>{theme.color === 'light' ? '🌚' : '🌞'}</button>
    </nav>
  )
}

export default Navbar