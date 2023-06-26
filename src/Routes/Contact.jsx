import React, { useContext } from 'react'
import Form from '../Components/Form'
import { ThemeContext } from '../Contexts/ThemeContext';

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main style={{ backgroundColor: theme.color }}>
      <h1 className='title' style={{color: theme.color === 'white' ? 'black' : 'white'}}>Formulario de contacto</h1>
      <Form />
    </main>
  )
}

export default Contact