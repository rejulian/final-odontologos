import React, { useContext } from 'react'
import Form from '../Components/Form'
import { ThemeContext } from '../Contexts/ThemeContext';

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme.color}>
      <h1 className={`title ${theme.color}`} >Formulario de contacto</h1>
      <Form />
    </main>
  )
}

export default Contact